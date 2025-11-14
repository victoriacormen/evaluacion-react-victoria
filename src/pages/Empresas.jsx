import { useEffect, useState } from "react"
import "./Empresas.css"

export default function Empresas() {
    const [empresas, setEmpresas]=useState([])
    useEffect(()=>{
        const cargarEmpresas= async ()=>{
            try{
                const respuesta= await fetch ("http://localhost:5173/empresas.json")
                const data= await respuesta.json()
                setEmpresas(data)
            }catch(error){
                console.error("Se ha producido un error", error)
            }
        }
        cargarEmpresas()
    }, [])
    return (
        <>
        <h1>Este es el listados de Empresas:</h1>
        <ul>
            {empresas.map((item, index)=>(
                <li key={index}>{`${item.nombre} con id ${item.id}, ubicada en ${item.ciudad} y coordenadas ${item.lat}, ${item.lng} .`}</li>
            ))}
        </ul>
        </>
    )
}
