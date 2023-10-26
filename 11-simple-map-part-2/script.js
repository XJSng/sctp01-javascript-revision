// load the map object
const mapObject = L.map('map').setView([1.3521, 103.8198], 12);


// set up the tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapObject);


// lets add a simple marker on the zoo
const zooMarker = L.marker([1.4043, 103.7930]);
zooMarker.addTo(mapObject);

const seaAquarium = L.marker([1.2583, 103.8205]).addTo(mapObject);
const jewel = L.marker([1.3602,103.9898]).addTo(mapObject);

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

const sameplePoly = L.polygon([
    [1.4043, 103.7930],
    [1.2583, 103.8205],
    [1.3602,103.9898]
]).addTo(mapObject)

// async function loadCarparkData(){
//     let response = await axios.get`https://data.gov.sg/collections/{collection_id}/view`
//     return response.data
// }


// Loads once the DOM is loaded, you can add your APIs below
// document.addEventListener("DOMContentLoaded", async function(){

// })