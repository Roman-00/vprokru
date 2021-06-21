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
          <form @submit.prevent="postData" class="offer__modal--form" novalidate="true">
            <div class="offer__modal--form-group">
              <label for="email">Введитее email:</label>
              <input type="email" name="email" id="email" v-model="modalSecond.email" />
              <div v-if="modalSecond.emailError.length">
                <p v-for="err in modalSecond.emailError" :key="err.index" class="offer__modal--form-error">
                    {{ err }}
                </p>
              </div>
            </div>
            <button class="button offer__modal--form-button" type="submit">отправить</button>
            <div v-if="modalSecond.succes.length">
              <p v-for="succes in modalSecond.succes" :key="succes.index">
                {{ succes }}
              </p>
            </div>
          </form>
        </slot>
      </modals>
    </div>
  </section>
</template>

<script>
import OfferItems from "../components/OfferItems.vue";
import modals from "../components/Modal.vue";
import axios from "axios";

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
        email: null,
        succes: [],
        emailError: [],
      },
    };
  },
  methods: {
    postData(e) {
      /*-- Валидация  --*/
      if(!this.modalSecond.email){
        this.modalSecond.emailError.push('Укажите электронную почту.');
        return
      }
      /*-- Валидация  --*/
      console.warn(this.modalSecond);
      axios
        .post(
          "https://vue-test-98b46-default-rtdb.firebaseio.com/data.json",
          this.modalSecond
        )
        .then((result) => {
          if (result.status == 200) {
            this.modalSecond.succes.push("Спасибо:), Мы с вами свяжемся");
            this.modalSecond.email = null;
          }
          console.log("data", result);
        })
        .catch((err) => console.log(err));

      if(!this.modalSecond.emailError.length) {
        return true;
      }
      e.preventDefault();
    },
  },
};
</script>
