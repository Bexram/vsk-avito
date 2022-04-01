import axios from "axios";

export default {
    namespaced: true,

    state() {
        return {
            categories: [],
            price: null,
        }
    },


    getters: {
        CATEGORY(state) {
            return state.categories;
        },
        PRICE(state) {
            return state.price;
        },
    },


    actions: {
        GET_CATEGORY({commit}) {
            return axios({
                method: "GET",
                url: `https://api-creatum.bexram.online/avito/category/`
            })
                .then((response) => {
                    commit("SET_CATEGORY", response.data);
                    return response;
                })
                .catch((error) => {
                    return error;
                });
        },

        GET_PRICE({commit},data) {
            console.log('111')
            return axios({
                method: "POST",
                url: `https://api-creatum.bexram.online/avito/calculate/`,
                data: data
            })
                .then((response) => {
                    commit("SET_PRICE", response.data);
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
        },
        SET_PRICE: (state, content) => {
            state.price=content
        },

    }


}
