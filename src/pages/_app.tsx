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
import { Paths } from '@/constants/Paths'
import { ToastContainer } from 'react-toastify'

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
  const router = useRouter()
  const path =  "/" + router.pathname.split("/")[1];
  const withLayout = [Paths.dashboard , Paths.templates, Paths.interactions, Paths.account];
	const haveLayout = withLayout.includes(path);

  useEffect(() => {
		haveLayout ? document.body.classList.add("h-full", "bg-gray") : document.body.classList.remove("h-full", "bg-gray");
	}, [haveLayout]);


  return (
    <>
      <I18nextProvider i18n={i18next}>
        <HeadComponent title={null} />
        <AuthProvider>
          <ProtectRoute>
              <ThemeProvider value={THEME}>
              <ToastContainer hideProgressBar={true} position="top-center" autoClose={1000} limit={2} theme="light" closeOnClick={true} />
								{/* <NextProgressBar color="#eb1034" height={2} options={{showSpinner : false}}/> */}
								{haveLayout ? (
									<Layout>
										<Component {...pageProps} />
									</Layout>
								) : (
									<Component {...pageProps} />
								)}
              </ThemeProvider>
          </ProtectRoute>
        </AuthProvider>
      </I18nextProvider>
    </>)
}
