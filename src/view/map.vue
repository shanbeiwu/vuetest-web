<template>
    <baidu-map class="Bmap" center="北京" :scroll-wheel-zoom="true" @ready="load">
      <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-scale>
      <bm-navigation :offset="{width: 0, height: 0}"></bm-navigation>
    </baidu-map>
</template>

<script>
export default {
  name: 'map',
  methods: {
    load () {
      console.log('test')
    }
  }
}
</script>

<style scoped>
  .Bmap {
    width: 100%;
    height: 600px;
  }
</style>
