document.addEventListener("DOMContentLoaded", function(){
const singapore = [1.3521, 103.8198]
    const map = L.map('map').setView(singapore, 12);
  
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
})