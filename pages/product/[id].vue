<template>
  <div class="w-full px-[10%]">
    <div class="card h-full">
      <Galleria
        :value="images"
        :responsiveOptions="responsiveOptions"
        :numVisible="6"
        :thumbnailsPosition="position"
        containerStyle="max-width: 540px"
      >
        <template #item="slotProps">
          <img
            :src="slotProps.item.itemImageSrc"
            :alt="slotProps.item.alt"
            style="width: 100%; display: block"
          />
        </template>
        <template #thumbnail="slotProps">
          <div class="teste grid justify-center gap-4">
            <img
              :src="slotProps.item.thumbnailImageSrc"
              :alt="slotProps.item.alt"
              style="width: 100%; display: block"
            />
          </div>
        </template>
      </Galleria>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from "@/service/PhotoService";
import Galleria from "primevue/galleria";

const images = ref();
const position = ref("left");
const positionOptions = ref([
  {
    label: "Bottom",
    value: "bottom",
  },
  {
    label: "Top",
    value: "top",
  },
  {
    label: "Left",
    value: "left",
  },
  {
    label: "Right",
    value: "right",
  },
]);
const responsiveOptions = ref([
  {
    breakpoint: "1300px",
    numVisible: 5,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
  },
]);

onMounted(() => {
  PhotoService.getImages().then((data) => (images.value = data));
});
</script>

<style scoped>
.card {
  background: var(--card-background);
  border: var(--card-border);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  height: 100%; /* Garante que o card ocupe a altura total */
}

.p-galleria {
  height: 100%; /* Garante que a galeria ocupe a altura do card */
}

.p-galleria-thumbnails-left,
.p-galleria-thumbnails-content {
  height: 100% !important; /* Faz os thumbnails ocuparem a altura total */
}

.p-galleria-thumbnails-left .teste {
  height: 100%; /* Garante que o container de thumbnails ocupe 100% da altura */
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
