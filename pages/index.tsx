import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Hello world!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='p-10'>
        <h1 className='text-6xl'>Hello world!</h1>
      </main>

    </div>
  )
}

export default Home
