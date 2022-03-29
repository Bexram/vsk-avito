<template>
    <div class="header-app">
        <div class="flex-row">
            <div class="flex">
                <img :src="require('/src/assets/avito.svg')">
            </div>
            <div class="flex">
                <img :src="require('/src/assets/Line.svg')">
            </div>
            <div class="flex">
                <img :src="require('/src/assets/vsk.svg')">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header-app"
    }
</script>

<style scoped>
    .header-app {
        width: 100%;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05), 0px 4px 24px rgba(0, 0, 0, 0.12);
        height: 5rem;
    }
    .flex-row {
        margin-left: auto;
        margin-right: auto;
        width: 71%;
        height: 100%;
        display: flex;
        flex-direction: row;
    }
    .flex {
        margin-top: auto;
        margin-bottom: auto;
        height: 50%;
        display: flex;
    }
    img {
        margin-right: 10px;
        margin-left: 10px;
    }
</style>
