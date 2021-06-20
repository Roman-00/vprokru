import Vue from 'vue';
import Vuelidate from 'vuelidate';
import { createApp } from "vue";
import App from "./App.vue";
import "./fonts.css";
import "./assets/sass/main.sass";

// Plugins
Vue.use(Vuelidate);

createApp(App).mount("#app");
