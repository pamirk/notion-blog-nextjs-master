// components/layout.js

import Header from './header'
import Footer from './footer'

export default function Layout({children}) {
  return (
    <>
      <Header titlePre="Home" />
      <main>{children}</main>
      <Footer/>
    </>
  )
}