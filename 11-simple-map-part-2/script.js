// load the map object
const mapObject = L.map('map').setView([1.3521, 103.8198], 12);


// set up the tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapObject);


// lets add a simple marker on the zoo
const marker = L.marker([1.4043, 103.7930]);
marker.addTo(mapObject);


// async function loadCarparkData(){
//     let response = await axios.get`https://data.gov.sg/collections/{collection_id}/view`
//     return response.data
// }


// Loads once the DOM is loaded, you can add your APIs below
// document.addEventListener("DOMContentLoaded", async function(){

// })