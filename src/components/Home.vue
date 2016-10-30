<template lang="html">
  <div class="">
    <div v-for="story in storys">
      <router-link :to="'/story/' + story.id">
        <h1>{{ story.title }}</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: ['storys']
}
</script>

<style lang="css">
</style>
