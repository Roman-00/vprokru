<template>
  <section class="offer">
    <div class="container">
      <OfferItems :offer_data="offerItems" />
      <button
        class="button offer__modal--button"
        @click="modalSecond.show = !modalSecond.show"
      >
        К покупкам
      </button>
      <!-- first modal -->
      <modals
        title="Оставить заявку"
        v-show="modalSecond.show"
        @close="modalSecond.show = false"
      >
        <!-- body -->
        <slot name="body">
          Hello World
        </slot>
      </modals>
    </div>
  </section>
</template>

<script>
import OfferItems from "../components/OfferItems.vue";
import modals from "../components/Modal.vue";

export default {
  components: {
    OfferItems,
    modals,
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
          alt: "Скидка 1500 ₽",
        },
        {
          id: 2,
          name: "Бесплатная",
          namedop: "доставка",
          textb: "",
          text: "первого заказа",
          images: "https://i-shop.iteca.kz/images/icon/free.svg",
          alt: "Бесплатная доставка",
        },
      ],
      modalSecond: {
        show: false,
      },
    };
  },
};
</script>
