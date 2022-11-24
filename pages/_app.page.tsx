import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CasinoProvider } from "../context/CasinoContext";
import { ReviewProvider } from "../context/ReviewsContext";
import { BlogProvider } from '../context/BlogsContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <CasinoProvider>
    <ReviewProvider>
      <BlogProvider>
       <Component {...pageProps} />
       </BlogProvider>
    </ReviewProvider>
  </CasinoProvider>
  )
}

export default MyApp
