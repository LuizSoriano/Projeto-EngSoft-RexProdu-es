import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Festivais from './pages/Festivais/festivais.jsx'
import Shows from './pages/Shows/shows.jsx'
import Todos from './pages/Todos/todos.jsx'
import Universitarios from './pages/Universitarios/universitarios.jsx'
import Detalhes from './pages/Detalhes/index.jsx'
import FinalizarCompra from './pages/FinalizarCompra/index.jsx'
import HomeLogado from './pages/HomeLogado/index.jsx'
import Perfil from './pages/Perfil/index.jsx'
import Login from './pages/Login/index.jsx'
import MeusIngressos from './pages/meusIngressos/index.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/:id" element={<HomeLogado/>}></Route>
        <Route path='/festivais/:id' element={<Festivais />}/>
        <Route path='/shows/:id' element={<Shows />}/>
        <Route path='/todos/:id' element={<Todos />}/>
        <Route path='/universitarios/:id' element={<Universitarios />}/>
        <Route path={'/tipoEvento/:idEvento/:id'} element={<Detalhes />}></Route>
        <Route path='/finalizar/:idEvento/:cont/:id' element={<FinalizarCompra />}></Route>
        <Route path='/perfil' element={<Perfil/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/ingressos' element={<MeusIngressos/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
