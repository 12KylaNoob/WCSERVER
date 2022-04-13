<template>
  <div class="blog">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">fresh_bobatae</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#"
                >Blog
                <span class="visually-hidden">Blog</span>
              </a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/gallery/">Gallery</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about/">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact/">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <body>
      <h1>{{ title }}</h1>
      <p>fresh_bobatae is currently in hiatus. We'll see you soon!</p>
    </body>
  </div>
</template>

<script>
export default {
  name: "blog",
  data() {
    return {
      title: "Blog",
    };
  },
};
</script>

<style scoped>
body {
  background-color: #d7e1fc;
}
</style>