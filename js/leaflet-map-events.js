// MAP FOR 'onderdeel_events.html'
const eventsMap = L.map('eventsMap').setView([51.14805, 3.23457], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(eventsMap);

const eventsMarkerIcon = L.icon({
    iconUrl: './assets/images/onderdeel_events/mega_event_icon.png',
    iconSize: [35, 35],
    popupAnchor: [0, -22.5]
});

const eventsMarker = L.marker([51.14805, 3.23457], {icon: eventsMarkerIcon}).addTo(eventsMap);
eventsMarker.bindPopup('<a href="https://coord.info/GC846WJ" target="_blank">Brugse Beer X</a><br /><p>Een Belgisch Mega-event in de Brugse regio.</p>').openPopup();

const eventsArea = L.polygon([
    [51.14818, 3.23436],
    [51.14890, 3.23509],
    [51.14842, 3.23626],
    [51.14771, 3.23553]
]).addTo(eventsMap);
eventsArea.bindPopup('<p>In dit gebouw vond het evenement plaats.</p>');