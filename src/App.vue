<template>
    <header-app></header-app>
    <form-app></form-app>
    <advantages></advantages>
    <how-work></how-work>
    <faq-app></faq-app>
</template>

<script>
    import HeaderApp from "@/components/header";
    import FormApp from "@/components/form";
    import Advantages from "@/components/advantages";
    import HowWork from "@/components/howwork";
    import FaqApp from "@/components/faq";

    export default {
        name: 'App',
        components: {
            FaqApp,
            HowWork,
            Advantages,
            FormApp,
            HeaderApp,

        }
    }
</script>

<style>
    .body-wrapper {
        width: 71%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 4rem;
        max-width: 970px;
        height: auto;
    }

    .form-text {
        font-family: 'Arial';
        font-style: normal;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 600;
        line-height: 2rem;
    }

    h2 {
        font-size: 2.2rem;
    }

    .description {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
    }
    .grey {
        font-weight: 400;
        font-size: 0.7rem;
        line-height: 1rem;
        color: #858585;
    }


    @media screen and (max-width: 650px) {
        .body-wrapper {
            width: 92%;
            margin: 0 4%;
            margin-top: 2rem;
        }

        h1 {
            font-size: 2.2rem;
        }

        h2 {
            font-size: 2rem;
        }
    }


</style>
