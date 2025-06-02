import { UserProvider } from '../src/UserContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
          <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
  <meta name="description" content="description of your project" />
  <meta name="theme-color" content="#000" />
  <title>NT App</title>
  <link rel="manifest" href="/manifest.json" />
  <link rel="shortcut icon" href="/favicon.ico" />
   <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      </Head>


      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
