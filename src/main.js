import { createApp } from 'vue';
//import dal file router.js l'export {router}
import { router } from './router.js';


import './style.scss';
import App from './App.vue';

//importo il router con lo use()
createApp(App).use(router).mount('#app');
