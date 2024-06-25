<!-- @format -->

<!-- components/Modal.vue -->
<template>
  <div
    v-if="firstLoad"
    class="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50"
    @click="closeModal">
    <div class="scale-75 max-sm:scale-50">
      <div class="p-8">
        <button
          @click="closeModal"
          class="bg-red-700 rounded-full text-white font-bold py-2 px-4 float-end text-sm">
          X
        </button>
        <PageOne />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Modal",
  setup() {
    const firstLoad = ref(true);

    const closeModal = () => {
      firstLoad.value = false;
    };

    return {
      firstLoad,
      closeModal,
    };
  },
});
</script>

<style scoped>
/* Add Tailwind CSS classes or custom styles here */
</style>
