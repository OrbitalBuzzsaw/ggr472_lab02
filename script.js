mapboxgl.accessToken = 'pk.eyJ1IjoiYW9jaHJpc3Rlc2VuIiwiYSI6ImNtNzVzM3ozNzAxMzMycnB1Ymswd3pxdmgifQ.OXmeKBE7RZ3VT88AiV93Nw';

const map = new mapboxgl.Map({
    container: 'map', // HTML container ID
    style: 'mapbox://styles/aochristesen/cm75sbdga00i401quarbffk7tL', // Mapbox Studio style URL
    center: [-100, 40], // Initial centre 
    zoom: 4
});

// zoom and rotation controls
map.addControl(new mapboxgl.NavigationControl());

mapboxgl.accessToken = 'pk.eyJ1IjoiYW9jaHJpc3Rlc2VuIiwiYSI6ImNtNzVzM3ozNzAxMzMycnB1Ymswd3pxdmgifQ.OXmeKBE7RZ3VT88AiV93Nw';

const map = new mapboxgl.Map({
    container: 'map', // HTML container ID
    style: 'mapbox://styles/aochristesen/cm75sbdga00i401quarbffk7t', // Your Mapbox Style URL
    center: [-100, 40], // [longitude, latitude]
    zoom: 4
});

map.on('load', function () {
    console.log("✅ Map has loaded successfully!");

    // Load Layer 1
    fetch('https://github.com/OrbitalBuzzsaw/ggr472_lab02/blob/main/mbta_stations.json?nocache=' + Date.now())
        .then(response => response.json())
        .then(data => {
            console.log("✅ Layer1 Loaded:", data);

            map.addSource('layer1', { type: 'geojson', data: data });

            map.addLayer({
                id: 'layer1',
                type: 'circle', // Correct type for point data
                source: 'layer1',
                paint: {
                    'circle-radius': 6,
                    'circle-color': '#ff0000',
                    'circle-opacity': 0.8
                }
            });

            console.log("✅ Layer1 (Points) added to the map!");
        })
        .catch(error => console.error('❌ Error loading Layer1.geojson:', error));

    // Load Layer 2 
    fetch('https://github.com/OrbitalBuzzsaw/ggr472_lab02/blob/main/mbta_lines.json?nocache=' + Date.now())
        .then(response => response.json())
        .then(data => {
            console.log("✅ Layer2 Loaded:", data);

            map.addSource('layer2', { type: 'geojson', data: data });

            map.addLayer({
                id: 'layer2',
                type: 'line', // Correct type for polyline data
                source: 'layer2',
                paint: {
                    'line-width': 3,
                    'line-color': '#0000ff'
                }
            });

            console.log("✅ Layer2 (Polylines) added to the map!");
        })
        .catch(error => console.error('❌ Error loading Layer2.geojson:', error));
});
