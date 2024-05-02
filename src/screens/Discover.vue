<script setup>
document.title="Thinology"
const currentPath = window.location.pathname;
const pathToHide = "/cookyourfone";

if (currentPath !== pathToHide) {
  const elements = document.getElementsByClassName("hid-frp");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
}
</script>

<template>
  Discover
</template>

<style scoped>
</style>
