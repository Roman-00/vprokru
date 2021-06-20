<template>
    <h1 class="title">{{ text }}</h1>
</template>

<script>
export default {
  name: "HTagOne",
  props: {
    text: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.title
    font-family: 'Rotonda Bold', sans-serif
    font-size: 54px
    line-height: 60px
    letter-spacing: 0.02em
    text-transform: uppercase
    color: #fff
</style>