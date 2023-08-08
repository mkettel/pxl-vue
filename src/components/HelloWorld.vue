<script setup>

// define props for the component
defineProps({
  msg: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="greetings">
    <!-- Add the prop message that was passed from App.vue -->
    <h1 class="green">{{ msg }}</h1>
    <h3>{{ subtitle }}</h3>
  </div>
</template>

<style scoped>

.greetings {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* style for the title */
h1 {
  font-weight: 500;
  font-size: 2rem;
  position: relative;
  top: -10px;
  margin: 0px;
}
/* style for subtitle */
h3 {
  font-size: .9rem;
  margin: 0px;
  position: relative;
  bottom: 10px;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 860px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
