<template>
    <div></div>
</template>

<script>
export default {
  name: 'getdatatest',
  methods: {
    data () {
      console.log('this is data')
    },
    getdata () {
      this.$http.get('my data at localhost', {param1: 'param1'}).then(response => {
        // somdata = response.body
      }, response => {
        // rror callback
      })
    }
  }
}
</script>
<!--https://www.jianshu.com/p/6b82722e2025||vue的请求数据方式-->
<style scoped>

</style>
