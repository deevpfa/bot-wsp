import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import { HeadComponent } from '../containers/head/Head'
import { I18nextProvider } from "react-i18next"
import i18next from 'i18next'
import { getUserLocales } from 'get-user-locale';
import { useRouter } from 'next/router'

import esJson from '../translations/es/es.json'
import enJson from '../translations/en/en.json'
import { Layout } from '../containers/layouts/Layout'
import { useEffect } from 'react'
import { ThemeProvider } from '@material-tailwind/react'
import { THEME } from '../styles/ThemeProvider'
import { AuthProvider } from '../store/useAuth'
import { ProtectRoute } from '../common/ProtectRoute'

const userLocale = getUserLocales();


i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: userLocale[1] ? userLocale[1] : 'es',
  resources: {
    // TODO: CAMBIAR POR EN JSON YA QUE ES EL DEFAULT
    en: { global: esJson },
    es: { global: esJson }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  // check if the page have layout
  const path = useRouter().pathname.split('/')
  // pages that have layout
  const haveLayout : any = []

  useEffect(() => {
    // if the page have layout, then add the class to body
    if (haveLayout.includes(path[1])) {
      document.body.classList.add('h-full', 'bg-gray-100')
    } else {
      document.body.classList.remove('h-full', 'bg-gray-100')
    }
  })


  return (
    <>
      <I18nextProvider i18n={i18next}>
        <HeadComponent title={null} />
        <AuthProvider>
          <ProtectRoute>
              <ThemeProvider value={THEME}>
                {haveLayout.includes(path[1]) ? <Layout><Component {...pageProps} /></Layout> : <Component {...pageProps} />}
              </ThemeProvider>
          </ProtectRoute>
        </AuthProvider>
      </I18nextProvider>
    </>)
}

// how to use translation system
// import { useTranslation } from 'react-i18next'
// const {t} = useTranslation('global')
//<h1>{t("login.hello-world")}</h1>
