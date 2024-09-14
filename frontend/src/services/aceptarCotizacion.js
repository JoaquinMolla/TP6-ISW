
// Pago aceptado o rechazado

const aceptarPago = async () => {

    const esExitoso = Math.random() < 0.5; // 50% de exito o fracaso
    const numeroPago = Math.floor(Math.random() * 1000000); // Numero de pago aleatorio

    if (esExitoso) {
        return {aprobado: true, numeroPago: numeroPago};
    } else {
        return {aprobado: false};
    }
}

const aceptarCotizacionService = {
    aceptarPago
}

export default aceptarCotizacionService;