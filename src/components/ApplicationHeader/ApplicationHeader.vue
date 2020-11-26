<template lang="pug">
  div.application-header.flex-row
    div.application-header__left.flex-row
      icon-button(v-if='$route.name !== "index"'
        :icon="['far', 'arrow-alt-circle-left']"
        @on-click="$router.push({name: 'index'})"
        )
    div.application-header__right.flex-row
</template>

<script>
  import IconButton from "@/components/Ui/IconButton"

  export default {
    name: "ApplicationHeader",
    components: {
      'icon-button': IconButton,
    }
  }
</script>

<style lang="sass">

</style>
