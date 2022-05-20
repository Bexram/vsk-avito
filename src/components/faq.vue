<template>
    <div class="body-wrapper">
        <h2 class="form-text main-title">Ответы на вопросы</h2>
        <vue-collapsible-panel-group accordion base-color="FFFFFF">
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <h2 class="form-text card-title">Сколько это стоит?</h2>
                </template>
                <template #content>
                    <span class="form-text description">
                    Цена зависит от выбранной категории. Вы увидите стоимость, когда начнёте оформлять страховку. Если хотите застраховать несколько услуг, каждый полис нужно оплатить отдельно.
                    </span>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <h2 class="form-text card-title">Сколько действует полис?</h2>
                </template>
                <template #content>
                    <span class="form-text description">
                    Он оформляется только на 30 дней. Приобрести новый можно в&nbsp;любой момент.
                    </span>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <h2 class="form-text card-title">На какие услуги распространяется страховка?</h2>
                </template>
                <template #content>
                    <span class="form-text description">
                    Только в той категории, где у вас есть объявление и для которой вы купили полис. Например, вы&nbsp;занимаетесь разными мелкими работами по дому и&nbsp;оформили полис на&nbsp;услуги электрика. Компенсацию выплатят лишь за&nbsp;ущерб, связанный с&nbsp;электрикой.
                    </span>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <h2 class="form-text card-title">Что покрывает страховка?</h2>
                </template>
                <template #content>
                    <span class="form-text description">
                        Вред имуществу, здоровью и жизни. За моральный ущерб компенсация не&nbsp;предусмотрена. Скажем, если клиенту не&nbsp;понравился маникюр, это не&nbsp;страховой случай. Компенсацию можно получить, например, если из-за&nbsp;маникюра возникли проблемы со&nbsp;здоровьем. Пострадавший может получить по&nbsp;страховке до&nbsp;100&nbsp;000&nbsp;₽ — минимального ограничения нет. Максимальный размер компенсации одинаковый во&nbsp;всех категориях.
                    </span>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <h2 class="form-text card-title">Кто может оформить полис?</h2>
                </template>
                <template #content>
                    <span class="form-text description">
                    Частные исполнители, в&nbsp;том числе зарегистрированные самозанятые. Юридическим лицам он&nbsp;недоступен.
                    </span>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <h2 class="form-text card-title">Что делать, если наступил страховой случай?</h2>
                </template>
                <template #content>
                    <span class="form-text description">
                    Заказчик должен сам обратиться в страховую компанию, собрать документы и&nbsp;доказательства. Он попросит вас заполнить вместе с&nbsp;ним акт о&nbsp;повреждении или гибели имущества.
                    </span>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <h2 class="form-text card-title">Сколько клиенту ждать компенсацию?</h2>
                </template>
                <template #content>
                    <span class="form-text description">
                    Если заказчику был причинён вред, в течение 5 календарных дней он может обратиться в&nbsp;страховую на <a class="form-text" href="mailto:avito_insurance@vsk.ru">avito_insurance@vsk.ru</a></span><br>
                    <br>
                    <span class="form-text description">Понадобятся документы и&nbsp;доказательства:</span>
                    <ul class="form-text description">
                        <li>заявление на выплату в ВСК;</li>
                        <li>акт о повреждении или гибели имущества;</li>
                        <li>2–3 фотографии до и после ущерба; </li>
                        <li>чеки, по которым можно оценить ущерб. Например, о покупке товара, который сломался во время работ, о&nbsp;затратах на&nbsp;исправление ошибок исполнителя или&nbsp;на&nbsp;лечение, если пострадало здоровье;</li>
                        <li>копия листа временной нетрудоспособности или медицинского заключения, если возникли проблемы со здоровьем;</li>
                        <li>копия разворотов паспорта с фотографией и пропиской;</li>
                        <li>скриншоты переписки с исполнителем в мессенджере Авито, если есть;</li>
                        <li>банковские реквизиты. </li>
                    </ul>
                    <span class="form-text description">Полный перечень можно найти в <a href="https://support.avito.ru/articles/2594">статье</a>.<br>
                        <br>
                    Клиент может узнать подробности о документах у поддержки Авито. После того как ВСК получит все документы, страховой понадобится до&nbsp;5 рабочих дней, чтобы рассмотреть обращение. Если у&nbsp;компании не&nbsp;будет вопросов, она перечислит деньги на&nbsp;счёт клиента в&nbsp;течение суток. Как быстро они поступят, зависит от&nbsp;банка.
                    </span>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <h2 class="form-text card-title">Как можно потерять значок «Страховка от ущерба»?</h2>
                </template>
                <template #content>
                    <ul class="form-text description">
                        <li>Если срок действия полиса закончился, и вы не купили новый.</li>
                        <li>Если вы досрочно отказались от страховки.</li>
                        <li>Если вы исчерпали лимит в 100 000 ₽ по компенсациям.</li>
                        <li>Если вы препятствуете тому, чтобы клиент получил компенсацию. Например, отказываетесь заполнять заявление на выплату, о котором попросил заказчик.</li>
                    </ul>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <h2 class="form-text card-title">Что такое ВСК?</h2>
                </template>
                <template #content>
                    <span class="form-text description">
                    Это страховая компания, партнёр Авито. Она работает с 1992 года, и&nbsp;за&nbsp;это время, по&nbsp;данным ВСК, её&nbsp;услугами воспользовались более 30 миллионов человек и&nbsp;500 тысяч компаний.
                    </span>
                </template>
            </vue-collapsible-panel>
        </vue-collapsible-panel-group>
    </div>
</template>

<script>
    import {VueCollapsiblePanel, VueCollapsiblePanelGroup,} from '@dafcoe/vue-collapsible-panel'
    import '/public/accordion.css'

    export default {
        name: "faq-app",
        components: {
            VueCollapsiblePanel,
            VueCollapsiblePanelGroup
        }
    }
</script>

<style scoped>
    .card-title {
        font-size: 1rem;
        line-height: 1.5rem;
    }
    li {
        list-style-type: none; /* Убираем маркеры у списка */
        margin-bottom: 1rem;
    }
    li:before {
        content: "— "; /* Добавляем в качестве маркера символ */
    }
    a {
        color: black;
    }
    .body-wrapper {
        padding-bottom: 100px;
    }

    @media screen and (max-width: 650px) {
        .body-wrapper{
            margin-top: 48px;
        }
    }
    .main-title{
        margin-bottom:0;
    }


</style>
