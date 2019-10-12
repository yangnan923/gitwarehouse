import Vue from 'vue'
import Router from 'vue-router'
import discover from "../components/discover.vue";
import child2 from "../components/child2.vue";
import child3 from "../components/child3.vue";
import child4 from "../components/child4.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/discover",
    },
    {
      path: '/discover',
      component:discover,

    },
    {
      path: '/child2',
      component:child2,
    },
    {
      path: '/child3',
      component:child3,
    },
    {
      path: '/child4',
      component:child4,
    }
  ]
})
