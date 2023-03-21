<template>
  <main>
    <div v-for="restaurant in restaurants" :key="restaurant.name">
      {{ restaurant.name }}
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import axios from 'axios';

const restaurants: Ref<Restaurant[]> = ref([]);

type Restaurant = {
  name: string;
}

async function getRestaurants() {
  const restaurantsResponse = await axios.get(
    'http://localhost:5001/restaurants'
  );
  restaurants.value = restaurantsResponse.data.results;
}

getRestaurants();
</script>

<style scoped></style>
