import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>PEPE 3.1</title>
      <link rel="icon" href="favicon.png" sizes="any" />
    </Head>
    <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  );
}
