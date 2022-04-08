<template>
    <div class="body-wrapper">
        <h1 class="form-text">Оформите страховку на свои услуги</h1>
        <span class="form-text description">С ней легче привлечь клиентов. Если что-то сломается или испортится, заказчики могут получить
            до&nbsp;100&nbsp;000 ₽ компенсации от Страхового дома ВСК.</span>
        <div class="flex-row form-all">
            <div class="form-group container flex-col">
                <div class="avito">
                    <div class="flex-col avito-titles">
                        <h2 class="form-text">ID Страхователя</h2>
                        <h2 class="form-text">Дата регистрации на Авито</h2>
                    </div>
                    <div class="flex-col avito-col">
                        <div class="avito_data"><span class="form-text">{{avitoid}}</span></div>
                        <div class="avito_data"><span class="form-text">{{format_date(date_avitoid)}}</span></div>

                    </div>
                </div>

                <div class="input-group desktop">
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
                    <span v-if="required_category" class="form-text error">Укажите услугу</span>
                </div>


                <div class="input-group mobile">
                    <h2 class="form-text">Услуги</h2>
                    <input readonly class="font-text input" v-model="selected_category" v-on:click="wantSelectCategory">
                    <span v-if="required_category" class="form-text error">Укажите услугу</span>
                </div>


                <div class="input-group desktop" v-if="SUBCATEGORIES">
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
                    <span v-if="required_subcategory" class="form-text error">Укажите категорию</span>
                </div>


                <div class="input-group mobile" v-if="selected_category">
                    <h2 class="form-text">Категория</h2>
                    <input readonly class="input" v-model="selected_subcategory" v-on:click="wantSelectSubCategory">
                    <span v-if="required_subcategory" class="form-text error">Укажите категорию</span>
                </div>

                <div class="contact flex-row bottom">
                    <div class="container input-group">
                        <h2 class="form-text">Телефон</h2>
                        <input class="input"
                               v-bind:class="{required:required_phone}"
                               type="tel"
                               placeholder="+7 ___ ___-__-__"
                               v-model="phone"
                               v-mask="'+7 ### ###-##-##'"
                        >
                    </div>
                    <div class="container input-group">
                        <h2 class="form-text">Почта</h2>
                        <input class="input"
                               v-bind:class="{required:required_email}"
                               type="email"
                               v-model="email"
                               v-on:change="isEmailValid">
                        <span v-if="required_subcategory" class="form-text error">Проверьте адрес почты: он должен быть в формате ivanov@avito.ru </span>
                    </div>

                </div>

            </div>
            <div class="container price flex-col">
                <span v-if="!PRICE" class="form-text description mob container-col">Выберите услуги, чтобы узнать цену страховки.</span>
                <div class="container-col priceflex-row">
                    <span v-if="PRICE" class="form-text amount mobile">Стоимость страховки</span>
                    <!--                <div class="line"></div>-->
                    <span v-if="PRICE" class="form-text amount">{{PRICE/100}} ₽ за месяц</span></div>
                <span v-if="PRICE" class="form-text description mob container-col">Полис действует 30 дней.<br> Клиентам компенсируют убытки до&nbsp;100&nbsp;000 ₽.</span>
                <button class="pay container-col" v-on:click="buyPolicy">Оплатить</button>
                <span class="form-text grey mob container-col">Продолжая, я соглашаюсь на обработку персональных данных страховым акционерным обществом «ВСК».</span>
            </div>
        </div>
        <transition appear name="fade">
            <bottom-shit v-if="want_select_category"
                         name="Услуги"
                         :content=CATEGORY
                         @hide="hideCategoryBottomsheet($event)"
                         @option="onChangeSelectedCategory($event)"
            ></bottom-shit>
        </transition>
        <transition appear name="fade">
            <bottom-shit
                    v-if="want_select_subcategory"
                    name="Категории"
                    :content=SUBCATEGORIES
                    @hide="hideSubCategoryBottomsheet($event)"
                    @option="onChangeSelectedSubCategory($event)"
            ></bottom-shit>
        </transition>
    </div>
</template>

