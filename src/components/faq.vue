<template>
    <div class="body-wrapper">
        <h2 class="form-text">Ответы на вопросы</h2>
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
                    Он оформляется только на 30 дней. Приобрести новый можно в любой момент.
                    </span>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <h2 class="form-text card-title">На какие услуги распространяется страховка?</h2>
                </template>
                <template #content>
                    <span class="form-text description">
                    Только в той категории, где у вас есть объявление и для которой вы купили полис. Например, вы занимаетесь разными мелкими работами по дому и оформили полис на услуги электрика. Компенсацию выплатят лишь за ущерб, связанный с электрикой.
                    </span>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <h2 class="form-text card-title">Что покрывает страховка?</h2>
                </template>
                <template #content>
                    <span class="form-text description">
                        Вред имуществу, здоровью и жизни. За моральный ущерб компенсация не предусмотрена. Скажем, если клиенту не понравился маникюр, это не страховой случай. Компенсацию можно получить, например, если из-за маникюра возникли проблемы со здоровьем. Пострадавший может получить по страховке до 100 000 ₽ — минимального ограничения нет. Максимальный размер компенсации одинаковый во всех категориях.
                    </span>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <h2 class="form-text card-title">Кто может оформить полис?</h2>
                </template>
                <template #content>
                    <span class="form-text description">
                    Частные исполнители, в том числе зарегистрированные самозанятые. Юридическим лицам он недоступен.
                    </span>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <h2 class="form-text card-title">Что делать, если наступил страховой случай?</h2>
                </template>
                <template #content>
                    <span class="form-text description">
                    Заказчик должен сам обратиться в страховую компанию, собрать документы и доказательства. Он попросит вас заполнить вместе с ним акт о повреждении или гибели имущества.
                    </span>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <h2 class="form-text card-title">Сколько клиенту ждать компенсацию?</h2>
                </template>
                <template #content>
                    <span class="form-text description">
                    Если заказчику был причинён вред, в течение 5 календарных дней он может обратиться в страховую на avito_insurance@vsk.ru</span><br>
                    <br>
                    <span class="form-text description">Понадобятся документы и доказательства:</span>
                    <ul class="form-text description">
                        <li>заявление в ВСК; </li>
                        <li>акт о гибели или повреждении имущества; </li>
                        <li>2–3 фотографии, которые подтверждают повреждения; </li>
                        <li>чеки, по которым можно оценить ущерб. Например, о покупке товара, который сломался во время работ, о затратах на исправление ошибок исполнителя или на лечение, если пострадало здоровье;</li>
                        <li>копия разворотов паспорта с фотографией и пропиской;</li>
                        <li>банковские реквизиты. </li>
                    </ul>
                    <span class="form-text description">Полный перечень можно найти в статье.<br>
                        <br>
                    Клиент может узнать подробности о документах у поддержки Авито. После того как ВСК получит все документы, страховой понадобится до 5 рабочих дней, чтобы рассмотреть обращение. Если у компании не будет вопросов, она перечислит деньги на счёт клиента в течение суток. Как быстро они поступят, зависит от банка.
                    </span>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <h2 class="form-text card-title">Что такое ВСК?</h2>
                </template>
                <template #content>
                    <span class="form-text description">
                    Это страховая компания, партнёр Авито. Она работает с 1992 года, и за это время, по данным ВСК, её услугами воспользовались более 30 миллионов человек и 500 тысяч компаний.
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


</style>
