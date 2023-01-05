<template>
  <div>
    <div :key="task.id" v-for="task in tasks">
      <Task @delete-task="deleteTask" :task="task" />
    </div>
  </div>
</template>
<script>
import Task from "../Task/Provider.vue";
export default {
  name: "Tasks",
  components: {
    Task,
  },
  props: {
    tasks: Object,
  },
  methods: {
    deleteTask(id) {
      this.$emit("delete-task", id);
    },
  },
};
</script>
