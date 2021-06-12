<template>
  <v-text-field
    :value="value"
    solo
    label="Search"
    append-icon="mdi-magnify"
    @input="$emit('input', $event)"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss"></style>
