import './style/style.css'
import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import '../node_modules/element-plus/dist/index.css'
import App from './App.vue'


createApp(App).use(router).use(ElementPlus).mount('#app')
