export default [
  {
    path: '/BetterScorll',
    name: 'BetterScorll',
    component: () => import(/* webpackChunkName: "BetterScorll" */ '../../views/BetterScroll.vue')
  },
  {
    path: '/BetterSlider',
    name: 'BetterSlider',
    component: () => import(/* webpackChunkName: "BetterSlider" */ '../../views/BetterSlider.vue')
  },
  {
    path: '/InfiniteSroll',
    name: 'InfiniteSroll',
    component: () => import(/* webpackChunkName: "InfiniteSroll" */ '../../views/InfiniteSroll.vue')
  }
]
