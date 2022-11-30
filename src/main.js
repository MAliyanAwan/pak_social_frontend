import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import "@/assets/style.scss"


const app = createApp(App)


app.use(router)
app.use(Antd)
app.mount('#app')