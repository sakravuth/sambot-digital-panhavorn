<!-- @format -->

<template>
  <div>
    <!-- <AppHeader /> -->

    <Modal />

    <slot />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "~/components/Modal.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    Modal,
  },
});
</script>
