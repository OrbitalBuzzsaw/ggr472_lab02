mapboxgl.accessToken = 'pk.eyJ1IjoiYW9jaHJpc3Rlc2VuIiwiYSI6ImNtNzVzM3ozNzAxMzMycnB1Ymswd3pxdmgifQ.OXmeKBE7RZ3VT88AiV93Nw';

const map = new mapboxgl.Map({
    container: 'map', // HTML container ID
    style: 'mapbox://styles/aochristesen/cm75sbdga00i401quarbffk7tL', // Mapbox Studio style URL
    center: [-100, 40], // Initial centre 
    zoom: 4
});

// zoom and rotation controls
map.addControl(new mapboxgl.NavigationControl());

map.on('load', function () {
    // Add layer
    map.addSource('layer1', {
        type: 'geojson',
        data: 'https://github.com/OrbitalBuzzsaw/ggr472_lab02/blob/main/mbta_stations.json'
    });

    map.addLayer({
        id: 'layer1',
        type: 'fill',
        source: 'layer1',
        paint: {
            'fill-color': '#ff0000',
            'fill-opacity': 0.5
        }
    });

    // Add second layer
    map.addSource('layer2', {
        type: 'geojson',
        data: 'https://github.com/OrbitalBuzzsaw/ggr472_lab02/blob/main/mbta_lines.json'
    });

    map.addLayer({
        id: 'layer2',
        type: 'circle',
        source: 'layer2',
        paint: {
            'circle-radius': 6,
            'circle-color': '#0000ff'
        }
    });
});
