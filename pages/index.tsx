import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>N1C.TF</title>
        <meta name="description" content="n1c.tf is now hacked by Nu1L Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hacked by <a href="https://nu1l.com">Nu1L Team</a>
        </h1>

        <p className={styles.description}>
          Welcome to{' '}
          <code className={styles.code}>N1C.TF</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nu1l.com" className={styles.card}>
            <h2>Nu1L Team &rarr;</h2>
            <p>Want more about Nu1L Team?</p>
          </a>

          <a href="https://www.npointer.cn" className={styles.card}>
            <h2>Null Pointer &rarr;</h2>
            <p>More about Null Pointer platform.</p>
          </a>

          <a href="https://book.nu1l.com" className={styles.card}>
            <h2>N1Book &rarr;</h2>
            <p>A CTF handbook written by Nu1L Team.</p>
          </a>

          <a href="https://ctftime.org/ctf/240" className={styles.card}>
            <h2>N1CTF &rarr;</h2>
            <p>A CTF game organized by Nu1L Team.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.nu1l.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          Nu1L Team
        </a>
      </footer>
    </div>
  )
}

export default Home
