import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

export default function Navbar () {
  const data = useStaticQuery(graphql`
      {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)
  const { title } = data.site.siteMetadata
  return (
    <nav>
      <h1>{title}</h1>
      <div className='links'>
        <Link to='/'>Домой</Link>
        <Link to='/about'>Обо мне</Link>
        <Link to='/projects'>Мои проекты</Link>
      </div>
    </nav>
  )
}
