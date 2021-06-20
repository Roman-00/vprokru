<template>
  <section class="benefits">
    <div class="container">
      <HTagTwo title="Преимущества даркстора" />
      <Block/>
    </div>
  </section>
</template>

<script>
import HTagTwo from "../components/HTagTwo.vue";
import Block from "../components/Block.vue";

export default {
  components: {
    HTagTwo, Block
  },
};
</script>
