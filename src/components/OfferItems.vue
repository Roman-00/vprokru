<template>
  <div class="offer__block">

    <div class="offer__block--item" v-for="value in offer_data" :key="value.id">
      <div class="offer__block--circle">
        <img :src="value.images" :alt="value.alt" />
      </div>
      <div>
        <div class="offer__block--title">{{ value.name }}<span>{{ value.namedop }}</span></div>
        <div class="offer__block--text">
            <b>{{ value.textb }}</b> {{ value.text }}
        </div>
      </div>
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
    offer_data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
