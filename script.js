let urlBase = 'http://api.openweathermap.org/data/2.5/weather';
let api_key = '166c924b8e0f82bd5722cf33c131aa86';
let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
  const ciudad = document.getElementById('ciudadEntrada').value

  if(ciudad) {
    fetchDatosClima(ciudad);
  }
})

function fetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then((data) => data.json())
    .then((data) => mostrarDatosclima(data));
}

function mostrarDatosclima(data) {
const divdatoClima = document.getElementById('datosClima');
divdatoClima.innerHTML = ''

const ciudadNombre = data.name
const paisNombre = data.sys.country
const temperatura = data.main.temp
const humedad = data.main.humidity
const descripcion = data.weather[0].description
const icono = data.weather[0].icon

const ciudadTitulo = document.createElement('h2')
ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

const temperaturaInfo = document.createElement('p') 
temperaturaInfo.textContent = `La Temperatura es: ${Math.floor(temperatura-difKelvin)}°C`

const humedadInfo = document.createElement('p') 
humedadInfo.textContent = `La Humedad es: ${humedad}%`;

const iconoInfo = document.createElement('img') 
iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

const descripcionInfo = document.createElement('p')
descripcionInfo.textContent = `La descripcion meteorologica: ${descripcion}`

divdatoClima.appendChild(ciudadTitulo, paisNombre)
divdatoClima.appendChild(temperaturaInfo)
divdatoClima.appendChild(humedadInfo)
divdatoClima.appendChild(iconoInfo)
divdatoClima.appendChild(descripcionInfo)

}