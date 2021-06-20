<template>
  <section class="hero">
    <div class="container">
      <Header />
      <HTagOne text="Что такое даркстор? " />
      <P
        desc="Это магазин-склад без покупателей. Именно здесь, а не в розничном магазине собирают ваши заказы."
      />
      <div class="hero__swipe">
        <img src="../assets/icons/swipe.svg" alt="Свайп вниз" />
        <span>Свайп вниз</span>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import HTagOne from "../components/HTagOne.vue";
import P from "../components/P.vue";

export default {
  components: {
    Header,
    HTagOne,
    P,
  },
};
</script>
