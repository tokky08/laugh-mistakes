<template>
  <!-- <footer>
    <small>© 2020 失敗談を笑おう.com by tokky08</small>
  </footer> -->
  <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      <small color="primary">© {{ new Date().getFullYear() }} 失敗談を笑おう.com by tokky08</small>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
