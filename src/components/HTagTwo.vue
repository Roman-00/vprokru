<template>
    <h2 class="title__second">{{ title }}</h2>
</template>

<script>
export default {
  name: "HTagTwo",
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.title__second
        font-family: 'Rotonda Bold', sans-serif
        font-size: 36px
        line-height: 46px
        text-align: center
        color: #26303B
</style>