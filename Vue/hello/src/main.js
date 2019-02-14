import Vue from 'vue'
import App from './App.vue'
import Router from  'vue-router'
import loginContainer from './container/login.vue'
import HelloWorld from './components/HelloWorld'

Vue.config.productionTip = false


Vue.use(Router)

const router = new Router({
  mode: 'history',
  
    routes: [
      {
        path: "/",
        redirect: {
            name: 'loginContainer',
        }
    },
        {
            path: '/loginContainer',
            name: 'loginContainer',
            component: loginContainer
        },
        {
            path: '/hello-world',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')