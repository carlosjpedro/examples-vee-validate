/* eslint-disable */
import { defineRule } from "vee-validate";
import { min_value, max_value } from '@vee-validate/rules'

defineRule('required', (value: string) =>
    !value ? false : !!value.length);



defineRule('min_len_10', (value: string) => {
    if (!value || !value.length || value.length < 11) {
        return "Field must be at leats 10 chars long";
    }
    return true;
});

//using pre-defined rules.
defineRule('min_value', min_value);
defineRule('max_value', max_value);