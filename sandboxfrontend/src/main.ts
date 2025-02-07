import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue'
import App from './App.vue'
import Food from './components/Food.vue'
import Recipe from './components/Recipe.vue'
import store from './store/index.js'
import '../src/assets/main.css'

const routes = [
    {
        path: '/', name: 'Food',
        component: Food
    },   
    {
        path: '/recipe', name: 'Recipe',
        component: Recipe
    },  

]

const router = createRouter({
    history: createWebHistory(),
    routes // short for `routes: routes`
})

const app = createApp(App)
app.use(store)
app.use(router)

app.mount('#app')
