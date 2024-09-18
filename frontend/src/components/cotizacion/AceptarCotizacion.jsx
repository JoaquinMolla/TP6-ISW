import React from 'react';
import './aceptarCotizacion.css';
import {PagoTarjeta} from "./PagoTarjeta";
import {PagoEfectivo} from "./PagoEfectivo";
import {PagoContContr} from "./PagoContContr";
import { useEffect } from 'react';
import aceptarCotizacionService from "../../services/aceptarCotizacion";

export function AceptarCotizacion() {

    const [datosCotizacion, setDatosCotizacion] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await aceptarCotizacionService.obtenerDatosCotizacion();
            setDatosCotizacion(res);
        }
        fetchData();
    }, []);

    const [mostrarPagoTarjeta, setMostrarPagoTarjeta] = React.useState(false);
    const [mostrarPagoEfectivo, setMostrarPagoEfectivo] = React.useState(false);
    const [mostrarPagoContContraEntrega, setMostrarPagoContContraEntrega] = React.useState(false);

    const mostrarPago = () => {
        setMostrarPagoTarjeta(true);
        setMostrarPagoEfectivo(false);
        setMostrarPagoContContraEntrega(false);
    }

    const mostrarPagoEf = () => {
        setMostrarPagoEfectivo(true);
        setMostrarPagoTarjeta(false)
        setMostrarPagoContContraEntrega(false);
    }

    const mostrarPagoCont = () => {
        setMostrarPagoContContraEntrega(true);
        setMostrarPagoEfectivo(false);
        setMostrarPagoTarjeta(false);
    }

    return(
        <div className="aceptarCotizacion">
            <div className="card">
                <div className="card-body">
                    <h2 className="h2">Aceptar cotización</h2>

                    <div className="transportista">
                        <div className="elementosTransportista">
                            <h6 className="form-label tituloForm">Transportista:</h6>
                            <h6 className="form-label textoForm textoTransportista">{datosCotizacion.nombre}</h6>
                        </div>

                        <div className="elementosTransportista">
                            <h6 className="form-label tituloForm">Valoración:</h6>
                            {datosCotizacion.valoracion === "Buena" &&
                            <h6 className="form-label textoForm textoTransportista" 
                            style={{color: "green"}}>{datosCotizacion.valoracion}</h6>}
                            {datosCotizacion.valoracion === "Regular" &&
                            <h6 className="form-label textoForm textoTransportista"
                            style={{color: "orange"}}>{datosCotizacion.valoracion}</h6>}
                            {datosCotizacion.valoracion === "Mala" && 
                            <h6 className="form-label textoForm textoTransportista" 
                            style={{color: "red"}}>{datosCotizacion.valoracion}</h6>}
                        </div>

                        <div className="elementosTransportista">
                            <h6 className="form-label tituloForm">Fecha de retiro:</h6>
                            <h6 className="form-label textoForm textoTransportista">{datosCotizacion.fechaRetiro}</h6>
                        </div>

                        <div className="elementosTransportista">
                            <h6 className="form-label tituloForm">Entrega del traslado:</h6>
                            <h6 className="form-label textoForm textoTransportista">{datosCotizacion.fechaTraslado}</h6>
                        </div>

                        <div className="elementosTransportista">
                            <h6 className="form-label tituloForm">Importe de viaje:</h6>
                            <h6 className="form-label textoForm textoTransportista">{datosCotizacion.importeViaje}</h6>
                        </div>

                        </div>

                        <div className="elementosTransportista">
                            <h4>Seleccione el método de pago</h4>
                        </div>

                    <div className="elementosForm">
                        <button type="button" className="btn btn-primary botones" onClick={mostrarPago}>Tarjeta</button>
                        <button type="button" className="btn btn-primary botones" onClick={mostrarPagoEf}>Contado al retirar</button>
                        <button type="button" className="btn btn-primary botones" onClick={mostrarPagoCont}>Contado contra entrega
                        </button>
                    </div>

                    {mostrarPagoTarjeta && !mostrarPagoEfectivo && !mostrarPagoContContraEntrega &&
                        <PagoTarjeta/>}
                    {mostrarPagoEfectivo && !mostrarPagoTarjeta && !mostrarPagoContContraEntrega &&
                        <PagoEfectivo/>}
                    {mostrarPagoContContraEntrega && !mostrarPagoTarjeta && !mostrarPagoEfectivo &&
                        <PagoContContr/>}

                    </div>

                </div>
            </div>
            );
}