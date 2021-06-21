<template>
    <footer class="footer" id="footer"> 
        <div class="container">
            <a class="footer__logo">
                <img src="../assets/logo.svg" alt="logo">
            </a>
            <div class="footer__info">
                <Contacts :contacts_data="contactsInfo"/>
                <Social :social_data="socialInfo"/>
            </div>
        </div>
    </footer>
</template>

<script>
import Contacts from "../components/Contacts.vue";
import Social from "../components/Social.vue";

export default {
  components: {
    Contacts,
    Social
  },
  data() {
    return {
        contactsInfo: [
        {
          id: 1,
          name: "Москва",
          phone: "+7 495 797-57-77",
          link: "+74957975777",
        },
        {
          id: 2,
          name: "Санкт-Петербург",
          phone: "+7 812 385-99-55",
          link: "+781238599557",
        },
      ],
      socialInfo: [
        {
          id: 1,
          name: "FaceBook",
          link: "https://facebook.com",
          img: "https://i-shop.iteca.kz/images/icon/facebook.svg"
        },
        {
          id: 2,
          name: "Vk",
          link: "https://facebook.com",
          img: "https://i-shop.iteca.kz/images/icon/vk.svg"
        },
        {
          id: 3,
          name: "Instagram",
          link: "https://facebook.com",
          img: "https://i-shop.iteca.kz/images/icon/instagram.svg"
        },
        {
          id: 4,
          name: "Однокласники",
          link: "https://facebook.com",
          img: "https://i-shop.iteca.kz/images/icon/ok.svg"
        },
      ],
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.footer
    &__logo
        display: block
        width: 150px
        img
            width: 100%
</style>
