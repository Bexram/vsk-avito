const routes = [
    {
        path: '/',
        component: () => import('@/App.vue'),
        name: 'Mainpage',
    },
    {
        path: '/success',
        component: () => import('@/views/success.vue'),
        name: 'SuccessPay',
    },
    {
        path: '/fail',
        component: () => import('@/views/fail.vue'),
        name: 'FailPay',
    },
]

export default routes
