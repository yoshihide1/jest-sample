<template>
  <div class="reset">
    <button @click="reset">リセット</button>
  </div>
</template>

<script>
export default {
  methods: {
    reset() {
      this.$store.dispatch("reset");
    },
  },
};
</script>

<style>
</style>