import AppLayout from 'layouts/app-layout'
import { FunctionComponent } from 'react'

const Home: FunctionComponent = () => {
  return (
    <AppLayout>
      <div className="cell auto cell-block-container">
        <h1>Page title</h1>
        <p>page content</p>
      </div>
    </AppLayout>
  )
}

export default Home
