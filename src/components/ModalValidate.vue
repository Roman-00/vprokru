<template>
  <modal
    title="Modal with form + Validate"
    @close="$emit('close')">
    <!-- body -->
    <slot name="body">
      <form @submit.prevent="onSubmit">
        <!-- email -->
        <div class="form-item" :class="{ errorInput: $v.email.$error }">
          <label>Email:</label>
          <p class="errorText" v-if="!$v.email.required"> Filed is required! </p>
          <p class="errorText" v-if="!$v.email.email"> Email is not correct!</p>
          <input
            v-model="email"
            :class="{ error: $v.email.$error }"
            @change="$v.email.$touch()">
        </div>
        <!-- button -->
        <button class="btn btnPrimary">Submit!</button>
      </form>
    </slot>
  </modal>
</template>

<script>
import { required, email } from "vuelidate";
import modal from "./UI/Modal.vue";

export default {
  components: { modal },
  data () {
    return {
      name: '',
      email: ''
    }
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const user = {
          name: this.name,
          email: this.email
        }
        console.log(user)

        // DONE!
        this.name = ''
        this.email = ''
        this.$v.$reset()
        this.$emit('close')
      }
    },
  }
}
</script>

<style lang="scss">
.form-item .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 13.4px;
  color: #de4040;
}
.form-item {
  &.errorInput .errorText {
    display: block;
  }
}
input.error {
  border-color: #de4040;
}

</style>
