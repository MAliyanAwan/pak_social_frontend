import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


const app = createApp(App)

app.mount('#app')
app.use(router)
app.use(Antd)