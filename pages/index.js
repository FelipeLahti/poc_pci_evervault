import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'

const Last4Digits = dynamic(() =>
    import("../components/Last4Digits.tsx").then((mod) => mod.Last4Digits),
  {ssr: false}
)

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Evervault
        </h1>
        <Last4Digits/>
      </main>
    </div>
  )
}

