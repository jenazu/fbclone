import type { NextPage } from 'next'
import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'

export default function Home ({session}:any)  {
  if (!session) return <Login/> 
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




export async function getServerSideProps(context:any) {
  // get the user
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}