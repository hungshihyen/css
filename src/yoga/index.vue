<template>
  <Nav />
  <Footer />
</template>

<script>
import Nav from './Nav/index.vue'
import Footer from './Footer/index.vue'
export default {
  components: {
    Nav,
    Footer
  },
  setup () {

  }
}
</script>

<style>
@import './styles/base.scss';
</style>
