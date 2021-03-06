import Vue from "vue";
import VueMq from 'vue-mq'
import App from "./App.vue";
import axios from 'axios'
import Popover  from 'vue-js-popover'

Vue.config.productionTip = false;

Vue.prototype.axios = axios

Vue.use(Popover)

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    // tablet: 900,
    // laptop: 1250,
    desktop: Infinity,
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");

