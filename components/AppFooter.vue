<!-- @format -->

<template>
  <footer class="w-full fixed bottom-0">
    <div
      class="container mx-auto flex justify-center items-center bg-[#84A800] font-[AKbalthom] w-600 text-white">
      <NuxtLink class="mx-3" href="#home"
        ><Icon name="iconamoon:home" class="text-xl -mt-2" />
        <span class="text-lg">ទំព័រដើម</span></NuxtLink
      >
      <NuxtLink class="mx-3" href="#location"
        ><Icon name="mdi:location" class="text-xl" />
        <span class="text-lg">ទីតាំង</span></NuxtLink
      >
      <NuxtLink class="mx-3"
        ><Icon name="mdi:music" class="text-xl" />
        <span class="text-lg">បិទសំឡេង</span></NuxtLink
      >
    </div>
  </footer>
</template>

<style scoped>
.w-600 {
  width: 600px;
  max-width: 600px;
  height: 56px;
}
</style>
