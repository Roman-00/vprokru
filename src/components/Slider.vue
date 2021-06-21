<template>
  <div class="slider__container">
    <div class="slider__wrapper">
      <div class="slider" :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%' }">
        <SliderItem
          v-for="item in carousel_data"
          :key="item.id"
          :item_data="item"
        />
      </div>
    </div>
    <div class="slider__button--container">
      <button @click="prevSlide" class="slider__button--prev">
      <img src="../assets/arrow-l.svg" alt="Arow Prev">
      </button>
      <button @click="nextSlide" class="slider__button--next">
        <img src="../assets/arrow-r.svg" alt="Arow Next">
      </button>
    </div>
  </div>
  
</template>

<script>
import SliderItem from "./SliderItem.vue";

export default {
  name: "Slider",
  components: {
    SliderItem,
  },
  props: {
    carousel_data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentSlideIndex: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
        if(this.currentSlideIndex >= this.carousel_data.length - 1) {
            this.currentSlideIndex = 0
        } else {
            this.currentSlideIndex++;
        }
    },
  },
};
</script>
