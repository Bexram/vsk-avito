<template>
    <div class="body-wrapper">
        <h2 class="form-text">Как это работает</h2>

        <div class="flex-row">
            <div class="circle"><span class="num">1</span></div>
            <span class="form-text description">Полис оформит партнёр Авито — компания ВСК. Страховку нужно купить в&nbsp;категории, где у&nbsp;вас есть объявление.</span>
        </div>
        <div class="flex-row">
            <div class="circle"><span class="num">2</span></div>
            <span class="form-text description">После оплаты полис придёт на вашу электронную почту и&nbsp;вы получите значок «Страховка от ущерба». Отметка появится в&nbsp;объявлениях, где действует полис, в&nbsp;течение 1–2 рабочих дней.</span>
        </div>
        <div class="flex-row">
            <div class="circle"><span class="num">3</span></div>
            <span class="form-text description">Пользователи, которые нажмут на значок в объявлении, увидят, в&nbsp;какой категории и&nbsp;до&nbsp;какого числа действительна страховка, а также номер исполнителя (ID) для страховой компании. Заказчик может попросить вас показать полис.</span>
        </div>
        <div class="flex-row">
            <div class="circle"><span class="num">4</span></div>
            <span class="form-text description">Страховка действует 30 дней. Новую можно купить в&nbsp;любой момент: она заработает сразу, как закончится предыдущая.</span>
        </div>
        <div class="flex-row">
            <div class="circle"><span class="num">5</span></div>
            <span class="form-text description">Если с заказом возникнет проблема, клиент должен обратиться&nbsp;в страховую. Вам это делать не нужно. Узнать о&nbsp;документах можно в&nbsp;поддержке Авито.</span>
        </div>
        <div class="flex-col">
            <a style="text-decoration:none; color:#FFFFFF" href="#form" v-smooth-scroll><button class="pay"> Оформить полис </button></a>
            <span class="form-text grey">Услугу страхования оказывает страховое акционерное общество «ВСК» (ОГРН 1027700186062, лицензия Банка России СИ № 0621 от 11.09.2015, <a href="https://www.vsk.ru/">https://www.vsk.ru/)</a>. <a href="https://www.vsk.ru/upload/cache/default/tree/12/1109/tabs/Pravila-1801-A4.pdf">Правила и&nbsp;условия страхования</a>. </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "how-work"
    }
</script>

<style scoped>
    .circle {
        flex-shrink: 0;
        background: #F2F1F0;
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 50%;
        /* не забываем о кроссбраузерности */
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        -khtml-border-radius: 50%;
        margin-right: 1rem;
        text-align: center;
        flex-direction: column;
        display: flex;
        justify-content: center;
    }
    .pay {
        width: 15rem;
        height: 3rem;
        background: #00AAFF;
        border-radius: 6px;
        border-width: 0px;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1rem;
        text-align: center;
        color: #FFFFFF;
        min-height: 3rem;
        margin-bottom: 1rem;
    }
    .flex-col {
        flex-direction: column;
        display: flex;
    }
    .num {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 1.5rem;
    }

    .flex-row {
        flex-direction: row;
        display: flex;
        margin-bottom: 2rem;
    }

    .description {
        margin: auto 0;
    }
    a {
        color: #858585;
    }
    @media screen and (max-width: 650px) {
        .pay {
            margin-top: 0.2rem;
            width: 100%;
            max-width: 100%;
            }
        h2 {
            margin-top: 48px;
        }
    }

</style>
