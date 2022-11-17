import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CasinoProvider } from "../context/CasinoContext";
import { ReviewProvider } from "../context/ReviewsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <CasinoProvider>
    <ReviewProvider>
       <Component {...pageProps} />
    </ReviewProvider>
  </CasinoProvider>
  )
}

export default MyApp
