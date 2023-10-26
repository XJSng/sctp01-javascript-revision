// load the map object
const map = L.map('map').setView([1.3521, 103.8198], 12);


// set up the tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Loads once the DOM is loaded, you can add your APIs below
document.addEventListener("DOMContentLoaded", async function(){

})
