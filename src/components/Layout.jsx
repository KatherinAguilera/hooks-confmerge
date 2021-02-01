import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.scss'

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="Main">
      {children}
    </div>
    <Footer />
  </>
  )

export default Layout;