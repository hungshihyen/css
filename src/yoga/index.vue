<template>
  <Nav />
  <Footer />
  <!-- https://xd.adobe.com/view/ddcefee3-3028-48a2-8840-4d3ba00e8807-889d/grid -->
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

<style lang="scss">
@import './styles/base.scss';
</style>
