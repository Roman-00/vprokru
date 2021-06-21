<template>
  <div class="footer__social">
      <div class="footer__social--item" v-for="value in social_data" :key="value.id">
          <a :href="value.link" target="_blank">
              <img :src="value.img" :alt="value.name">
          </a>
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    social_data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>