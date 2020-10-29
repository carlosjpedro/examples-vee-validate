<template>
  <v-form @submit="onSubmit" v-slot="{ errors }">
    <label for="username">Username :</label>
    <v-field
      as="input"
      type="text"
      id="username"
      name="username"
      rules="required|min_len_10"
    />
    <p>{{ errors.username }}</p>
    <label for="password">Password :</label>
    <v-field
      as="input"
      type="password"
      id="password"
      name="password"
      rules="required"
    />
    <p>{{ errors.password }}</p>
    <label for="age">Age: </label>
    <v-field
      as="input"
      type="number"
      id="age"
      name="age"
      rules="min_value:16"
    />
    <p>{{ errors.age }}</p>
    <button>Submit</button>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Form as VForm, Field as VField } from "vee-validate";

export default defineComponent({
  components: { VForm, VField },
  setup() {
    //fields
    const username = ref<string>();
    const password = ref<string>();
    const age = ref<number>();

    return { username, password, age };
  },
});
</script>