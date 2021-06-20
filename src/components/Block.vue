<template>
  <div class="benefits__block">

    <div class="benefits__block--item" v-for="value in block" :key="value.block">
      <div class="benefits__block--item-info">
        <duv class="benefits__block--item-cover">
          <img :src="value.images" :alt="value.title" />
        </duv>
        <h3 class="benefits__block--item-title">
          {{ value.title }}
        </h3>
        <span class="benefits__block--item-desc">
          {{ value.description }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Block",
  data() {
    return {
        block: [],
        errors: []
    }
  },
  created() {
     axios.get('https://vue-test-98b46-default-rtdb.firebaseio.com/benefits.json') 
     .then(response => {
         this.block = response.data
         console.log(response)
     })
     .catch(e => {
         this.errors.push(e);
     })
  }
};
</script>
