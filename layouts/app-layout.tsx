import Head from 'next/head'
import styles from 'styles/AppLayout.module.scss'

export default function AppLayout({ children }) {
  return (
    <>
      <Head>
        <title>TIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="grid-y medium-grid-frame">
        <div class="cell shrink top-bar" className={styles.topBar}>
          <div class="top-bar-left">
            <ul class="dropdown menu" data-dropdown-menu>
              <li class="menu-text">Task It Out</li>
            </ul>
          </div>
          <div class="top-bar-right">
            <ul class="menu">
            </ul>
          </div>
        </div>
        {children}
        <footer class="cell shrink">
          <p>footer</p>
        </footer>
      </div>
    </>
  )
}
