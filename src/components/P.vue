<template>
    <p class="hero__description description">{{ desc }}</p>
</template>

<script>
export default {
  name: "P",
  props: {
    desc: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
</style>