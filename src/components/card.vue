<template>
  <div>
    <p class="card">
      {{text}}
    </p>
  </div>
</template>

<script>
  export default {
    props: ['text']
  }
</script>

<style lang="less">
  .card {
    padding: 10px;

  }
</style>

<!--<style module lang="less">-->
  <!--/*@import "~FTCss/common.less";*/-->

  <!--.hello {-->
    <!--background: red;-->
    <!--//.absolute;-->
    <!--//.aC;-->
  <!--}-->
<!--</style>-->
