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
    html {
        overflow-x: hidden;
    }
    .body-wrapper {
        width: 71%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 4.9rem;
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
        font-size: 0.8rem !important;
        line-height: 1.1rem;
        color: #858585;
    }

    .dropdown::-webkit-scrollbar {
        width: 10px;
    }

    .dropdown::-webkit-scrollbar-track {
        border-radius: 100px;
    }

    .dropdown::-webkit-scrollbar-thumb {
        background-color: #E3E2E1;
        border-radius: 100px;
    }
    .dropdown {
        font-weight: 400;
        font-size: 1rem !important;
        line-height: 1rem !important;
        font-family: 'Arial';
        font-style: normal;
    }
    .dropdown > li {
        color: black;
    }
    .search-input{
        font-weight: 400;
        font-size: 1rem !important;
        line-height: 1rem !important;
        padding-left: 1rem !important;
        -moz-box-sizing: border-box !important;
        box-sizing: border-box !important;
        background: #F2F1F0 !important;
        border-radius: 6px !important;
        height: 2.6rem !important;
        width: 100% !important;
        border-width: 2px !important;
        border-color: #F2F1F0 !important;
        max-width: 580px !important;
    }
    .glyphicon {
        padding: 0 1em;
        right: 0;
        top: 0;
        bottom: 0;
        max-width: 10px

    }
    .required {
        border: 1px solid #FF4053 !important;
    }
    .vcp__header-title{
        margin-right: 2px !important;
    }
    .vcp__header-icon {
        width: 20px !important;
    }
    .vcp__header {
        padding:0 !important;
    }
    .vcp__body-content {
        padding:0 !important;
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
