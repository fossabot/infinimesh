<template>
  <v-container xs12>
    <v-layout column wrap>
      <h1 class="mb-3">Unregister device</h1>
      <v-flex>
        <v-card>
          <v-card-title primary-title>
            Are you sure you want to unregister device with Id: {{ id }}
          </v-card-title>
          <v-card-text>
            This will prevent clients from further communication with this device.
          </v-card-text>
          <v-card-actions>
            <v-btn
            round color="primary"
            dark
            @click="unRegisterDevice(id)"
            >
            Unregister device
            </v-btn>
          </v-card-actions>
        </v-card>
        <div>
          <v-alert
          :value="messageSuccess.value"
          type="success"
          icon="check_circle"
          >
          {{ messageSuccess.message }}
          </v-alert>
          <v-alert
           :value="messageFailure.value"
           type="error"
           icon="error"
           >
           {{ messageFailure.value }}: {{ messageFailure.error }}
           </v-alert>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      messageSuccess: {
        message: "Your device has been unregistered",
        value: false
      },
      messageFailure: {
        message: "Error in unregistering device",
        value: false,
        error: ""
      }
    };
  },
  methods: {
    unRegisterDevice(id) {
      this.$store.dispatch("unRegisterDevice", id);

      this.$http
        .delete("devices/" + id)
        .then(response => {
          if (response.status === 200) {
            this.messageSuccess.value = true;
            setTimeout(() => {
              this.messageSuccess.value = false;
              this.$router.push("/devices");
            }, 1000);
          }
        })
        .catch(e => {
          this.messageFailure.value = true;
          this.messageFailure.error = e;
        });
    }
  }
};
</script>

<style lang="css">
</style>
