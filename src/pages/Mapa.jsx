import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect, useState } from "react"

export default function Mapa() {
    const style={
        height:"500px"
    }
    const position=[40,-3]
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
        <h1>Esta es un mapa con la ubicación de cada Empresa</h1>
        <MapContainer style={style} center={position} zoom={6} scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {empresas.map((item,index)=>(
                <Marker key={index} position={[item.lat, item.lng]}>
                    <Popup>{item.nombre}, {item.ciudad}</Popup>
                </Marker>
            ))}
        </MapContainer>
        </>
    )
}
