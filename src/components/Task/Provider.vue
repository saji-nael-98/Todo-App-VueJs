<template>
  <Consumer :state="state" :actions="actions" />
</template>
<script>
import Consumer from "./Consumer.vue";
export default {
  name: "Task",
  components: { Consumer },
  props: {
    task: Object,
  },
  computed: {
    state() {
      return {
        ...this.task,
      };
    },
    actions() {
      return {
        click: this.onFinish,
      };
    },
  },
  methods: {
    onFinish(id) {
      this.$emit("delete-task", id);
    },
  },
};
</script>
