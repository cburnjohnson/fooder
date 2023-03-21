<template>
  <Navbar />
  <Hero />
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import axios from 'axios';

async function getRestaurants() {
  const data = await axios.get('')

  console.log(data); //eslint-disable-line
}

getRestaurants();


</script>

<style scoped></style>
