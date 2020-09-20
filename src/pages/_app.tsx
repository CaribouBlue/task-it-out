import 'styles/globals.scss'
import type {AppProps} from 'next/app'
import { Provider } from 'react-redux'
import configureStore from 'store'
import MockTasks from 'mock-data/tasks'

const store = configureStore({
  tasks: MockTasks,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
