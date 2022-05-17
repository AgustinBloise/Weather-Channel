// variables

let input = document.querySelector('input')

let boton = document.querySelector('button')

let span = document.querySelector('#ciudad')

let span2 = document.querySelector('#temperatura')

let img = document.querySelector('#wicon')

let descripcion = document.querySelector('#descripcion')

let url
let ciudad

//codigo

boton.addEventListener('click', cargarCiudad)

input.addEventListener('keypress', enter)

// funciones

function cargarCiudad(){
    ciudad = input.value
    url = "https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916" + "&units=metric&lang=es"

    if (ciudad==''){
        alert('Ingresa el nombre de una ciudad')
    }

    else if(UrlExists(url)){
        alert('Ingresa una ciudad válida')
    }

    else{
        document.querySelector(".container").style.visibility = "visible"
        $.getJSON(url, function(data) {
        span.textContent = data.name
        span2.innerHTML = data.main.temp + '<sup>°C</sup>'
        img.src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'
        descripcion.textContent = data.weather[0].description

        }
    )}
    input.value = ''
}

function enter(e){
    if(e.keyCode === 13){
        cargarCiudad()
    }
}

function UrlExists(url) {
    let http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if(http.status == 404){
        return true
    }
}
