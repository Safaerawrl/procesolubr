// Manejar formulario de turnos
// Manejar formulario de turnos
document.getElementById("formTurnos").addEventListener("submit", function(e){
    e.preventDefault();

    // Capturar datos del formulario
    const turno = {
        nombre: this.nombre.value,
        telefono: this.telefono.value,
        fecha: this.fecha.value,
        servicio: this.servicio.value
    };

    // Guardar en localStorage
    let turnos = JSON.parse(localStorage.getItem("turnos")) || [];
    turnos.push(turno);
    localStorage.setItem("turnos", JSON.stringify(turnos));

    alert("¡Turno reservado! Nos pondremos en contacto contigo.");
    this.reset();
});

// Manejar formulario de cotizaciones
document.getElementById("formCotizaciones").addEventListener("submit", function(e){
    e.preventDefault();

    // Capturar datos del formulario
    const cotizacion = {
        nombre: this.nombre.value,
        telefono: this.telefono.value,
        servicio: this.servicio.value,
        mensaje: this.mensaje.value
    };

    // Guardar en localStorage
    let cotizaciones = JSON.parse(localStorage.getItem("cotizaciones")) || [];
    cotizaciones.push(cotizacion);
    localStorage.setItem("cotizaciones", JSON.stringify(cotizaciones));

    alert("¡Cotización enviada! Te responderemos pronto.");
    this.reset();
});
