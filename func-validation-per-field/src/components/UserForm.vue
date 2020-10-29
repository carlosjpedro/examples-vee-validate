<template>
  <form @submit.prevent="onSubmit">
    <label for="username">Username :</label>
    <input type="text" id="username" name="username" />

    <label for="password">Password :</label>
    <input type="password" id="password" name="password" />

    <button>Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
      
    //fields
    const username = ref<string>();
    const password = ref<string>();

    //handlers
    const onSubmit = () => {
      console.log("User login detail submited", {
        username: username.value,
        password: password.value,
      });
    };

    return { onSubmit, username, password };
  },
});
</script>