<template>
  <v-dialog v-model="modal" width="500" @click:outside="close">
    <v-card>
      <v-card-title class="text-h6"> Package Info </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="text-center">
        <v-progress-circular
          v-if="loadingPackageDetails"
          class="loader"
          indeterminate
          color="primary"
        ></v-progress-circular>
        <ul v-else class="package-info-list">
          <li><span>Type:</span> {{ selectedPackage.type }}</li>
          <li><span>Name:</span> {{ selectedPackage.name }}</li>
          <template v-if="selectedPackageDetails">
            <li><span>Rank:</span> {{ selectedPackageDetails.rank }}</li>
            <li><span>Total:</span> {{ selectedPackageDetails.total }}</li>
            <li><span>Last version:</span> {{ packageLastVersion }}</li>
          </template>
          <li v-else class="error-message">
            Additional information is not available
          </li>
        </ul>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="close"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    modal: {
      type: Boolean,
      default: false,
    },
    selectedPackage: {
      type: Object,
      required: true,
    },
    selectedPackageDetails: {
      type: Object,
      default: null,
    },
    loadingPackageDetails: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    packageLastVersion() {
      const packageVersionsList = Object.keys(
        this.selectedPackageDetails.versions
      );
      return packageVersionsList[packageVersionsList.length - 1];
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">
.package-info-list {
  padding-top: 20px;
  padding-left: 0 !important;
  text-align: left;
  list-style: none;
  li {
    span {
      font-weight: 900;
    }
  }
}

.loader {
  margin-top: 20px;
}

.error-message {
  margin-top: 10px;
  color: #ff5252;
}
</style>
