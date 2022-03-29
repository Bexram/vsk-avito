<template>
    <div class="body-wrapper">
        <h1 class="form-text">Оформите страховку на свои услуги</h1>
        <span class="form-text description">С ней легче привлечь клиентов. Если что-то сломается или испортится, заказчики могут получить
            до 100 000 ₽ компенсации от Страхового дома ВСК.</span>
        <div class="form-group">
            <div class="input-group">
                <h2>Услуги</h2>
                <input type="search">
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <h2>Услуги</h2>
                <input type="search">
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <h2>Услуги</h2>
                <input type="search">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "form-app"
    }
</script>

<style scoped>
    .body-wrapper {
        width: 71%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 4rem;
    }
    .form-text{
        font-family: 'Arial';
        font-style: normal;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 600;
        line-height: 2rem;
    }
    .description {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1rem;
    }

</style>
