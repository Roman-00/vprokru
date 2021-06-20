<template>
    <div class="slider__item">
        <div class="slider__item--cover">
            <img :src="item_data.images" alt="" class="slider__item--img">
            <span class="slider__item--count">
                {{ item_data.id }}
            </span>
        </div>
        <div class="slider__item--info">
            <h4 class="slider__item--info-title">
                {{ item_data.name }}
            </h4>
            <span class="slider__item--info-desc">
                {{ item_data.desc }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "SliderItem",
    props: {
        item_data: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {}
    },
    computed: {}
}
</script>