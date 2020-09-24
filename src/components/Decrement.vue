<template>
  <div class="decrement">
    <button @click="decrement">引く</button>
  </div>
</template>

<script>
export default {
  methods: {
    decrement() {
      this.$store.dispatch('decrement')
    },
  },
};
</script>

<style>
</style>