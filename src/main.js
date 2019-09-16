// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Button from 'element-ui'
// 全部引入element-ui
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
// 按需引入element-ui 可只添加部分组件
import BaiduMap from 'vue-baidu-map'
import VueResourse from 'vue-resource'

Vue.config.productionTip = false
Vue.prototype.$ELEMENT = {size: 'small', zIndex: 3000}
Vue.use(Button)
Vue.use(BaiduMap, {
  ak: 'FDG6tjNuiZw80Xx9RRiocu50KxxhkVud'
})
Vue.use(VueResourse)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
