<template>
  <button
    :style="{
      background: color,
    }"
    class="btn"
    @click="$emit('toggle-form')"
  >
    {{ title }}
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    title: String,
    color: String,
  },
};
</script>
<style></style>
