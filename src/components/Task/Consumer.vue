<template>
  <div class="task reminder" v-if="state.reminder">
    <h3>
      {{ state.text }}
      <span @click="actions.click(state.id)" class="fas">x</span>
    </h3>
    <p>{{ state.day }}</p>
  </div>
  <div class="task" v-else>
    <h3>
      {{ state.text }}
      <span @click="actions.click(state.id)" class="fas">x</span>
    </h3>
    <p>{{ state.day }}</p>
  </div>
</template>
<script>
export default {
  name: "Task",
  props: {
    state: Object,
    actions: Object,
  },
};
</script>
<style>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
