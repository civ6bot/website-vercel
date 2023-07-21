import Head from "next/head";
import { useRouter } from 'next/router';
import Footer from "components/Footer";
import { NextUIProvider } from '@nextui-org/react';
import 'styles/global.css';

export default function App({ Component, pageProps }) {
  const route = useRouter()?.route ?? "";
  return (
    <NextUIProvider>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo/logo.ico" />
        <link rel="mask-icon" href="/logo/logo.svg" color="#920000" />
        <meta name="msapplication-TileColor" content="#920000" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
      {((route === "/404") || (route.slice(0, route.indexOf(".")) === "/steam")) ? null : <Footer lang={route.slice(1+route.indexOf("."))} />}
    </NextUIProvider>
  );
}
