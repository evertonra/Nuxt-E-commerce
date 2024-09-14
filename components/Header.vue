<template>
  <header class="w-full">
    <div
      class="flex w-full items-center justify-between border-b-2 border-blue-950 bg-white px-[10%] py-2"
    >
      <div>
        <img class="w-[100px]" src="../assets/imgs/logo.png" alt="" />
      </div>
      <div class="flex items-center gap-4">
        <NuxtLink to="/" class="text-[16px] font-semibold text-blue-900"
          >Home</NuxtLink
        >
        <ul v-for="(category, index) in categories" :key="index">
          <li>
            <NuxtLink
              :to="'/products/' + category"
              class="text-[16px] font-semibold text-blue-900"
              >{{ capitalizeFirstLetter(category) }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useStore } from "@/store/store";

const store = useStore();
const categories = ref(null);
const { capitalizeFirstLetter } = useUtilities();
onMounted(async () => {
  categories.value = store.categories;
  console.log("categproes", categories.value);
});
</script>

<style></style>
