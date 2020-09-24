<template>
  <div class="home">
    <HelloWorld />
    <div class="button__group">
      <Increment />
      <Decrement />
      <Reset />
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import Increment from "../components/Increment";
import Decrement from "../components/Decrement";
import Reset from "../components/Reset";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Increment,
    Decrement,
    Reset,
  },
};
</script>
<style scoped>
.button__group {
  display: flex;
  justify-content: center;
}
</style>
