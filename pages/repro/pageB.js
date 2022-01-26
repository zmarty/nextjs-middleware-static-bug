import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page B</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Page B
        </h1>
      </main>
    </div>
  )
}
