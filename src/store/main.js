import {createStore} from 'vuex'
import backend from './backend.js'


export default createStore({
    modules: {
        backend,
    },
})
