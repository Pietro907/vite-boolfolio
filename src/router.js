// import rotta, componente e cronologia
import { createWebHashHistory, createRouter } from 'vue-router';

//importo i componenti
import HomeView from './views/HomeView.vue';

//assegno ad una constante le ''
const Home = '';
/* const About = ''; */

//assegno ad una variabile routes il path con il componente associato
const routes = [
    
    //iniziare il path sempre con lo /
    { path: '/', component: HomeView},
    
]

const router = createRouter( {
    //creazione cronologia del router
    history: createWebHashHistory(),
    routes
});

export {router};