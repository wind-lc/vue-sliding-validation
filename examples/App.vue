<template>
  <div id="app">
    <button class="btn"
            @click="showSlidingValidation = true">验证</button>
    <sliding-validation :showSlidingValidation="showSlidingValidation"
                        @handleSlidingValidation="handleSlidingValidation"></sliding-validation>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      showSlidingValidation: false
    }
  },
  methods: {
    handleSlidingValidation (parms) {
      console.log(parms)
      this.showSlidingValidation = parms
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>
