<template>
  <div id="app" :style="'background: '+currentColor+';'">
    <h1>Hello App!</h1>
    <h1>{{ currentColor }}</h1>
    <chrome-picker v-model="colors" @change-color="onChange"></chrome-picker>
    <p>
      <router-link to="/">Hone</router-link>
      <router-link to="/editor">New Story</router-link>
      <router-link to="/story/1">Go to story 1</router-link>
    </p>
    <router-view :storys="storys"></router-view>
  </div>
</template>

<script>
import { Chrome } from 'vue-color'

export default {
  name: 'app',
  data () {
    return {
      currentColor: '',
      colors: {
        hex: '#194d33',
        hsl: {
          h: 150,
          s: 0.5,
          l: 0.2,
          a: 1
        },
        hsv: {
          h: 150,
          s: 0.66,
          v: 0.30,
          a: 1
        },
        rgba: {
          r: 25,
          g: 77,
          b: 51,
          a: 1
        },
        a: 1
      },
      storys: [
        {
          id: 77,
          title: 'vue.js',
          content: 'ง่ายมากๆ'
        },
        {
          id: 2,
          title: 'react',
          content: 'โครตยาก'
        }
      ]
    }
  },
  components: {
    'chrome-picker': Chrome
  },
  methods: {
    onChange (param1) {
      console.log(param1)
      this.currentColor = param1.hex
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
