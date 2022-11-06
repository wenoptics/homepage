import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {setupAutoDarkSwitch} from "./components/auto-dark";

setupAutoDarkSwitch()
createApp(App).mount('#app')
