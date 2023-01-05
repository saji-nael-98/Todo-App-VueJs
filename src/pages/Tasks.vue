<template>
  <div>
    <div v-show="show">
      <AddTask @add-task="saveTask" />
    </div>
    <Tasks @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>
<script>
import AddTask from "../components/AddTask.vue";
import Tasks from "../components/Tasks/Tasks.vue";
import { validateApiResponse } from "../utils/api-errors";
import { deleteTask, getTasks, saveTask } from "../api/Task";
export default {
  name: "Home",
  components: {
    Tasks,
    AddTask,
  },
  props: {
    show: Boolean,
  },
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.getTasks();
  },
  methods: {
    async saveTask(data) {
      const res = await saveTask(data);
      if (validateApiResponse(res, 201)) {
        this.addToList(data);
      }
    },
    async getTasks() {
      const res = await getTasks();
      if (res.status) {
        const data = await res.json();
        this.tasks = data;
      } else {
        alert("something wrong happened!");
      }
    },
    async deleteTask(id) {
      const res = await deleteTask(id);
      if (validateApiResponse(res, 200)) {
        this.deleteFromList(id);
      } else {
        alert("something wrong happened!");
      }
    },
    deleteFromList(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    addToList(data) {
      this.tasks = [...this.tasks, data];
    },
  },
};
</script>
