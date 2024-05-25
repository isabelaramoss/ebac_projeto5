import { Provider } from 'react-redux'
//onde configuramos as páginas e onde gerenciamos
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal, { Container } from './styles'
import store from './store'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    //caminho inicial
    path: '/',
    //quando ele encontrar o /, algum elemento deve ser renderizado:
    element: <Home />
  },
  {
    path: '/novo',
    element: <h1>nova tarefa</h1>
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
