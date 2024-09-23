// Pago aceptado o rechazado

const aceptarPago = async () => {

    const esExitoso = Math.random() < 0.5; // 50% de exito o fracaso
    const numeroPago = Math.floor(Math.random() * 1000000); // Numero de pago aleatorio
    const notPushExitoso = Math.random() < 0.5; // 50% de exito o fracaso
    const notMailExitoso = Math.random() < 0.5; // 50% de exito o fracaso

    if (esExitoso) {
        return {aprobado: true, numeroPago: numeroPago, notPushExitoso: notPushExitoso, notMailExitoso: notMailExitoso};
    } else {
        return {aprobado: false, notPushExitoso: notPushExitoso, notMailExitoso: notMailExitoso};
    }
}

const obtenerDatosCotizacion = async () => {
    const nombres = ["Juan", "Pedro", "Pablo", "Luis", "Carlos", 
        "Jorge", "Miguel", "Andres", "Jose", "Manuel", "Davo"];
    const valoraciones = ["Buena", "Mala", "Regular"];
    const fechaRetiro = ["19/09/2024", "20/09/2024", "21/09/2024"];
    const fechaTraslado = ["25/09/2024", "26/09/2024", "27/09/2024"];
    const importeViaje = "$" + Math.floor(Math.random() * 10000);

    return {
        nombre: nombres[Math.floor(Math.random() * nombres.length)],
        valoracion: valoraciones[Math.floor(Math.random() * valoraciones.length)],
        fechaRetiro: fechaRetiro[Math.floor(Math.random() * fechaRetiro.length)],
        fechaTraslado: fechaTraslado[Math.floor(Math.random() * fechaTraslado.length)],
        importeViaje: importeViaje}
    };

const aceptarCotizacionService = {
    aceptarPago,
    obtenerDatosCotizacion
}


export default aceptarCotizacionService;