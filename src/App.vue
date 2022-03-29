<template>
  <header-app></header-app>
  <form-app></form-app>
</template>

<script>
import HeaderApp from "@/components/header";
import FormApp from "@/components/form";

export default {
  name: 'App',
  components: {
    FormApp,
    HeaderApp,

  }
}
</script>

<style>

</style>
