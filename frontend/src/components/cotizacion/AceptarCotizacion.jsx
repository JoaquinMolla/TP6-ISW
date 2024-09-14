import React from 'react';
import './aceptarCotizacion.css';
import {useForm} from "react-hook-form";

export function AceptarCotizacion() {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
    }

    return(
        <div className="aceptarCotizacion">
            <div className="card">
                <div className="card-body">
                    <h2 className="h2">Aceptar cotización</h2>

                    <div className="transportista">
                        <div className="elementosTransportista">
                            <h6 className="form-label tituloForm">Transportista:</h6>
                            <h6 className="form-label textoForm textoTransportista">Juan</h6>
                        </div>

                        <div className="elementosTransportista">
                            <h6 className="form-label tituloForm">Valoración:</h6>
                            <h6 className="form-label textoForm textoTransportista" style={{color: "green"}}>Buena</h6>
                        </div>
                    </div>

                    <div className="elementosTransportista">
                        <h6 className="form-label tituloForm">Importe de viaje:</h6>
                        <h6 className="form-label textoForm textoTransportista">$100</h6>
                    </div>

                    <div className="elementosTransportista">
                        <h4>Seleccione el método de pago</h4>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                            <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"/>
                            <label className="btn btn-outline-primary" htmlFor="btncheck1">Tarjeta</label>

                            <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off"/>
                            <label className="btn btn-outline-primary" htmlFor="btncheck2">Contado al retirar</label>

                            <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off"/>
                            <label className="btn btn-outline-primary" htmlFor="btncheck3">Contado contra entrega</label>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}