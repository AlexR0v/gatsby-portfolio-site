import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
      {
          site {
              siteMetadata {
                  copyright
              }
          }
      }
  `)
  const { copyright } = data.site.siteMetadata

  return (
    <main className='layout'>
      <Navbar />
      <div className='content'>
        {children}
      </div>
      <footer>
        <p>{copyright}</p>
      </footer>
    </main>
  )
}

export default Layout
