var map = L.map('main_map', { zoomControl: false }).setView([-41.2858, 174.78682], 14);

var icon = L.icon({
    iconUrl: 'image/ico/map_ico.svg',
    shadowUrl: 'leaf-shadow.png',

    iconSize:     [21, 30], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

var marker = L.marker([-41.2858, 174.78682], {
    icon: icon
}).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.");

var marker2 = L.marker([-41.2899, 174.79982], {icon: icon}).addTo(map);

var marker3 = L.marker([-41.2999, 174.74282], {icon: icon}).addTo(map);

var marker4 = L.marker([-41.2869, 174.74682], {icon: icon}).addTo(map);