import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CasinoProvider } from "../context/CasinoContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <CasinoProvider>
    <Component {...pageProps} />
  </CasinoProvider>
  )
}

export default MyApp
