import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* Header */}
    <Header/>
    <main>
      {/* Sidebar */}
      {/* feed */}
      {/* widgets */}
    </main>
    </div>
  )
}

export default Home
