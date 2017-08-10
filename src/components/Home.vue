<template lang="html">
  <div>
    <div class="box" v-for="post in posts">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="http://lorempixel.com/64/64/business" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <router-link :to="'/posts/' + post.id">
              <h1>{{ post.title }}</h1>
            </router-link>
            <p>
              {{ post.body }}
            </p>

          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      posts: [{
        title: 'test',
        id: 1
      }]

    }
  },
  mounted: function () {
    this.fetchPosts()
  },
  methods: {
    fetchPosts: function () {
      // GET /someUrl
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        // get body data
        this.posts = response.body
      }, response => {
        // error callback
      })
    }
  }
}
</script>

<style lang="css">
</style>
