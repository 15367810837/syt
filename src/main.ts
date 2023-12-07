import { createApp } from 'vue'
import App from './App.vue'
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
// 引入eliment_ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入路由
import router from '@/router/index'
import '@/style/reset.scss'
const app = createApp(App)
app.component("HospitalTop",HospitalTop)
app.component("HospitalBottom",HospitalBottom)
// 安装路由
app.use(router)
app.use(ElementPlus)
app.mount('#app')
