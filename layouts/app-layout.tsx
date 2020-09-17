import Head from 'next/head'
import { FunctionComponent } from 'react'

const AppLayout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Head>
        <title>TIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid-y medium-grid-frame">
        <div className="cell shrink top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">Task It Out</li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
            </ul>
          </div>
        </div>
        {children}
        <footer className="cell shrink">
          <p>footer</p>
        </footer>
      </div>
    </>
  )
}

export default AppLayout
