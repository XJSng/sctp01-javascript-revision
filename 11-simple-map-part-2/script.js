// load the map object
const mapObject = L.map('map').setView([1.3521, 103.8198], 12);

// set up the tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapObject);


// Add marker cluster layer (MUST be placed below the tileLayer)
const markerClusterLayer = L.markerClusterGroup()
markerClusterLayer.addTo(mapObject)


// lets add a simple marker on the zoo
const zooMarker = L.marker([1.4043, 103.7930]);
zooMarker.addTo(mapObject);
const mbsMarker = L.marker([1.2838,103.8591]).addTo(mapObject);

// add more markers on various attractions
const seaAquarium = L.marker([1.2583, 103.8205]).addTo(mapObject);
const jewel = L.marker([1.3602,103.9898]).addTo(mapObject);

// add 2 circle elements
const fairfieldPrimary = L.circle([1.3005,103.7849], {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 0.4,
    radius: 1000
}).addTo(mapObject)

const queenswayCanopy = L.circle([1.2904,103.8004], {
    color: '#1560BD',
    fillColor: "#1560BD",
    fillOpacity: 0.5,
    radius: 500
}).addTo(mapObject)

// add a polygon area 
const sameplePoly = L.polygon([
    [1.4043, 103.7930],
    [1.2583, 103.8205],
    [1.3602,103.9898]
]).addTo(mapObject)

// marker clustering example
// let's create a weather map
async function loadWeatherData(){
    const response = await axios.get`https://api.data.gov.sg/v1/environment/2-hour-weather-forecast`
    let weatherSpots = response.data.area_metadata
    return weatherSpots
}

//render the weather map on leaflet
async function renderWeatherData(weatherData){
    markerClusterLayer.clearLayers()
    for (let w of weatherData) {
        const lat = w.label_location.latitude
        const lng = w.label_location.longitude
        const latLng = [lat,lng]
        // console.log(latLng) test latLng
        const weatherMarker = L.marker(latLng)
        weatherMarker.bindPopup(`<h3>${w.name}</h3>`)
        weatherMarker.addTo(markerClusterLayer)
    }
}




// Loads once the DOM is loaded, you can add your APIs below
document.addEventListener("DOMContentLoaded", async function(){
    // await loadCarparkData()
    const weatherData = await loadWeatherData()
    renderWeatherData(weatherData)
})
