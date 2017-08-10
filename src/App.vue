<template>
  <div id="app">
    <div class="container">
      <nav class="navbar ">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            Vue Blog
          </a>

          <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
            <span class="icon" style="color: #55acee;">
              <i class="fa fa-twitter"></i>
            </span>
          </a>

          <div class="navbar-burger burger" data-target="navMenuExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navMenuExample" class="navbar-menu">
          <div class="navbar-start">
          </div>

          <div class="navbar-end">

              <router-link to="/" class="navbar-item is-hidden-desktop-only">Home</router-link>
              <router-link to="/posts/add" class="navbar-item is-hidden-desktop-only">
                New Post
              </router-link>
              <router-link to="/posts/1" class="navbar-item is-hidden-desktop-only">
                Go to post 1
              </router-link>

            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="tw-button button"
        data-social-network="Twitter"
        data-social-action="tweet"
        data-social-target="http://bulma.io"
        target="_blank"
        href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://bulma.io&via=jgthms">
        <span class="icon">
          <i class="fa fa-twitter"></i>
        </span>
        <span>
          Tweet
        </span>
      </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <router-view></router-view>   

    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
