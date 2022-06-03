<template>
    <div class="body-wrapper" id="form">
        <h1 class="form-text">Оформите страховку на свои услуги</h1>
        <span class="form-text description">С ней легче привлечь клиентов. Если что-то сломается или испортится, заказчики могут получить
            до&nbsp;100&nbsp;000 ₽ компенсации от&nbsp;Страхового дома ВСК.</span>
        <div class="flex-row form-all">
            <div class="form-group container flex-col">
                <div class="avito">
                    <div class="flex-col avito-titles">
                        <h2 class="form-text">ID страхователя</h2>
                        <h2 class="form-text">Дата регистрации на&nbsp;Авито</h2>
                    </div>
                    <div class="flex-col avito-col">
                        <div class="avito_data"><span class="form-text">{{avitoid}}</span></div>
                        <div class="avito_data"><span class="form-text">{{format_date(date_avitoid)}}</span></div>

                    </div>
                </div>

                <div class="input-group desktop">
                    <h2 class="form-text">Категория</h2>
                    <vue-single-select
                            name="category"
                            :options="CATEGORY"
                            option-label="name"
                            placeholder="Выберите категорию"
                            @input="onChangeSelectedCategory($event)"
                            :required=required_category
                    >
                    </vue-single-select>
                    <span v-if="required_category" class="form-text error">Укажите категорию</span>
                </div>


                <div class="input-group mobile">
                    <h2 class="form-text">Услуги</h2>
                    <input readonly class="font-text input" v-model="selected_category" v-on:click="wantSelectCategory">
                    <span v-if="required_category" class="form-text error">Укажите категорию</span>
                </div>


                <div class="input-group desktop" v-if="SUBCATEGORIES">
                    <h2 class="form-text">Подкатегория</h2>
                    <vue-single-select
                            name="foo"
                            :options="SUBCATEGORIES"
                            option-label="name"
                            placeholder="Выберите подкатегорию"
                            @input="onChangeSelectedSubCategory($event)"
                            :required=required_subcategory
                    >
                    </vue-single-select>
                    <span v-if="required_subcategory" class="form-text error">Укажите подкатегорию</span>
                </div>


                <div class="input-group mobile" v-if="selected_category">
                    <h2 class="form-text">Категория</h2>
                    <input readonly class="input" v-model="selected_subcategory" v-on:click="wantSelectSubCategory">
                    <span v-if="required_subcategory" class="form-text error">Укажите подкатегорию</span>
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
                               v-on:change="isPhoneValid"
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
                <span v-if="PRICE" class="form-text description mob container-col">Полис действует 30 дней.<br> Клиентам компенсируют убытки до&nbsp;100&nbsp;000&nbsp;₽.</span>
                <button class="pay container-col cursor-pointer" v-on:click="buyPolicy">
                    <div v-if="!loading">Оплатить</div>
                    <div class="preloader" v-if="loading">
                        <svg class="preloader__image" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
                                <path d="M11.5802 21.6071C10.9293 21.6071 10.4016 21.0794 10.4016 20.4285C10.4016 19.7776 10.9293 19.25 11.5802 19.25C16.1365 19.25 19.8302 15.5563 19.8302 11C19.8302 6.44362 16.1365 2.74997 11.5802 2.74997C7.02385 2.74997 3.3302 6.44362 3.3302 11C3.3302 11.6509 2.80253 12.1785 2.15162 12.1785C1.50072 12.1785 0.973053 11.6509 0.973053 11C0.973053 5.1418 5.72203 0.392822 11.5802 0.392822C17.4384 0.392822 22.1873 5.1418 22.1873 11C22.1873 16.8581 17.4384 21.6071 11.5802 21.6071Z" fill="white"/>
                        </svg></div>
                </button>
                <span class="form-text grey mob container-col">Продолжая, я принимаю <a class="grey" href="https://www.vsk.ru/upload/cache/default/tree/12/1109/tabs/Pravila-1801-A4.pdf">правила</a> и <a class="grey" href="https://www.vsk.ru/upload/cache/default/tree/12/1109/tabs/Pravila-1801-A4.pdf">условия страхования</a> и соглашаюсь <a class="grey" href="https://www.vsk.ru/about/confidentiality_policy/#?tab-1154">на обработку персональных данных</a> страховым акционерным обществом «ВСК».</span>
            </div>
        </div>
        <transition appear name="fade">
            <bottom-shit v-if="want_select_category"
                         name="Категории"
                         :content=CATEGORY
                         @hide="hideCategoryBottomsheet($event)"
                         @option="onChangeSelectedCategory($event)"
            ></bottom-shit>
        </transition>
        <transition appear name="fade">
            <bottom-shit
                    v-if="want_select_subcategory"
                    name="Подкаатегории"
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
    import VueSingleSelect from "@/components/vue-single-select/VueSingleSelect";
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
                loading: false,
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
                    this.loading=true
                    this.BUY_POLICY(req).then((response) => {
                        this.loading=false
                        window.open(response.data,'_self',false)
                    })

                }

            },
            onChangeSelectedCategory(input) {
                this.required_category = false
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
                this.required_subcategory = false
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
            },
            isPhoneValid() {
                if (!this.phone || this.modifyPhone(this.phone).length !== 11) {
                    this.required_phone = true
                }
                else {
                    this.required_phone=false
                }
            }
        },

    }
</script>

<style scoped>
    .preloader {
        overflow: hidden;
        z-index: 1001;
    }

    .preloader__image {
        position: relative;
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
        animation: preloader-rotate 2s infinite linear;
    }

    @keyframes preloader-rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    .loaded_hiding .preloader {
        transition: 0.3s opacity;
        opacity: 0;
    }

    .loaded .preloader {
        display: none;
    }
    .cursor-pointer {
        cursor: pointer;
    }
    .body-wrapper {
        margin-top: 4rem;
    }

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
        height: 4rem;
        display: flex;
        flex-direction: row;
        margin-left: 0 !important;
        margin-bottom: 1rem;
    }

    .avito_data {
        height: 50%;
        display: flex;
        align-items: flex-start;
        font-size: 0.8rem;
    }

    .avito-titles {
        justify-content: space-between;

    }

    .avito-titles>h2 {
        margin: 0;
        margin-bottom: 1rem;
    }
    .avito-col {
        margin-left: 3.5rem;
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
        font-size: 1.7rem !important;
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
        font-size: 1rem;
    }

    .input-group {
        margin-bottom: 1rem !important;

    }

    .form-group {
        width: 57% !important;
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
        width: 83%;
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
        max-height: 16.6rem;
    }

    h1 {
        font-size: 2rem !important;
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
        height: 2.6rem;
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
        .form-all {
            margin-top: 1.6rem !important;
        }
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
            width: 100% !important;
            margin: 0 0;
        }

        input {
            height: 2.6rem;
        }

        .mob {
            font-size: 0.8rem;
            font-weight: 400;
            line-height: 1.4rem;
        }

        .desktop {
            display: none;
        }
        .avito-titles {
            width: 50%;
            padding-right: 10px;
        }
        .avito-col{
            margin-left: 0;
        }
        .amount {
            font-size: 1.1rem !important;
        }

    }

</style>
