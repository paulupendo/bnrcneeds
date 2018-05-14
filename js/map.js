mapboxgl.accessToken = 'pk.eyJ1IjoiaG9vaG90IiwiYSI6ImNqMXkxZzI4NDAwYjMycXFsOTBnZzFva3IifQ.XeP07p882sG8JYywDFa-xg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-73.295614, 42.410841], // starting position [lng, lat]
    zoom: 13 // starting zoom
});


map.on('load', function () {

    // public access
    map.addSource('public-access', {
        type: 'vector',
        url: 'mapbox://hoohot.a6wzz7y0'
    });

    map.addLayer({
        "id": "public-access",
        "type": "fill",
        'source': 'public-access',
        "layout": {},
        "paint": {
            "fill-color": "#efa23e",
            "fill-opacity": 0.6
        },
        'source-layer': 'BNRC_Public_Access-3e5poj',

    });


    //Trails Merged
    map.addSource('trails-merged', {
        type: 'vector',
        url: 'mapbox://hoohot.6iqcern0'
    });
    map.addLayer({
        'id': 'trails-merged',
        'type': 'line',
        'source': 'trails-merged',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#FF0000',
            'line-width': 2
        },
        'source-layer': 'trails-9thbxw'
    });

});



map.on('mousemove', function (e) {

    // if (map.getLayer("public-access")) {
    //     map.removeLayer("public-access");
    // }

    // trails div
    document.getElementById("mileage-value").innerHTML = "";
    document.getElementById("name-value").innerHTML = "";
    document.getElementById("reserve-value").innerHTML = "";

    // public access reporting
    document.getElementById("property-value").innerHTML = "";
    document.getElementById("acres-value").innerHTML = "";



    // Returns an array of GeoJSON Feature objects under cursor.
    var features = map.queryRenderedFeatures(e.point);

    // if the features have no info, return nothing
    if (!features.length) {
        return;
    }

    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    //get first item in feature collection
    var feature = features[0];


    var properties = feature.properties;

    for (var prop in properties) {
        if (prop == 'Mileage') {

            //restrict  mileage to 3 decimal places
            var featureMileageFixed = properties[prop].toFixed(3);

            //append value to relevant id 
            document.getElementById("mileage-value").innerHTML = document.getElementById("mileage-value").innerHTML + "<tr><td>" + featureMileageFixed + "</td></tr>";
        }
        if (prop == 'Name') {
            document.getElementById("name-value").innerHTML = document.getElementById("name-value").innerHTML + "<tr><td>" + properties[prop] + "</td></tr>";
        }
        if (prop == 'Reserve') {
            document.getElementById("reserve-value").innerHTML = document.getElementById("reserve-value").innerHTML + "<tr><td>" + properties[prop] + "</td></tr>";
        }
        if (prop == 'Property') {
            document.getElementById("property-value").innerHTML = document.getElementById("property-value").innerHTML + "<tr><td>" + properties[prop] + "</td></tr>";
        }
        if (prop == 'Acres') {
            document.getElementById("acres-value").innerHTML = document.getElementById("acres-value").innerHTML + "<tr><td valign='middle'>" + properties[prop] + "</td></tr>";
        }

    }

});

// indicate that the symbols are clickable
// // by changing the cursor style to 'pointer'.

map.on('mousemove', function (e) {

    var features = map.queryRenderedFeatures(e.point, {
        layers: ['public-access', 'trails-merged']

    });

    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
    
     // if the features have no info, return nothing
     if (!features.length) {
        return;
    }

});