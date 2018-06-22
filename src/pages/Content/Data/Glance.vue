<template>
  <h1>Glance{{data}}</h1>

</template>
<script>
export default {
  name: "Glance",
  computed: {
    data() {
      return this.$store.state.glance.data;
    }
  },
  created() {
    this.$store.dispatch({
      type: "glance/getList",
      payload: {
        page: 1,
        pagesize: 10,
        obu: 1,
        status: 9
      }
    });
  }
};
</script>

