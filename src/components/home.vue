<template>
  <div class="home">
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
              <a class="nav-link active" href="#"
                >Home
                <span class="visually-hidden">Home</span>
              </a>
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
              <router-link class="nav-link" to="/contact/">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <body>
      <h1>{{ title }}</h1>
      <div class="social">
        <div class="link">
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
  name: "home",
  data() {
    return {
      title: "Home",
    };
  },
};
</script>

<style scoped>
body {
  background-image: url(../assets/background1.jpg);
  height: 100vh;
  background-size: cover;
  background-position: center;
}
.social {
  position: absolute;
  top: 70%;
  left: 33%;
  transform: translate(-50%, -50%);
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
