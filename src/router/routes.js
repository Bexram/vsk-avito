const routes = [
    {
        path: '/',
        component: () => import('@/App.vue'),
        name: 'Mainpage',
    },
    {
        path: '/:success',
        component: () => import('@/App.vue'),
        name: 'SuccessPay',
        props: {'success': true}
    },
]

export default routes
