<template>
    <div></div>
</template>

<script>
export default {
  name: 'getdatatest',
  created: function () {
    console.log('this is created')
  },
  methods: {
    data () {
      return {
        somedata: []
      }
    },
    getdata () {
      var data = {}
      // var responseData = this.somedata
      this.$http.get('my data at localhost', {param1: 'param1'}).then(response => {
        data.responseData = response.body
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
