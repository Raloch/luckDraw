<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/fonts/font.css';
/* .fade-enter-active, .fade-leave-active {
  transition: 0.5s all linear;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
} */
.animated {
  animation-duration: 400ms;
}
</style>
