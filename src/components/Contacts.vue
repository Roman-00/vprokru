<template>
  <div class="footer__contacts">
      <div class="footer__contacts--item" v-for="value in contacts_data" :key="value.id">
          <span>{{ value.name }}</span>
          <a :href="'tel:' + value.link">
              {{ value.phone }}
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
    contacts_data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>