import Header from './header'
import Footer from './footer'
import Head from "next/head";

export default function Layout({children}) {
  return (
    <>
      <Head>
        <script async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2484398083224760"
                crossOrigin="anonymous"></script>
      </Head>
      <Header titlePre="Home"/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}