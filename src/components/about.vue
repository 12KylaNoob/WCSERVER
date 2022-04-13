<template>
  <div class="about">
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
              <router-link class="nav-link" to="/blog/">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/gallery/">Gallery</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#"
                >About
                <span class="visually-hidden">About</span>
              </a>
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
      <img src="../assets/23 (6).png" />
    </body>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      title: "About",
    };
  },
};
</script>

<style scoped>
body {
  background-color: #ebd9cf;
}
h1 {
  color: #235459;
}
img {
  width: 100%;
}
</style>