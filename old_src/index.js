import { createApp } from "vue";
import App from "./App";

Vue.config.productionTip = false

const app = createApp(App);
app.mount("#app")
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })