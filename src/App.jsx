import { Routes, Route, Link } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Empresas from "./pages/Empresas"
import Mapa from "./pages/Mapa"
import "./App.css"

function App() {
  return (
  <>
    <nav>
      <Link to="/">Inicio | </Link>
      <Link to="/empresas">Listado de Empresas | </Link>
      <Link to="/mapa">Mapa ubicación Empresas</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/empresas" element={<Empresas/>}/>
      <Route path="/mapa" element={<Mapa/>}/>
    </Routes>
  </>
  )
}

export default App
