// import rotta, componente e cronologia
import { createWebHashHistory, createRouter } from 'vue-router';

//assegno ad una constante le ''
const Home = '';
/* const About = ''; */

//assegno ad una variabile routes il path con il componente associato
const routes = [
    { path: '/', component: Home},
    /* { path: '/about', component: About}, */
]

const router = createRouter( {
    //creazione cronologia del router
    history: createWebHashHistory(),
    routes
});

export {router};