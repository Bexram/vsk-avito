<template>
    <div class="success__view">
        <modal-window @hide="$emit('close')">
            <template #context>
                <div  class="context">
                <h2>Страховка оплачена</h2>
                <span>Полис придёт на вашу электронную почту. Как правило, это занимает несколько минут. Если письма долго нет, проверьте в папке «Спам».
                </span>
                </div>
            </template>
        </modal-window>
    </div>
</template>

<script>
    import ModalWindow from "@/components/modal/ModalWindow";

    export default {
        name: "SuccessPay",
        components: {ModalWindow}
    }
</script>

<style scoped>
    .context{
        margin: 2rem 2rem;
        font-family: 'Arial';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
    }
    @media (max-width: 428px) {
        .context{
            font-size: 12px;
        }
        h2 {
            font-size: 18px;
        }
    }
</style>
