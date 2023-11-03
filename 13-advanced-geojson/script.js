document.addEventListener("DOMContentLoaded", async function () {
    const singapore = [1.3521, 103.8198]
    const map = L.map('map').setView(singapore, 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Add code below
const zooMarker = L.marker([1.4043, 103.7930]).addTo(map)


    const cycling = await loadJsonData("data/cycling.geojson")
    const cyclingLayer = L.geoJson(cycling, {
        onEachFeature: function (feature, layer) {
            const tempElement = document.createElement("div")
            tempElement.innerHTML = feature.properties.Description
            const allTDs = tempElement.querySelectorAll("td")
            const cyclingPath = allTDs[0].innerHTML;
            const agency = allTDs[1].innerHTML;
            layer.bindPopup(`<h2>${cyclingPath}</h2><p><b>Managed by: </b>${agency}<p>`)
        }
    })
    cyclingLayer.setStyle(
        {
            color: "red",
            weight: 4
        }
    )


// let's load the nparks geojson file
const nparks = await loadJsonData("data/nparksTracks.geojson")
const nparksLayer = L.geoJson(nparks, {
    onEachFeature:function(feature,layer){
        const html = feature.properties.Description
        const tempElement = document.createElement('div')
        tempElement.innerHTML = html
        const allTds = tempElement.querySelectorAll("td")
        const nparksName = allTds[0].innerHTML;
        const nparksType = allTds[1].innerHTML;
        layer.bindPopup(`<h2>${nparksName}</h2><p><b>Park Type: </b>${nparksType}<p>`)
    }
})
  nparksLayer.setStyle(
        {
            color: "darkgreen",
            weight: 3
        })

async function loadJsonData(filePath) {
    const response = await axios.get(filePath)
    return response.data
}

cyclingLayer.addTo(map)
nparksLayer.addTo(map)


// add a layer group
const overlays = {
    "Cycling Paths": cyclingLayer,
    "NParks Trails": nparksLayer
}
L.control.layers(overlays).addTo(map)
    
});

