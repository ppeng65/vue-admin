import Layout from '../layout/index.vue'

export default [
  {
    path: '/a',
    redirect: '/a/pageB',
    component: Layout,
    children: [
      {
        path: 'pageB',
        name: 'PageB',
        component: () => import('../views/pageB/index.vue')
      }
    ]
  }
]
