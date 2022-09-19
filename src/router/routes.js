
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/IndexPage.vue') }
    ]
  },
  {
    path: '/equipe-financeiro',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/EquipeFinanceiro.vue') }
    ]
  },
  {
    path: '/equipe-administrativo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/EquipeAdministrativo.vue') }
    ]
  },
  {
    path: '/equipe-comercial',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/EquipeComercial.vue') }
    ]
  },
  {
    path: '/equipe-cs',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/EquipeCs.vue') }
    ]
  },
  {
    path: '/equipe-dados',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/EquipeDados.vue') }
    ]
  },
  {
    path: '/equipe-direcao',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/EquipeDirecao.vue') }
    ]
  },
  {
    path: '/equipe-financeiro',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/EquipeFinanceiro.vue') }
    ]
  },
  {
    path: '/equipe-marketing',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/EquipeMarketing.vue') }
    ]
  },
  {
    path: '/equipe-produto',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/EquipeProduto.vue') }
    ]
  },
  {
    path: '/equipe-rh',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/EquipeRh.vue') }
    ]
  },
  {
    path: '/equipe-sg',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/EquipeAsg.vue') }
    ]
  },
  {
    path: '/equipe-suporte',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/EquipeSuporte.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
