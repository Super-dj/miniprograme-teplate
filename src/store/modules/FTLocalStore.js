import {FTMutationTypes} from "FTConstants";

const {CHANGE_LANGUAGE, GET_LOCAL} = FTMutationTypes;

export default {
  state: {
    local: {hello: "HelloWorld"}
  },
  getters: {
    [GET_LOCAL](state) {
      return state.local
    }
  },
  actions: {
    [CHANGE_LANGUAGE]({commit}, local) {
      commit(CHANGE_LANGUAGE, local);
    }
  },
  mutations: {
    [CHANGE_LANGUAGE](state) {
      console.log({hello: "你好,世界"});
      state.local = {hello: "你好,世界"};
    }
  }
};
