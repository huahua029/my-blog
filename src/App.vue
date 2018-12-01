<template>
  <div id="app">
    <Header id="Header"></Header> 
    <div id="main">
      <router-view/>
    </div>
    <Footer id="Footer"></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "@/assets/base.scss";
a{
  text-decoration: none;
  color: inherit;
}
html,
body,
#app {
    height: 100vh;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
a{
  text-decoration: none;
  color: inherit;
}

ul{
  list-style: none;
}

#app{
  display: grid;
  grid-template-columns: 12% auto 12%;
  grid-template-rows: auto 1fr auto;
  #Header{
    grid-column: 1 / 4;
    grid-row: 1 / 2;
    background: $theme;
    padding-right: 12%;
    padding-left: 12%;    
  }
  #main{
    margin-top: 40px;
    grid-row: 2 / 3;    
    grid-column: 2 / 3;
  }
  #Footer{
    grid-column: 1 / 4;
    grid-row: 3 / 4;    
    color: $FontColor;
    background: $footerbg;
    padding-right: 12%;
    padding-left: 12%;  
  }
}
</style>
