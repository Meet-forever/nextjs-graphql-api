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
      {/*  */}
      <div className={styles.main}>
        <h1 className={styles.title}>What I Learned?</h1>
        <br/>
        <br/>
        <br/>
        <div className={styles.textblock}>Unlike REST API, GraphQL only serves from a single endpoint. GraphQL offers only three types of operations: Query, Mutation, and Subscription. Query is like a <code className={styles.green}>GET</code> request. The client fetches the data using Query and <code className={styles.yellow}>PUT</code> and <code className={styles.orange}>POST</code> the data using Mutation. And, the real-time data are handle by Subscriptions, which are generally used with WebSockets.</div>
        <br/>
      </div>
    </div>
  )
}

export default Home