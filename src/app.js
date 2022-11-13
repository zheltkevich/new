import '@css/index.css';
import '@scss/index.scss';
import '@pwa/registerServiceWorker';
import { createApp } from 'vue';
import App from '@/vue/App.vue';
import router from '@router/router.js';
import { initColorScheme } from '@modules/colorScheme.js';
// import PWA from '@pwa/pwa.js';

initColorScheme();
// PWA.setupInstallButton();

createApp(App)
    .use(router)
    .mount('#app');
