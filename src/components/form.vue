<template>
    <div class="body-wrapper">
        <h1 class="form-text">Оформите страховку на свои услуги</h1>
        <span class="form-text description">С ней легче привлечь клиентов. Если что-то сломается или испортится, заказчики могут получить
            до 100 000 ₽ компенсации от Страхового дома ВСК.</span>
        <div class="flex-row form-all">
            <div class="form-group container flex-col">
                <div class="input-group">
                    <h2 class="form-text">Услуги</h2>
                    <vue-single-select
                            name="category"
                            :options="CATEGORY"
                            option-label="name"
                            placeholder="Выберите услугу"
                            @input="onChangeSelectedCategory($event)"
                            :required=required_category
                    >
                    </vue-single-select>
                    <span v-if="required_category"  class="form-text error">Укажите услугу</span>
                </div>
                <div class="input-group" v-if="SUBCATEGORIES">
                    <h2 class="form-text">Категория</h2>
                    <vue-single-select
                            name="foo"
                            :options="SUBCATEGORIES"
                            option-label="name"
                            placeholder="Выберите категорию"
                            @input="onChangeSelectedSubCategory($event)"
                            :required=required_subcategory
                    >
                    </vue-single-select>
                    <span v-if="required_subcategory"  class="form-text error">Укажите категорию</span>
                </div>
                <div class="input-group">
                    <h2 class="form-text">Фамилия, имя и отчество</h2>
                    <input class="input">
                </div>
                <div class="contact flex-row bottom">
                    <div class="container input-group">
                        <h2 class="form-text">Телефон</h2>
                        <input class="input">
                    </div>
                    <div class="container input-group">
                        <h2 class="form-text">Почта</h2>
                        <input class="input">
                    </div>
                </div>

            </div>
            <div class="container price flex-col">
                <span v-if="!PRICE" class="form-text description mob container-col">Выберите услуги, чтобы узнать цену страховки.</span>
                <div class="container-col priceflex-row">
                <span v-if="PRICE" class="form-text amount cost">Стоимость страховки</span>
<!--                <div class="line"></div>-->
                <span v-if="PRICE" class="form-text amount">{{PRICE/100}} ₽ за месяц</span></div>
                <span v-if="PRICE" class="form-text description mob container-col">Полис действует 30 дней.<br> Клиентам компенсируют убытки до 100 000 ₽.</span>
                <button class="pay container-col" v-on:click="buyPolicy">Оплатить</button>
                <span class="form-text grey mob container-col">Продолжая, я соглашаюсь на обработку персональных данных страховым акционерным обществом «ВСК».</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import VueSingleSelect from "vue-single-select";

    export default {
        name: "form-app",
        components: {
            VueSingleSelect
        },
        data() {
            return {
                selected_category: null,
                selected_subcategory: null,
                SUBCATEGORIES: null,
                required_category:false,
                required_subcategory:false,
            }
        },

        computed: {
            ...mapGetters({
                CATEGORY: 'backend/CATEGORY',
                PRICE: 'backend/PRICE',
            })
        },
        mounted() {
            this.GET_CATEGORY()
        },
        methods: {
            ...mapActions({
                GET_CATEGORY: 'backend/GET_CATEGORY',
                GET_PRICE: 'backend/GET_PRICE',
                NULL_PRICE: 'backend/NULL_PRICE',
            }),
            buyPolicy() {
                if (!this.selected_category) {
                    this.required_category=true
                }
                if (!this.selected_subcategory) {
                    this.required_subcategory=true
                }
            },
            onChangeSelectedCategory(input) {
                if (input && input !== '') {
                    this.SUBCATEGORIES = null
                    this.selected_category = input.name
                    this.required_category = false
                    for (let i in this.CATEGORY) {
                        if (this.CATEGORY[i].name === this.selected_category) {
                            this.SUBCATEGORIES = this.CATEGORY[i].subcategory
                            if (this.SUBCATEGORIES.length === 0) {
                                this.SUBCATEGORIES = null
                                this.GET_PRICE({'cat': this.selected_category})
                            }
                        }
                    }
                } else {
                    this.selected_category = null
                    this.SUBCATEGORIES = null
                    this.NULL_PRICE()
                }
            },
            onChangeSelectedSubCategory(input) {
                if (input && input !== '') {
                    this.selected_subcategory = input.name
                    this.required_subcategory = false
                    this.GET_PRICE({'subcat': this.selected_subcategory})
                } else {
                    this.selected_subcategory = null
                    this.NULL_PRICE()
                }
            }
        }
    }
</script>

<style scoped>
    .pay {
        margin-top: 1rem;
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
    .line {
        border-bottom: 1px dashed #000; /* Параметры линии */
        height: 18px; /* Высота блока */
        width: 20%;
    }
    .amount {
        font-weight: 700;
        font-size: 2.2rem;
        line-height: 2.3rem;
        margin-bottom: 1rem
    }

    .cost {
        display: none;
    }
    .error{
        font-size: 0.9rem;
        line-height: 1rem;
        color: #FF4053;
    }
    .flex-col {
        display: flex;
        flex-direction: column;
    }

    .form-text {
        font-family: 'Arial';
        font-style: normal;
    }

    .input-group {
        margin-bottom: 1rem !important;

    }

    .form-group {
        width: 57%;
    }

    .form-all {
        margin-top: 2rem !important;
    }

    .contact {
        max-width: 580px;
    }

    .bottom {
        margin-bottom: -1rem;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
        margin-left: -5px;
        margin-right: -5px;
    }

    .container {
        margin: 0 5px;
        width: 50%;
    }

    .container-col {
        width: 70%;
    }

    .price {
        display: flex;
        flex-direction: column;
        padding-top: 2rem;
        margin-left: 20px;
        align-items: unsafe center;
        width: 43%;
        box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.02), 0px 4px 24px rgba(0, 0, 0, 0.07);
        border-radius: 12px;
        padding-bottom: 2rem;
    }


    h2 {
        font-weight: 700;
        font-size: 0.8rem;
        line-height: 1rem;
    }

    .input {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1rem;
        padding-left: 1rem;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #F2F1F0;
        border-radius: 6px;
        height: 2rem;
        width: 100%;
        border-width: 0px;
        max-width: 580px;
    }
    .priceflex-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    }

    @media screen and (max-width: 650px) {
        h1 {
            font-size: 2.2rem;
        }

        .cost {
            display: block;
        }

        .description {
            font-size: 1.1rem;
        }

        .amount {
            font-weight: 700;
            font-size: 1rem;
            line-height: 1rem;
        }

        .price {
            width: 100%;
            margin-left: 0px;
            box-shadow: 0px 0px 0px;
        }

        .container-col {
            width: 100%;
        }

        .flex-row {
            flex-direction: column;
            margin: 0 0;
        }

        .container {
            width: 100%;
            margin: 0 0;
        }

        input {
            height: 3rem;
        }

        .mob {
            font-size: 0.8rem;
            font-weight: 400;
            line-height: 1.4rem;
        }

    }

</style>
