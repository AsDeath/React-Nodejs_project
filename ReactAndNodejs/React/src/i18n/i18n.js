import i18n from 'i18next'

import ru from './translation/ru.json'
import ro from './translation/ro.json'
import en from './translation/en.json'

i18n.init({
  lng: 'En',
  debug: true,
  resources: {
    En: {
      translation: en,
    },
    Ru: {
      translation: ru,
    },
    Ro: {
      translation: ro,
    },
  },
})

export default i18n