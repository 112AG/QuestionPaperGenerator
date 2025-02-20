import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppContextProvider from './AppContextProvider'

export default function App({ Component, pageProps }: AppProps) {
  return <AppContextProvider><Component {...pageProps} /></AppContextProvider>;
}
