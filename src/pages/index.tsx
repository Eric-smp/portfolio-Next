import Head from 'next/head'
import { FirstPage } from '@/components'

export default function Home() {

  return (
    <>
      <Head>
        <title>Portifolio</title>
        <meta name="description" content="Portifolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <FirstPage />
      
    </>
  )
}
