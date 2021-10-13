<template>
  <Nav />
  <!-- <section class="body" /> -->
  <router-view />
  <Footer />
  <!-- https://xd.adobe.com/view/ddcefee3-3028-48a2-8840-4d3ba00e8807-889d/grid -->
</template>

<script>
import Nav from './nav/index.vue'
import Footer from './footer/index.vue'
export default {
  components: {
    Nav,
    Footer
  },
  setup () {

  }
}
</script>

<style lang="scss">
@import './styles/base.scss';

#app {
  display: grid;
  // grid-template-areas:
  //   'head'
  //   'body'
  //   'foot';
  grid-template-rows: 80px 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
}

.nav-wrap {
  grid-row: 1/2;
}

.body {
  grid-row: 2/3;
}

.footer-wrap {
  grid-row: 3/4;
}
</style>
