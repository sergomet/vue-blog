<template lang="html">
  <div class="">
    <input v-model="titleInput">
    <br>
    <textarea v-model="contentInput" rows="8" cols="40"></textarea>
    <br>
    <button @click="save()">Save</button>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  props: ['storys'],
  data () {
    return {
      titleInput: '',
      contentInput: ''
    }
  },
  methods: {
    save () {
      let newStory = {
        id: Date.now(),
        title: this.titleInput,
        content: this.contentInput
      }
      this.storys.push(newStory)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
</style>
