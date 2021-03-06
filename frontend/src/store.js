import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    devices: [
      {
        enabled: false,
        id: "25",
        tags: ["test", "bbc"],
        certificate: "abc"
      },
      {
        enabled: true,
        id: "6",
        tags: ["test"],
        certificate: "abdd"
      }
    ],
    model: {
      enabled: undefined,
      id: "",
      tags: [],
      certificate: {
        pem_data: "",
        algorithm: ""
      }
    }
  },
  getters: {
    getDevice: state => id => {
      let device;
      let key;
      device = state.devices.find(device => device.id === id);
      if (device) {
        for (key in state.model) {
          if (!device[key]) device[key] = state.model[key];
        }
        return device;
      } else {
        return undefined;
      }
    },
    getAllDevices: state => {
      if (state.devices) {
        let device;
        let key;
        for (device of state.devices) {
          for (key in state.model) {
            if (!device[key]) {
              device[key] = state.model[key];
            }
          }
        }
        return state.devices;
      } else {
        return undefined;
      }
    }
  },
  mutations: {
    addDevice: (state, device) => {
      let deviceExists;
      deviceExists = state.devices.find(item => item.id === device.id);
      if (!deviceExists) {
        state.devices.push(device);
      }
    },
    updateDevice: (state, properties) => {
      let deviceIndex;
      let property;
      deviceIndex = state.devices.findIndex(
        device => device.id === properties.id
      );
      if (deviceIndex) {
        for (property in properties) {
          state.devices[deviceIndex][property] = properties[property];
        }
      }
    },
    unRegisterDevice: (state, id) => {
      let deviceIndex;
      deviceIndex = state.devices.findIndex(device => device.id === id);
      if (deviceIndex) {
        state.devices.splice(deviceIndex, 1);
      } else {
        return "Device Id doesn't exist";
      }
    }
  },
  actions: {
    addDevice: ({ commit }, device) => {
      commit("addDevice", device);
      return device;
    },
    updateDevice: ({ commit }, properties) => {
      commit("updateDevice", properties);
      return properties;
    },
    unRegisterDevice: ({ commit }, id) => {
      commit("unRegisterDevice", id);
      return id;
    }
  }
});
