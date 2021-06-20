<template>
  <section class="offer">
    <div class="container">
      <OfferItems :offer_data="offerItems"/>
      <!-- modal with validate -->
      <button class="btn btnPrimary" @click="modalValidate = !modalValidate">К покупкам</button>
      <modalValidate v-show="modalValidate" @close="modalValidate = false"/>
    </div>
  </section>
</template>

<script>
import OfferItems from "../components/OfferItems.vue";
import modalValidate from "../components/ModalValidate.vue";

export default {
  components: {
    OfferItems, modalValidate
  },
  data() {
    return {
      offerItems: [
        {
          id: 1,
          name: "Скидка",
          namedop: "1500 ₽",
          textb: "–500 ₽",
          text: "на первые три заказа по промокоду NEW",
          images: "https://i-shop.iteca.kz/images/icon/sale.svg",
          alt: "Скидка 1500 ₽"
        },
        {
          id: 2,
          name: "Бесплатная",
          namedop: "доставка",
          textb: "",
          text: "первого заказа",
          images: "https://i-shop.iteca.kz/images/icon/free.svg",
          alt: "Бесплатная доставка"
        },
      ],
      modalValidate: false
    };
  },
  methods: {
    submitSecondForm () {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })
      this.modalSecond.name = ''
      this.modalSecond.email = ''
      this.modalSecond.show = false
    }
  }
};
</script>
