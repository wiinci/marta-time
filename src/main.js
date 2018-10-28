// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import momentPlugin from "./moment";
import router from "./router";

Vue.use(momentPlugin, "$moment");
Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.performance = true;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
});
