document.addEventListener("DOMContentLoaded", async function () {
    const map = createMap();
    const attractions = await loadData("data/attractions.json");
    // Call the attraction layer group to attractions
    const attractionLayerGroup = L.layerGroup();
    attractionLayerGroup.addTo(map)
    for (let attraction of attractions) {
        const marker = L.marker([attraction.latitude, attraction.longitude]);
        marker.addTo(attractionLayerGroup)
    }



    // the reason why only two functions are used is because these are repeated task
    // and it is cleaner to have similar processes run through functions. 
    // Create hawker layer
    const hawkers = await loadData("data/hawkers.json");
    const hawkerLayerGroup = L.layerGroup();
    hawkerLayerGroup.addTo(map)
    for (let hawker of hawkers) {
        const marker = L.marker([hawker.latitude, hawker.longitude]);
        marker.addTo(hawkerLayerGroup)
    }


    // Add Zoo Marker
    const zooMarker = L.marker([1.4043, 103.7930])
    zooMarker.bindPopup(`<h3>This is the Singapore Zoo</h3>`)
    zooMarker.addTo(map);
})

// Put map element in DOMcontentloader
function createMap() {
    const map = L.map('map')

    //starting zoom area
    map.setView([1.4043, 103.7930], 15)

    // Need a tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    return map
}
async function loadData(filePath) {
    const response = await axios.get(filePath)
    return response.data.locations
}

// function AddMarkersFromData(IncomingData) {
//     const IncomingDataLayerGroup = L.layerGroup();
//     for (let x of IncomingData) {
//     const marker = L.marker ([x.latitude, x.longitude]);
//     marker.addTo(IncomingDataLayerGroup)
// }
// }

    // // custom marker WORK IN PROGRESS
    // var foodIcon = L.icon({
    //     iconUrl: 'icons/chicken-rice.png',
    //     iconSize: [38, 95],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //     shadowUrl: 'my-icon-shadow.png',
    //     shadowSize: [68, 95],
    //     shadowAnchor: [22, 94]
    // });
    // // L.marker({ icon: foodIcon }).addTo(map);