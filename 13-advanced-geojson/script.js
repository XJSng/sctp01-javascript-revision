document.addEventListener("DOMContentLoaded", async function(){
const singapore = [1.3521, 103.8198]
    const map = L.map('map').setView(singapore, 12);
  
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add code below
    const cycling = await loadJsonData("data/cycling.geojson")
    const cyclingLayer = L.geoJson(cycling, {
        onEachFeature: function(features, layer) {
            const tempElement = document.createElement("div")
            tempElement.innerHTML = features.properties.Description
            console.log(tempElement)
        }
    })
    // console.log(cyclingLayer)
})

async function loadJsonData(filePath) {
    const response = await axios.get(filePath)
    return response.data
}