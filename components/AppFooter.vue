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

      <NuxtLink
        class="mx-3"
        target="_blank"
        to="https://calendar.google.com/calendar/render?action=TEMPLATE&text=ពិធីឡើងគេហដ្ឋានថ្មី&dates=20240630T000000Z/20240630T010000Z&details=ពិធីឡើងគេហដ្ឋានថ្មី ថ្ងៃអាទិត្យ ទី ៣០ ខែមិថុនា ឆ្នាំ២០២៤&location=&sf=true&output=xml">
        <Icon
          name="lets-icons:date-range-duotone-line"
          class="text-xl -mt-1 mr-1" />
        <span class="text-lg">កត់ត្រាទុក</span>
      </NuxtLink>
    </div>
  </footer>
</template>

<style scoped>
.w-600 {
  /* width: 600px; */
  max-width: 600px;
  height: 56px;
}
</style>
