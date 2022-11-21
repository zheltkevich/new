import '@css/index.css';
import '@scss/index.scss';
import '@pwa/registerServiceWorker.js';
import { createApp } from 'vue';
import App from '@/vue/App.vue';
import router from '@router/router.js';
import store from '@store/store.js';
import { initColorScheme } from '@modules/colorScheme.js';

initColorScheme();

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');
