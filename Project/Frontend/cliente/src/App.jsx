import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home.jsx'
import Festivais from './pages/Festivais/festivais.jsx'
import Shows from './pages/Shows/shows.jsx'
import Todos from './pages/Todos/todos.jsx'
import Universitarios from './pages/Universitarios/universitarios.jsx'
import Detalhes from './pages/Detalhes/index.jsx'
import FinalizarCompra from './pages/FinalizarCompra/index.jsx'
import HomeLogado from './pages/HomeLogado/index.jsx'
import Perfil from './pages/Perfil/index.jsx'
import Table from './pages/Table/index.jsx'
import axios from 'axios'
import { useState, useEffect } from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/festivais' element={<Festivais />}/>
        <Route path='/shows' element={<Shows />}/>
        <Route path='/todos' element={<Todos />}/>
        <Route path='/universitarios' element={<Universitarios />}/>
        <Route path={'/tipoEvento/:id'} element={<Detalhes />}></Route>
        <Route path='/finalizar/:id/:cont' element={<FinalizarCompra />}></Route>
        <Route path='/logado' element={<HomeLogado />}></Route>
        <Route path='/perfil' element={<Perfil/>}></Route>
        <Route path='/table' element={<Table/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
