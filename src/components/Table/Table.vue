<template>
  <v-data-table
    :loading="loading"
    loading-text="Loading... Please wait"
    :headers="headers"
    :items="filteredPackages"
    :items-per-page="itemsPerPage"
    disable-sort
    class="elevation-1 packages-table"
    @click:row="selectPackage"
  ></v-data-table>
</template>

<script>
export default {
  props: {
    searchValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      headers: [],
      loading: true,
      itemsPerPage: 10,
    };
  },
  computed: {
    packages() {
      return this.$store.getters.packages;
    },
    filteredPackages() {
      return this.packages.filter((item) => {
        if (this.searchValue) {
          const formattedPackageName = item.name.toLowerCase();
          const formattedSearchValue = this.searchValue.toLowerCase();

          return formattedPackageName.includes(formattedSearchValue);
        }

        return item;
      });
    },
  },
  created() {
    this.fetchPackages();
  },
  methods: {
    async fetchPackages() {
      await this.$store.dispatch('fetchPackages');
      this.loading = false;

      this.createHeaders();
    },
    createHeaders() {
      const tableHeaderTitlesList = Object.keys(this.packages[0]);

      tableHeaderTitlesList.forEach((title) => {
        const formattedTitle = title.slice(0, 1).toUpperCase() + title.slice(1);

        this.headers.push({
          text: formattedTitle,
          value: title,
        });
      });
    },
    selectPackage(packageItem) {
      this.$emit('select-package', packageItem);
    },
  },
};
</script>

<style lang="scss">
.packages-table {
  tr {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
