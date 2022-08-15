import '../styles/globals.css'
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <div className="min-h-screen w-full text-gray-300 bg-slate-900">
   <Component {...pageProps} />
   </div>
}

export default MyApp
