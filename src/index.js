
import { TableLayout } from './Layout/Layout.js';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '../src/Redux/Store.js'

const root = document.getElementById("root")
const rootRoot = ReactDOMClient.createRoot(root)

rootRoot.render(<App />)


function App() {
  return (
    <Provider store={store}>
      <TableLayout />
    </Provider>
  )
}

