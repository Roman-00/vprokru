<template>
  <div class="app__wrapper">
    <Hero />
    <Benefits />
    <Process />
    <Offer />
    <Footer />
  </div>
</template>

<script>
import Hero from "./layouts/Hero.vue";
import Benefits from "./layouts/Benefits.vue";
import Process from "./layouts/Process.vue";
import Offer from "./layouts/Offer.vue";
import Footer from "./layouts/Footer.vue";

export default {
  name: "App",
  components: {
    Hero, Benefits, Process, Offer, Footer
  },
};
</script>

