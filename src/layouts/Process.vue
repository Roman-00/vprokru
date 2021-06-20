<template>
  <section class="process">
    <div class="container">
      <HTagTwo title="Взгляните на процесс сборки своими глазами" />
      <div class="process__slider">
        <Slider :carousel_data="sliderItems"/>
      </div>
    </div>
  </section>
</template>

<script>
import HTagTwo from "../components/HTagTwo.vue";
import Slider from "../components/Slider.vue";

export default {
  components: {
    HTagTwo, Slider
  },
  data() {
    return {
      sliderItems: [
        { 
          id: 1, 
          name: "Привезём точно по списку", 
          desc: "Сборщик берëт с собой наручный терминал, на котором он видит весь список покупок для каждого заказа.",
          images: "https://i-shop.iteca.kz/images/slider/slide1.jpg" 
        },
        { 
          id: 2, 
          name: "Собираем быстро и эффективно", 
          desc: "Для улучшения эргономики пространства товары размещены от тяжëлых к лëгким, находящимся уже в конечной зоне упаковки.",
          images: "https://i-shop.iteca.kz/images/slider/slide2.jpg" 
        },
        { 
          id: 3, 
          name: "За свежесть и качество отвечаем", 
          desc: "Выделены специальные зоны, в том числе холодная и морозильная.",
          images: "https://i-shop.iteca.kz/images/slider/slide3.jpg" 
        },
        { 
          id: 4, 
          name: "Шампунь не положат рядом с рыбой", 
          desc: "Собираем и упаковываем ваш заказ с заботой: соблюдаем принципы товарного соседства и учитываем вес товара.",
          images: "https://i-shop.iteca.kz/images/slider/slide4.jpg" 
        },
        { 
          id: 5, 
          name: "Довезëм в сохранности даже яйца", 
          desc: "Бережно транспортируем контейнеры, фиксируя их стяжными ремнями. Системы охлаждения поддерживают температурный режим.",
          images: "https://i-shop.iteca.kz/images/slider/slide5.jpg" 
        }
      ]
    }
  }
};
</script>
