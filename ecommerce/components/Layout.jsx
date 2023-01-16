import React from 'react';
import Head from 'next/head';
import Navbar  from './Navbar';
import { Footer } from '.';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Electronics Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout