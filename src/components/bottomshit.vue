<template>
    <div class="bottomsheet-background">
        <div class="bottomsheet">
            <div class="bottomsheet-header">
                <div class="flex-row controls">
                    <div class="controls-container"><img class="back" :src="require('/src/assets/arrow-back.svg')"
                                                         v-on:click="hide">
                    </div>
                    <div class="controls-container center"><h2 class="form-text control-text">{{name}}</h2></div>
                    <div class="controls-container right" v-on:click="hide"><span class="form-text grey control-text">Отмена</span>
                    </div>
                </div>
                <input class="search input" placeholder="Поиск" v-model="searchString" v-on:input="search">
            </div>
            <div class="bottomsheet-body">
                <div class="form-text body-item"
                     v-for="{id, name} in all_data"
                     :key="id"
                     v-on:click="selectOption(name)">
                    {{name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bottom-sheet",
        props: {
            content: [],
            name: null
        },
        data() {
            return {
                all_data: null,
                searchString: null,
            }
        },
        mounted() {
            this.all_data = this.content
        },
        methods: {
            hide() {
                this.$emit("hide", true)
            },
            selectOption(option) {
                this.$emit("option", option)
            },
            search() {
                this.all_data = this.content.filter(item => {
                    return item.name.includes(this.searchString);
                });
            }
        }
    }
</script>

<style scoped>
    .bottomsheet {
        padding-top: 10%;
        display: flex;
        flex-direction: column;
        top: 20%;
        width: 100%;
        height: 100%;
        z-index: 101;
    }

    .bottomsheet-header {
        border-radius: 30px 30px 0 0;
        width: 100%;
        height: 20%;
        background: white;
    }

    .bottomsheet-body {
        width: 100%;
        height: 80%;
        background: white;
        overflow-y: scroll;
    }

    .bottomsheet-background {
        margin-left: -6%;
        position: fixed;
        top: 0%;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.25);
        z-index: 100;
    }

    .body-item {
        margin: 1rem 1.5rem;
        font-size: 1rem;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .controls {
        margin-top: 2rem;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }

    .controls-container {
        width: 30%;
        display: flex;
    }

    .right {
        justify-content: right;
    }

    .center {
        justify-content: center;
    }

    .back {
        max-width: 40px;
        max-height: 40px;
    }

    .control-text {
        font-size: 1rem;
    }

    .grey {
        font-weight: 500;
        text-align: right;
    }

    .input {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1rem;
        padding-left: 2.5rem;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #F2F1F0;
        border-radius: 6px;
        height: 2rem;
        width: 100%;
        border-width: 0px;
        max-width: 90%;
        margin-right: auto;
        margin-left: 5%;
    }

    .search {
        background-image: url('/src/assets/Search.svg');
        background-repeat: no-repeat;
        background-position: 5% 50%;
    }
</style>
