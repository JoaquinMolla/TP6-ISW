import React from "react";
import {useState} from "react";
import "./aceptarCotizacion.css"

export function PagoEfectivo() {

    const [aceptarPagoEfectivo, setAceptarPagoEfectivo] = useState(false);

    const pagoEfectivo = () => {
        setAceptarPagoEfectivo(true);
    }

    return (
        <>
        <div>
            <h2 className="h2 mt-2">Pago en efectivo</h2>
            <button onClick={pagoEfectivo} className="btn btn-success">Confirmar forma de pago</button>
        </div>

        <div className="elementosForm">
            {aceptarPagoEfectivo === true && <p>El pago en efectivo fue aceptado correctamente.
                Pedido Confirmado.</p>}
        </div>
        </>
)
    ;
}