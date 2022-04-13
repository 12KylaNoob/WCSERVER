<template>
  <div class="gallery">
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
              <a class="nav-link active" href="#"
                >Gallery
                <span class="visually-hidden">Gallery</span>
              </a>
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
      <div class="content">
        <p class="par">
          Hello everyone! I hope my art brings you joy and comfort!
        </p>
      </div>
      <div class="gallery">
        <table>
          <tr class="images">
            <th>
              <a><img src="../assets/9.png" /></a>
            </th>
            <th>
              <a><img src="../assets/2.png" /></a>
            </th>
            <th>
              <a><img src="../assets/6.png" /></a>
            </th>
          </tr>
          <tr class="images">
            <th>
              <a><img src="../assets/23 (7).png" /></a>
            </th>
            <th>
              <a><img src="../assets/13.png" /></a>
            </th>
            <th>
              <a><img src="../assets/blue.jpg" /></a>
            </th>
          </tr>
          <tr class="images">
            <th>
              <a><img src="../assets/23 (8).png" /></a>
            </th>
            <th>
              <a><img src="../assets/23 (9).png" /></a>
            </th>
            <th>
              <a><img src="../assets/15.png" /></a>
            </th>
          </tr>
        </table>
      </div>
    </body>
  </div>
</template>

<script>
export default {
  name: "gallery",
  data() {
    return {
      title: "Gallery",
    };
  },
};
</script>

<style scoped>
body {
  background-color: #d7e1fc;
}
p {
  text-align: center;
}
img {
  height: 300px;
}
table {
  margin-left: auto;
  margin-right: auto;
}

th {
  text-align: center;
}
</style>