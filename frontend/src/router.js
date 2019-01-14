import Vue from "vue";
import Router from "vue-router";
import Devices from "./views/Devices.vue";
import RegisterDevice from "./views/RegisterDevice.vue";
import UnRegisterDevice from "./views/UnRegisterDevice.vue";
import Shadow from "./views/Shadow.vue";
import DeviceManagement from "./views/DeviceManagement.vue";
import Welcome from "./views/Welcome.vue";
import LoginUser from "./views/LoginUser.vue";
import RegisterUser from "./views/RegisterUser.vue";
import LogoutUser from "./views/LogoutUser.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome
    },
    {
      path: "/devices",
      name: "View devices",
      component: Devices
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "Home" */ "./views/Home.vue"),
    },
    {
      path: "/devices/manage",
      name: "Manage devices",
      component: DeviceManagement
    },
    {
      path: "/devices/show/:id",
      component: Shadow,
      name: "Shadow"
    },
    {
      path: "/devices/register",
      name: "Register device",
      component: RegisterDevice
    },
    {
      path: "/devices/:id/unregister",
      name: "Unregister device",
      component: UnRegisterDevice
    },
    {
      path: "/user/register",
      name: "Register new user",
      component: RegisterUser
    },
    {
      path: "/user/login",
      name: "Login",
      component: LoginUser
    },
    {
      path: "/user/logout",
      name: "Logout",
      component: LogoutUser
    },
    {
      path: "*",
      redirect: "/devices"
    }
  ]
});
