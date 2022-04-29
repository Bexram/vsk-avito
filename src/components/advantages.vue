<template>
    <div class="body-wrapper">
        <h2 class="form-text mobh1">Что даёт страхование</h2>

        <div class="card-all flex-row">
            <div class="card container flex-col">
                <div class="img-container">
                    <img :src="require('/src/assets/adv1.svg')">
                </div>

                <h2 class="form-text card-title">Защита от незапланированных трат</h2>
                <span class="form-text card-description">ВСК изучает претензии заказчиков и&nbsp;при необходимости компенсирует ущерб</span>
            </div>
            <div class="card container flex-col">
                <div class="img-container">
                    <img :src="require('/src/assets/adv2.svg')">
                </div>
                <h2 class="form-text card-title">Значок «Страховка от&nbsp;ущерба»</h2>
                <span class="form-text card-description">Появится в&nbsp;ваших объявлениях</span>
            </div>
            <div class="card container flex-col">
                <div class="img-container">
                    <img :src="require('/src/assets/adv3.svg')">
                </div>
                <h2 class="form-text card-title">Больше заказов</h2>
                <span class="form-text card-description">Способ сделать ваше предложение заметнее</span>
            </div>
        </div>

        <div class="swipe">
            <swiper
                    :slides-per-view="1.2"
                    :space-between="30"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
            >
                <swiper-slide>
                    <div class="card flex-col">
                        <div class="img-container">
                            <img :src="require('/src/assets/adv1.svg')">
                        </div>

                        <h2 class="form-text card-title">Защита от незапланированных трат</h2>
                        <span class="form-text card-description">ВСК изучает претензии заказчиков и&nbsp;при необходимости компенсирует ущерб</span>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card flex-col">
                        <div class="img-container">
                            <img :src="require('/src/assets/adv2.svg')">
                        </div>
                        <h2 class="form-text card-title">Значок «Страховка от&nbsp;ущерба»</h2>
                        <span class="form-text card-description">Появится в ваших объявлениях</span>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card flex-col">
                        <div class="img-container">
                            <img :src="require('/src/assets/adv3.svg')">
                        </div>
                        <h2 class="form-text card-title more">Больше заказов</h2>
                        <span class="form-text card-description">Способ сделать ваше предложение заметнее</span>
                    </div>
                </swiper-slide>
            </swiper>
        </div>

    </div>
</template>

<script>
    import {Swiper, SwiperSlide} from 'swiper/vue';
    // Import Swiper styles
    import 'swiper/css';

    export default {
        name: "advantages-app",
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const onSwiper = (swiper) => {
                console.log(swiper);
            };
            const onSlideChange = () => {
                console.log('slide change');
            };
            return {
                onSwiper,
                onSlideChange,
            };
        },
    }
</script>

<style scoped>
    .card {
        padding: 2% 3%;
        background: #F2F1F0;
        border-radius: 6px;
        width: 25%;
        height: auto;
        text-align: center;
    }

    .img-container {
        margin-top: 8%;
        align-items: center;
        margin-bottom: 6%;
        height: 6.6rem;
        width: 6.6rem;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .card-title {
        font-size: 1rem;
        line-height: 1.5rem;
        margin: 0;
    }

    .card-description {
        margin-top: 2px;
        margin-bottom: 2.2rem;
        font-size: 0.8rem;
        line-height: 1.3rem;
    }

    .flex-col {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    img {
        max-height: 100%;
        max-width: 100%;
    }

    .swipe {
        display: none;
    }

    @media screen and (max-width: 650px) {
        .card-all {
            display: none;
        }

        .card {
            padding: 10% 10%;
            width: 80%;
            height: 280px;
        }

        .swipe {
            display: block;
        }

        .card-title {
            font-size: 1.1rem;
        }
        .card-description {
            font-size: 1rem;
            margin-bottom: 1rem;
        }
        .more {
            margin-bottom:0.5rem;
        }
    }
</style>
