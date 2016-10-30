<template lang="html">
  <div class="">
    <h1>{{ $route.params.id }}</h1>
    <h1>{{ story.title }}</h1>
    <h2>{{ story.content }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Story',
  props: ['storys'],
  computed: {
    story () {
      let id = this.$route.params.id
      return this.storys.find(story => story.id.toString() === id.toString())
    }
  }
}
</script>

<style lang="css">
</style>
