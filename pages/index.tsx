import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
const Home: NextPage = () => {
  const [apiData, setApiData] = useState("");
  const apiRequestExample = `

  query {
    hello
  }
  `
  const getApiData = async () => {
    setApiData(`  
  {
    "data": {
      "hello": "World!"
    }
  }`)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Learning GraphQL</title>
        <meta name="description" content="Testing out some graphql features" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h1 className={styles.title}>GraphQL API</h1>
        <p>This is just a simple GraphQL API to explore and experiment with GraphQL!</p>
        <Link href="/api/graphql"><button className={styles.btn}>GraphQL</button></Link>
        <br />
        <br />
        <br />
        <div className={styles.horizontal}>
          <div>
            <div className={styles.text_tag}>Request</div>
            <textarea readOnly rows={7} cols={10} spellCheck={false} value={apiRequestExample} className={styles.slate} />
          </div>
          <div>
            <div className={styles.text_tag}>Response</div>
            <textarea readOnly rows={7} cols={30} spellCheck={false} value={apiData} className={styles.slate} />
          </div>
        </div>
        <br />
        <div className={styles.horizontal}>
          <button className={styles.small_btn} onClick={getApiData}>Get Data</button>
          <button className={styles.small_btn} onClick={() => setApiData("")}>Clear</button>
        </div>
      </div>
    </div>
  )
}

export default Home