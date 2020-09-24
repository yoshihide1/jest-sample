<template>
  <div class="hello">
   <p>{{nowNumber}}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  
  computed: {
    ...mapState(['nowNumber'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-size: 3rem;
}
</style>
