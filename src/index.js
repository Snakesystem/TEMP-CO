import React from 'react'
import ReactDOM from 'react-dom/client'

// import style / configure plugins
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'aos/dist/aos.css'

// import components
import App from './app/App'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import lang_en from './assets/lang/locale-en.json'
import lang_id from './assets/lang/locale-id.json'

i18n.use(initReactI18next).init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    en: {
      lang: lang_en
    },
    id: {
      lang: lang_id
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)