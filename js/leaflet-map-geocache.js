// MAP FOR 'onderdeel_wat-zijn-geocaches.html'
const firstGeocacheMap = L.map('firstGeocacheMap').setView([45.29100, -122.41333], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(firstGeocacheMap);

const firstGeocacheMarkerIcon = L.icon({
    iconUrl: './assets/images/onderdeel_wat-zijn-geocaches/traditional_geocache_icon.png',
    iconSize: [35, 35],
    popupAnchor: [0, -22.5]
});

const firstGeocacheMarker = L.marker([45.29100, -122.41333], {icon: firstGeocacheMarkerIcon}).addTo(firstGeocacheMap);
firstGeocacheMarker.bindPopup('<a href="https://coord.info/GCF" target="_blank">The Original Stash</a><br /><p>De allereerste geocache ooit geplaatst.</p>').openPopup();