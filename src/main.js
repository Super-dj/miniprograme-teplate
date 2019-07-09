import Vue from "vue";
import App from "./App";
import store from "./FTStore";

Vue.config.productionTip = false;
App.mpType = "app";

Vue.prototype.$store = store;
const app = new Vue(App);
app.$mount();
