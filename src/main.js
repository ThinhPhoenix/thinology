import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

const currentPath = window.location.pathname;
const pathToHide = '/cookyourfone';

if (currentPath === pathToHide) {
    const elements = document.getElementsByClassName('hid-frp');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
}