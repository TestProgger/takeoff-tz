<template>
  <nuxt></nuxt>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    name: "",
    phone: "",
    email: "",
    notes: "",
  }),

  methods: {
    saveContact() {
      this.$emit('addcontact', {})
    }
  },
};
</script>