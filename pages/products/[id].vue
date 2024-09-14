<template>
  <div>
    <p>products</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

const routeName = ref(null);
onMounted(() => {
  routeName.value = route.params.id;
  console.log("routeName", routeName.value);
  if (routeName.value) {
    getProducts();
  }
});

const getProducts = async () => {
  try {
    const data = $fetch(
      `https://fakestoreapi.com/products/category/${routeName.value}`,
    );
    console.log("data", data);
  } catch (err) {
    console.log(err);
  }
};
</script>

<style></style>