<script>
    import moment from 'moment'
    import {mapActions, mapGetters} from "vuex";
    import VueSingleSelect from "vue-single-select";
    import BottomShit from "@/components/bottomshit";
    import {mask} from 'vue-the-mask'

    export default {
        name: "form-app",
        components: {
            BottomShit,
            VueSingleSelect
        },
        data() {
            return {
                selected_category: null,
                selected_subcategory: null,
                SUBCATEGORIES: null,
                required_category: false,
                required_subcategory: false,
                want_select_category: null,
                want_select_subcategory: null,
                phone: null,
                required_phone: false,
                email: null,
                required_email: false,
                avitoid: 8888888888,
                date_avitoid: "2022-12-01",
                // eslint-disable-next-line
                reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
            }
        },
        directives: {mask},
        computed: {
            ...mapGetters({
                CATEGORY: 'backend/CATEGORY',
                PRICE: 'backend/PRICE',
            })
        },
        mounted() {
            this.GET_CATEGORY()
            const url = new URL(window.location)
            this.avitoid = url.searchParams.get('id')
            this.date_avitoid = url.searchParams.get('date')
        },
        methods: {
            ...mapActions({
                GET_CATEGORY: 'backend/GET_CATEGORY',
                GET_PRICE: 'backend/GET_PRICE',
                BUY_POLICY: 'backend/BUY_POLICY',
                NULL_PRICE: 'backend/NULL_PRICE',
            }),
            format_date(value){
                if (value) {
                    return moment(String(value)).format('DD.MM.YYYY')
                }
            },
            buyPolicy() {

                if (!this.phone || this.modifyPhone(this.phone).length !== 11) {
                    this.required_phone = true
                }
                if (!this.selected_category) {
                    this.required_category = true
                }
                if (!this.selected_subcategory) {
                    this.required_subcategory = true
                }
                if (!this.email) {
                    this.required_email = true
                }
                if (!this.required_category && !this.required_subcategory && !this.required_phone && !this.required_email) {
                    let req = {
                        'category': this.selected_category,
                        'subcategory': this.selected_subcategory,
                        'phone': this.modifyPhone(this.phone),
                        'email': this.email,
                        'avitoid': this.avitoid,
                        'date_avitoid': this.date_avitoid
                    }
                    this.BUY_POLICY(req).then((response) => {
                        window.open(response.data)
                    })
                }
            },
            onChangeSelectedCategory(input) {
                this.want_select_category = false
                if (input && input !== '') {
                    this.SUBCATEGORIES = null
                    if (input.name) {
                        this.selected_category = input.name
                    } else {
                        this.selected_category = input
                    }
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
                this.want_select_subcategory = false
                if (input && input !== '') {
                    if (input.name) {
                        this.selected_subcategory = input.name
                    } else {
                        this.selected_subcategory = input
                    }
                    this.required_subcategory = false
                    this.GET_PRICE({'subcat': this.selected_subcategory})
                } else {
                    this.selected_subcategory = null
                    this.NULL_PRICE()
                }
            },
            wantSelectCategory() {
                this.want_select_category = true
            },
            hideCategoryBottomsheet() {
                this.want_select_category = false
            },
            wantSelectSubCategory() {
                this.want_select_subcategory = true
            },
            hideSubCategoryBottomsheet() {
                this.want_select_subcategory = false
            },
            modifyPhone(phone) {
                phone = phone.replace(/[^0-9]/g, "")
                return phone
            },
            isEmailValid: function () {
                return (this.email === "") ? "" : (this.reg.test(this.email)) ? this.required_email = false : this.required_email = true;
            }
        },

    }
</script>

<style scoped>
    .fade-enter-active {
        transition: all .3s ease-out;
    }

    .fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .fade-enter-from {
        transform: translateY(20px);
        opacity: 0;
    }

    .fade-leave-to {
        transform: translateY(20px);
        opacity: 0;
    }

    .avito {
        display: flex;
        flex-direction: row;
        margin-left: 0 !important;
    }

    .avito_data {
        height: 50%;
        display: flex;
        align-items: center;
        font-size: 0.8rem;
    }

    .avito-titles {
        justify-content: space-between;
    }

    .avito-col {
        margin-left: 2rem;
        justify-content: space-between;
    }

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


    .error {
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
        outline: none;
    }

    .priceflex-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    }

    .mobile {
        display: none;
    }

    @media screen and (max-width: 650px) {
        h1 {
            font-size: 2.2rem;
        }

        .mobile {
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

        .desktop {
            display: none;
        }

    }

</style>
