import Head from 'next/head'
import Dictaphone from '../components/Dictaphone'

export default function Home() {
  return (
    <>
      <Head>
        <title>Audio Zoo</title>
      </Head>
      <Dictaphone />
    </>
  )
}
