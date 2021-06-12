<template>
  <div class="table-box">
    <TableSearch v-model="search" />
    <Table :search-value="search" @select-package="selectPackageHandler" />
    <TableModal
      v-if="selectedPackage"
      :modal="modal"
      :selected-package="selectedPackage"
      :selected-package-details="selectedPackageDetails"
      :loading-package-details="loadingPackageDetails"
      @close="closeModal"
    />
  </div>
</template>

<script>
import { loadPackageDetails } from '@/api';

import Table from '@/components/Table/Table';
import TableSearch from '@/components/Table/TableSearch';
import TableModal from '@/components/Table/TableModal';

export default {
  components: {
    Table,
    TableSearch,
    TableModal,
  },
  data() {
    return {
      search: '',
      modal: false,
      selectedPackage: null,
      selectedPackageDetails: null,
      loadingPackageDetails: false,
    };
  },
  methods: {
    async selectPackageHandler(selectedPackage) {
      const type = selectedPackage.type;
      const name = selectedPackage.name;

      this.selectedPackage = selectedPackage;
      this.openModal();

      this.loadingPackageDetails = true;
      await this.fetchPackageDetails(type, name);
      this.loadingPackageDetails = false;
    },
    async fetchPackageDetails(type, name) {
      try {
        const { data } = await loadPackageDetails(type, name);
        this.selectedPackageDetails = data;
      } catch (e) {
        console.error(e);
      }
    },
    resetSelectedPackage() {
      this.selectedPackage = null;
      this.selectedPackageDetails = null;
    },
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
      this.resetSelectedPackage();
    },
  },
};
</script>

<style></style>
