export const useStore = defineStore("store", {
  state: () => ({
    categories: null,
    products: null,
  }),
  persist: true,
});
