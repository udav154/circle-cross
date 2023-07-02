import { createContext } from 'react'
import ReactDOM from 'react-dom'
import Store from './store/index.ts'
import App from './App.tsx'
import './styles/index.scss'

interface IStore {
  store: Store
}

const store = new Store()

export const Context = createContext<IStore>({ store })

ReactDOM.render(
  <Context.Provider value={{ store }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
)