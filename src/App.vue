<template>
  <div id="app">
<!--    <topMenu></topMenu>-->
    <el-container style="width: 100%;height: 110%">
    <el-header style="padding: 0px 0px">
      <div class="header"></div>
    </el-header>
      <el-container direction="horizontal">
        <el-aside style="width: 15%;height: 110%;border-right: 1px;
                        border-right-color: #bbbbbb;
                        border-right-style: solid;">
          <leftMenu></leftMenu>
        </el-aside>
        <el-main style="width: 75%;height: 110%;padding: 0px 0px">
          <router-view/>
        </el-main>
      </el-container>
    <el-footer style="padding: 0px 0px">
      <footBanner></footBanner>
    </el-footer>
    </el-container>
  </div>
</template>

<script>
import topMenu from './components/topMenu/topMenu'
import leftMenu from './components/topMenu/leftMenu'
import footBanner from './components/footBenner/footBanner'
export default {
  name: 'App',
  components: {
    topMenu,
    leftMenu,
    footBanner
  },
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    height: 100%;
  }
  html {
    height: 100%;
  }
  body {
    margin-top: 0px;
    margin-right: 0px;
    margin-left: 0px;
    margin-bottom: 0px;
    height: 100%;
  }
  .header {
    width: 100%;
    height: 60px;
    background-color: #0074D9;
  }
</style>
