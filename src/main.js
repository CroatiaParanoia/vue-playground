import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import CollectionList from './pages/CollectionList/index.vue';

import './main.css';

const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };

// const routes = [{ path: '/', component: App }];
const routes = [
  { path: '/', component: Home },
  { path: '/collection-list', component: CollectionList },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

const app = createApp(App).use(router).mount('#app');
