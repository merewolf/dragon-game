export default {
  methods: {
    showToast(message, title) {
      this.$bvToast.toast(message, {
        title: title,
        variant: title === 'SUCCESS' ? 'success' : 'danger',
        solid: true,
        autoHideDelay: 1500,
        toaster: 'b-toaster-top-right',
      });
    },
  },
};
