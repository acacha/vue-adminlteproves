import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/components/layouts/MainLayout'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Example from '@/components/Example'
import TodoView from '@/components/TodoView'
import NotFoundView from '@/components/NotFoundView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: 'hello',
          alias: '',
          component: HelloWorld,
          name: 'HelloWorld',
          meta: {description: 'Vue Hello World'}
        },
        {
          path: 'example',
          component: Example,
          name: 'Example',
          meta: {description: 'Example'}
        },
        {
          path: 'todo',
          component: TodoView,
          name: 'TodoView',
          meta: {description: 'TODO', requiresAuth: true}
        }
      ]
    },
    {
      // not found handler
      path: '*',
      component: NotFoundView
    }
  ]
})
