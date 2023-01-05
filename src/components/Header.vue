<template>
  <header>
    <h1>{{ title }}</h1>
    <div v-if="showForm">
      <Button @toggle-form="$emit('toggle-form')" title="close" color="red" />
    </div>
    <div v-else>
      <Button
        @toggle-form="$emit('toggle-form')"
        title="Add task"
        color="green"
      />
    </div>
  </header>
</template>
<script>
import Button from "./Button.vue";

export default {
  name: "Header",
  props: {
    title: String,
    showForm: Boolean,
  },
  components: {
    Button,
  },
};
</script>
<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
