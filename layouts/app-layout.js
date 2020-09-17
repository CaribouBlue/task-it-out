import Head from 'next/head'

export default function AppLayout({ children }) {
  return (
    <div>
      <Head>
        <title>TIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <footer>
      </footer>
    </div>
  )
}
