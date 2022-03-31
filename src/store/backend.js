import axios from "axios";

export default {
    namespaced: true,

    state() {
        return {
            categories: [],
        }
    },


    getters: {
        CATEGORY(state) {
            return state.categories;
        },
    },


    actions: {
        GET_CATEGORY({commit}) {
            return axios({
                method: "GET",
                url: `http://localhost:8000/avito/category/`
            })
                .then((response) => {
                    commit("SET_CATEGORY", response.data);
                    return response;
                })
                .catch((error) => {
                    return error;
                });
        },

        GET_PRICE({commit}) {
            return axios({
                method: "GET",
                url: `http://localhost:8000/avito/calculate/`
            })
                .then((response) => {
                    commit("SET_CATEGORY", response.data);
                    return response;
                })
                .catch((error) => {
                    return error;
                });
        },

    },


    mutations: {
        SET_CATEGORY: (state, content) => {
            state.categories=content
            // state.categories=[]
            // for (let i in content) {
            //     state.categories.push(content[i].name)
            // }
        },

    }


}
