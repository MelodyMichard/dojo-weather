function removeElement(element) {
    element.remove();
}

function burbank(elementId) {
    let e = document.querySelector(elementId);
    alert("Loading weather report... ");
}

function chicago(elementId) {
    let e = document.querySelector(elementId);
    alert("Loading weather report... ");
}

function dallas(elementId) {
    let e = document.querySelector(elementId);
    alert("Loading weather report... ");
}

function celciusToFahrenheit(celcius) {
    return (celcius * (9/5)) + 32;
}

function fahrenheitToCelcius(fahrenheit) {
    return (fahrenheit - 32) * (9/5);
}

function convertTemp(measure) {
    let e = measure.options[measure.selectedIndex].value;
    if(e === "celcius") {
        let result = fahrenheitToCelcius;
    }
    if(e === "fahrenheit") {
        let result = celciusToFahrenheit;
    }   
}