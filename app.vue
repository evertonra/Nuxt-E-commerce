<template>
  <div>
    <Header />
    <NuxtPage />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { useStore } from "@/store/store";

const store = useStore();

const { data } = await useAsyncData(
  "apiData",
  () => $fetch("https://fakestoreapi.com/products/categories"),

  {
    method: "GET",
  },
);

if (data.value) {
  store.categories = data.value;
  console.log("data", data.value);
}
</script>
