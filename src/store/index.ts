import { createStore, applyMiddleware, compose, StoreEnhancer } from 'redux'
import rootReducer from 'store/root-reducer'

export default function configureStore(preloadedState: any) {
  const middlewares: any[] = []
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers: StoreEnhancer = compose(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}
