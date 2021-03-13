import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/home.module.css'

export default function Home () {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Web разработчик</h2>
          <h3>Сайты и приложения</h3>
          <p>Только самые современные web-технологии</p>
          <Link
            className={styles.btn}
            to='/projects'
          >Мои работы</Link>
        </div>
        <img
          src='/banner.png'
          alt='site banner'
          style={{ maxWidth: '100%' }}
        />
      </section>
    </Layout>
  )
}
