<template>
  <button @click="count++">{{ count }}</button>
</template>

<script setup>
import * as Survey from 'survey-vue';
import 'survey-vue/survey.css';
import { ref } from 'vue';

const count = ref(0);
</script>
