import '@css/index.css';
import '@scss/index.scss';
import { createApp } from 'vue';
import App from '@/vue/App.vue';
import router from '@router/router.js';
import { initColorScheme } from '@modules/colorScheme.js';

initColorScheme();

createApp(App)
    .use(router)
    .mount('#app');
