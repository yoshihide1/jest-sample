<template>
  <div>
    <p>{{num}}</p>
    <button class="increment__button" @click="increment">足す</button>
    <button class="decrement__button" @click="decrement">引く</button>
    <button class="reset__button" @click="reset">リセット</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    increment() {
      return this.num++;
    },
    decrement() {
      if(this.num <= 0) return
      return this.num--;
    },
    reset() {
      return (this.num = 0);
    },
  },
};
</script>

<style>
</style>