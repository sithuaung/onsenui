import Vue from 'vue'
import VueOnsen from 'vue-onsenui';
import App from './App.vue'
import store from './store';

// Webpack CSS import
import 'mapbox-gl/dist/mapbox-gl.css';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

Vue.use(VueOnsen);

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
