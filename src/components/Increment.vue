<template>
  <div class="increment">
    <button class="increment__button" @click="increment">足す</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
  },
};
</script>

<style>
</style>