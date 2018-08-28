import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let novel = () => import('@/pages/content')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'novel',
      component: novel
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
