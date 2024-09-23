import React from "react";
import {useForm} from "react-hook-form";
import "./aceptarCotizacion.css";
import aceptarCotizacionService from "../../services/aceptarCotizacion";

export function PagoTarjeta() {

    const [pagoExitoso, setPagoExitoso] = React.useState(null);
    const [numeroPago, setNumeroPago] = React.useState(null);

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm();

    const onSubmit = async (data) => {
        console.log("Datos cargados: ", data);
        const res = await aceptarCotizacionService.aceptarPago();
        if (res.aprobado) {
            setPagoExitoso(true);
            setNumeroPago(res.numeroPago);
            reset({
                numeroTarjeta: "",
                pin: "",
                nombreCompleto: "",
                numeroDocumento: "",
            })
        } else {
            setPagoExitoso(false);
            reset({
                numeroTarjeta: "",
                pin: "",
            });
        }
    }


    return (
      <>
          <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="h2 mt-2">Formulario de pago con tarjeta</h2>
              <div className="form-group">

                  <div className="elementosForm">
                      <label>Tipo de tarjeta:</label>
                      <select className="form-control"
                              {...register("tipoTarjeta", {
                                  required: "El tipo de tarjeta es requerido"
                              })}>
                          <option>Credito</option>
                          <option>Debito</option>
                      </select>
                  </div>

                  <div className="elementosForm">
                      <label>Número de tarjeta:</label>
                      <input className="form-control" id="numeroTarjeta" name="numeroTarjeta"
                             {...register("numeroTarjeta", {
                                 required: "El número de tarjeta es requerido",
                                 pattern: {
                                     value: /^[0-9]*$/,
                                     message: "Solo se permiten números"
                                 },
                                 minLength: {
                                     value: 16,
                                     message: "El número de tarjeta debe tener entre 16 y 18 dígitos"
                                 },
                                 maxLength: {
                                     value: 18,
                                     message: "El número de tarjeta debe tener entre 16 y 18 dígitos"
                                 }
                             })}/>
                      <div>
                          {errors.numeroTarjeta &&
                              <span style={{color: "darkred"}}>{errors.numeroTarjeta.message}</span>}
                      </div>
                  </div>

                  <div className="elementosForm">
                      <label>PIN:</label>
                      <input className="form-control" type="password" id="pin" name="pin"
                             {...register("pin", {
                                 required: "El PIN es requerido",
                                 pattern: {
                                     value: /^[0-9]*$/,
                                     message: "Solo se permiten números"
                                 },
                                 minLength: {
                                     value: 3,
                                     message: "El PIN debe tener 3 dígitos"
                                 },
                                 maxLength: {
                                     value: 3,
                                     message: "El PIN debe tener 3 dígitos"
                                 }
                             })}/>
                      <div>
                          {errors.pin &&
                              <span style={{color: "darkred"}}>{errors.pin.message}</span>}
                      </div>
                  </div>

                  <div className="elementosForm">
                      <label>Nombre completo:</label>
                      <input className="form-control" type="text" id="nombreCompleto" name="nombreCompleto"
                             {...register("nombreCompleto", {
                                 required: "El nombre es requerido",
                                 pattern: {
                                     value: /^[a-zA-Z\s]*$/,
                                     message: "Solo se permiten letras"
                                 }
                             })}/>
                      <div>
                          {errors.nombreCompleto &&
                              <span style={{color: "darkred"}}>{errors.nombreCompleto.message}</span>}
                      </div>
                  </div>

                  <div className="elementosForm">
                      <label>Tipo de documento:</label>
                      <select className="form-control"
                              {...register("tipoDocumento", {
                                  required: "El tipo de documento es requerido"
                              })}>
                          <option>DNI</option>
                          <option>Carnet de extranjería</option>
                          <option>Pasaporte</option>
                      </select>
                  </div>


                  <div className="elementosForm">
                      <label>Número de documento:</label>
                      <input className="form-control" id="numeroDocumento" name="numeroDocumento"
                             {...register("numeroDocumento", {
                                 required: "El número de documento es requerido",
                                 pattern: {
                                     value: /^[0-9]*$/,
                                     message: "Solo se permiten números"
                                 },
                                 minLength: {
                                     value: 8,
                                     message: "El número de documento debe tener entre 8 y 12 dígitos"
                                 },
                                 maxLength: {
                                     value: 12,
                                     message: "El número de documento debe tener entre 8 y 12 dígitos"
                                 }
                             })}/>
                      <div>
                          {errors.numeroDocumento &&
                              <span style={{color: "darkred"}}>{errors.numeroDocumento.message}</span>}
                      </div>
                  </div>

                  <button type="submit" className="mt-2 btn btn-success">Procesar Pago</button>
              </div>
          </form>

          <div className="elementosForm">
            {pagoExitoso === true && <p>El pago fue aceptado correctamente. El numero de pago es: {numeroPago}.
                Pedido Confirmado. El transportista fue notificado con éxito</p>}
            {pagoExitoso === false && <p>El pago fue rechazado. Por favor, verifique los datos de la tarjeta.</p>}
          </div>
      </>
    );
}