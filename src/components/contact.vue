<template>
  <div class="contact">
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
              <router-link class="nav-link" to="/about/">About</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#"
                >Contact
                <span class="visually-hidden">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <body>
      <h1>{{ title }}</h1>
      <div class="social">
        <div class="link">
          <a href="freshbobatae@gmail.com"
            ><img src="../assets/email.png" alt="email"
          /></a>
          <a href="https://twitter.com/fresh_bobatae"
            ><img src="../assets/twitter.png" alt="twitter"
          /></a>
          <a href="https://www.instagram.com/fresh_bobatae/"
            ><img src="../assets/ig.png" alt="instagram"
          /></a>
          <a href="https://www.twitch.tv/fresh_bobatae"
            ><img src="../assets/twitch.png" alt="twitch"
          /></a>
          <a
            href="https://www.youtube.com/channel/UCcfntjljQ61cmsm18s52Bgw/discussion"
            ><img src="../assets/yt.png" alt="youtube"
          /></a>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      title: "Contact",
    };
  },
};
</script>

<style scoped>
body {
  background-color: #d7e1fc;
}
.social {
  position: absolute;
  margin-right: auto;
  margin-left: auto;
}

.link img {
  height: 70px;
  padding: 10px 20px;
  transition: 0.4s;
}

.link a:hover > img {
  transform: scale(1.5);
  background-image: none !important;
}
</style>