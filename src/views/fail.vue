<template>
    <div class="fail__view"
    >
        <modal-window @hide="$emit('close', true)">
            <template #context>
                <div class="context">
                    <h2>Не получилось оплатить страховку</h2>
                    <span>Попробуйте ещё раз. Убедитесь, что на карте есть нужная сумма.
                </span>
                </div>
            </template>
        </modal-window>
    </div>
</template>

<script>
    import ModalWindow from "@/components/modal/ModalWindow";

    export default {
        name: "FailPay",
        components: {ModalWindow}
    }
</script>

<style scoped>
    .context {
        margin: 2rem 2rem;
        font-family: 'Arial';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 23px;
    }

    @media (max-width: 428px) {
        .context {
            font-size: 12px;
        }

        h2 {
            font-size: 18px;

        }
    }
</style>
