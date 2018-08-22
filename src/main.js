//入口文件
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import App from './App'
import router from './router'
Vue.use(Mint)
Vue.config.productionTip = false
// 导入时间格式化插件
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})
//引入min-ui
import '../lib/mui/css/mui.min.css'
//引入拓展css
import '../lib/mui/css/icons-extra.css'
import 'mint-ui/lib/style.css'
// 按需导入mint-ui中的组件
//顶部组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//轮播图组件
import { Swipe, SwipeItem,Button } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
