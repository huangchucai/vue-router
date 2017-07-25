import Vue from 'vue'
import Router from 'vue-router'
import DemoAbout from '@/components/DemoAbout'
import DemoContact from '@/components/DemoContact'
import DemoHome from '@/components/DemoHome'
import DemoContactChild1 from '@/components/DemoContactChild1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: DemoHome
    },
    {
      path: '/contact/:id?',
      name: 'Contact',
      component: DemoContact,
      children: [
        {
          path: 'hello',
          component: DemoContactChild1
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: DemoAbout
    },
  ]
})
