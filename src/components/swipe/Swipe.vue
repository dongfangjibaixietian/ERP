<template>
<div id="hy-swiper">
  <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touch="touchEnd">
    <slot></slot>
  </div>
  <slot name="indicator">
  </slot>

  <div class="indicator">

  </div>
</div>

</template>

<script>
export default {
  name: 'Swipe',
}

</script>

<style>

</style>