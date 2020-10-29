<template>
  <v-form
    @submit="onSubmit"
    v-slot="{ errors }"
    :validation-schema="formSchema"
  >
    <label for="username">Username :</label>
    <v-field as="input" type="text" id="username" name="username" />
    <p>{{ errors.username }}</p>
    <label for="password">Password :</label>
    <v-field as="input" type="password" id="password" name="password" />
    <p>{{ errors.password }}</p>
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

    //handlers
    const onSubmit = () => {
      console.log("User login detail submited", {
        username: username.value,
        password: password.value,
      });
    };

    ///define form schema
    const formSchema = {
      username: (value: string) => {
        console.log(`validating value: ${value}`);
        return !value ? false : value.length;
      },
      password: (value: string) => {
        console.log(`validating value: ${value}`);

        if (!value || !value.length || value.length < 11) {
          return "Field must be at leats 10 chars long";
        }
        return true;
      },
    };

    return { onSubmit, formSchema, username, password };
  },
});
</script>