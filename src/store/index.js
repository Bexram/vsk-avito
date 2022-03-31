import {createStore} from 'vuex'
import backend from './backend'


export default createStore({
    modules: {
        backend,
    },
})
