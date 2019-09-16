<template>
    <baidu-map class="Bmap" center="北京" :scroll-wheel-zoom="true" @ready="load">
      <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-scale><!--比例尺-->
      <bm-navigation :offset="{width: 0, height: 0}"></bm-navigation><!--缩放条-->
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" ></bm-map-type><!--地图类型-->
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation><!--定位按钮-->
      <bm-panorama :offset="{width: 10, height: 40}"></bm-panorama><!--全景控件-->
      <bm-traffic :predictDate="{weekday: 1, hour: 18}"></bm-traffic>
    </baidu-map>
</template>

<script>
export default {
  name: 'maptest',
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
    height: 696px;
  }
</style>
