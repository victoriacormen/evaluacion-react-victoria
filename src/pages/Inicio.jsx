import { Link } from "react-router-dom"
import logo from "../assets/logo.jpg"

export default function Inicio() {
  return (
    <>
    <h1>CODE SPAIN</h1>
    <img width={"500px"} src={logo} alt=""/>
    <p>Aplicación que reúne en un listado y señala en un mapa interactivo las principales empresas de programación con las que trabajamos en España.</p>
    <Link to="/mapa"><button>Ver Delegaciones en España</button></Link>
    </>
  )
}
