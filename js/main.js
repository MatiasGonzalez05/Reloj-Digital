/* const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
    formatSwitchBtn.classList.toggle("active");

    let formatValue = formatSwitchBtn.getAttribute("data-format");

    if(formatValue === "12") {
        formatSwitchBtn.setAttribute("data-format", "24");
    } else {
        formatSwitchBtn.setAttribute("data-format", "12");
    }
})

// obtener la hora actual
function clock() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let period = "AM";

    //establecer el período de tiempo
    if(hours >= 12) {
        period = "PM";
    }

    //establecer el formato de 12 horas
    let formatValue = formatSwitchBtn.getAttribute("data-format");

    if(formatValue === "12") {
        hours = hours > 12 ? hours % 12 : hours;
    }

    //Agregue el "0" para los valores de tiempo inferiores a 10
    if( hours < 10) {
        hours = "0" + hours;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;
}


//actualizar reloj cada segundo
let updateColck = setInterval(clock, 1000);

//Obtener la fecha actual
let today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleDateString("default", {weekday: "long"});
const monthName = today.toLocaleDateString("default", {month: "short"});

document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".day-number").innerHTML = dayNumber;
document.querySelector(".year").innerHTML = year;
 */

document.addEventListener("DOMContentLoaded", function() {
    const formatSwitchBtn = document.querySelector(".format-switch-btn");

    formatSwitchBtn.addEventListener("click", () => {
        formatSwitchBtn.classList.toggle("active");

        let formatValue = formatSwitchBtn.getAttribute("data-format");

        if(formatValue === "12") {
            formatSwitchBtn.setAttribute("data-format", "24");
        } else {
            formatSwitchBtn.setAttribute("data-format", "12");
        }

        // Actualizar el reloj con el nuevo formato
        updateClock();
    });

    // Función para actualizar el reloj con el formato actual
    function updateClock() {
        const today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        let period = "AM";

        //establecer el período de tiempo
        if(hours >= 12) {
            period = "PM";
        }

        // Obtener el formato de hora actual
        const formatValue = formatSwitchBtn.getAttribute("data-format");

        // Convertir horas a formato de 12 horas si es necesario
        if (formatValue === "12") {
            hours = hours > 12 ? hours % 12 : hours;
            hours = hours === 0 ? 12 : hours; // Si es 0, ajustar a 12
        }

        // Agregar ceros a la izquierda si es necesario
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // Actualizar la visualización del reloj en el HTML
        document.querySelector(".hours").textContent = hours;
        document.querySelector(".minutes").textContent = minutes;
        document.querySelector(".seconds").textContent = seconds;
        document.querySelector(".period").textContent = period;
    }

    // Llamar a updateClock() para inicializar el reloj
    updateClock();

    // Actualizar el reloj cada segundo
    setInterval(updateClock, 1000);

    //Obtener la fecha actual
    let today = new Date();
    const dayNumber = today.getDate();
    const year = today.getFullYear();
    const dayName = today.toLocaleDateString("default", {weekday: "long"});
    const monthName = today.toLocaleDateString("default", {month: "short"});

    document.querySelector(".month-name").innerHTML = monthName;
    document.querySelector(".day-name").innerHTML = dayName;
    document.querySelector(".day-number").innerHTML = dayNumber;
    document.querySelector(".year").innerHTML = year;
});



