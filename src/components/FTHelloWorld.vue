<template>
  <div class="hello">
    <button @click="change">{{ _['hello'] }}</button>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";
  import {FTMutationTypes} from "FTConstants";

  const {CHANGE_LANGUAGE, GET_LOCAL, SET_EMIT, GET_EMIT} = FTMutationTypes;
  export default {
    name: "HelloWorld",
    data() {
      return {
        title: 'hello'
      }
    },
    computed: {
      ...mapGetters({_: GET_LOCAL, __: GET_EMIT})
    },
    methods: {
      ...mapActions([CHANGE_LANGUAGE, SET_EMIT]),
      change() {
        this[CHANGE_LANGUAGE]();
        this[SET_EMIT]({type: "helloworld" + new Date().getTime()});
        console.log(this.__);
        console.log(process.env);
      }
    }
  };
</script>

Add "scoped" attribute to limit CSS to this component only
<style scoped lang="less">
  @import "~FTCss/common.less";

  .hello {
    background: red;
    .absolute;
    .aC;
  }
</style>

