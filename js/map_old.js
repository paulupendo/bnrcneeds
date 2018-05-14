mapboxgl.accessToken = 'pk.eyJ1IjoiaG9vaG90IiwiYSI6ImNqMXkxZzI4NDAwYjMycXFsOTBnZzFva3IifQ.XeP07p882sG8JYywDFa-xg';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-73.247039, 42.450025], // starting position [lng, lat]
    zoom: 9 // starting zoom
});


map.on('load', function () {
    //BNRC PUBLIC TRAILS
    map.addSource('bnrc-public-access', {
        type: 'vector',
        url: 'mapbox://hoohot.che6dk52'
    });
    map.addLayer({
        'id': 'bnrc-public-access',
        'type': 'line',
        'source': 'bnrc-public-access',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#0067c5',
            'line-width': 2
        },
        'source-layer': 'bnrc_public_access-2balno'
    });


    //BNRC MAINTAINED TRAILS
    map.addSource('bnrc-maintained', {
        type: 'vector',
        url: 'mapbox://hoohot.3kuoejac'
    });
    map.addLayer({
        'id': 'bnrc-maintained',
        'type': 'line',
        'source': 'bnrc-maintained',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#FFA500',
            'line-width': 2
        },
        'source-layer': 'BNRC_Maintained_Trails-5u6jfy'
    });
    //MAHANNA TRAILS
    map.addSource('mahanna-trails', {
        type: 'vector',
        url: 'mapbox://hoohot.92iu8w7i'
    });
    map.addLayer({
        'id': 'mahanna-trails',
        'type': 'line',
        'source': 'mahanna-trails',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#FF0000',
            'line-width': 2
        },
        'source-layer': 'mahanna_trails_2017-31zb8o'
    });

    //YOKUN RIDGE NORTH
    map.addSource('yokun-north', {
        type: 'vector',
        url: 'mapbox://hoohot.d6bd7i60'
    });
    map.addLayer({
        'id': 'yokun-north',
        'type': 'line',
        'source': 'yokun-north',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#FF0000',
            'line-width': 2
        },
        'source-layer': 'YR_North_Trail_2017-126us9'
    });

    //YOKUN RIDGE SOUTH
    map.addSource('yokun-south', {
        type: 'vector',
        url: 'mapbox://hoohot.di5xahza'
    });
    map.addLayer({
        'id': 'yokun-south',
        'type': 'line',
        'source': 'yokun-south',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#FF0000',
            'line-width': 2
        },
        'source-layer': 'YR_South_Trail_2017-4ajhmj'
    });

    //YOKUN RIDGE TOTAL
    map.addSource('yokun-ridge', {
        type: 'vector',
        url: 'mapbox://hoohot.dhcww08s'
    });
    map.addLayer({
        'id': 'yokun-ridge',
        'type': 'line',
        'source': 'yokun-ridge',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#FF0000',
            'line-width': 2
        },
        'source-layer': 'Yokun_Ridge_2017-0y8qre'
    });


    //OLD MILL
    map.addSource('old-mill', {
        type: 'vector',
        url: 'mapbox://hoohot.98hetd6h'
    });
    map.addLayer({
        'id': 'old-mill',
        'type': 'line',
        'source': 'old-mill',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#FF0000',
            'line-width': 2
        },
        'source-layer': 'Old_Mill_2017-9to5oo'
    });

    //OLIVIAS GROUP
    map.addSource('olivias-group', {
        type: 'vector',
        url: 'mapbox://hoohot.4k3sxajv'
    });
    map.addLayer({
        'id': 'olivias-group',
        'type': 'line',
        'source': 'olivias-group',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#FF0000',
            'line-width': 2
        },
        'source-layer': 'Olivias_Group_2017-4zk88q'
    });

    //BURBANK TRAIL
    map.addSource('burbank-trail', {
        type: 'vector',
        url: 'mapbox://hoohot.7kg6b0ml'
    });
    map.addLayer({
        'id': 'burbank-trail',
        'type': 'line',
        'source': 'burbank-trail',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#FF0000',
            'line-width': 2
        },
        'source-layer': 'Burbank_Trail_2017-7qb6bq'
    });

    //STEEPLETOP TRAIL
    map.addSource('steepletop-trail', {
        type: 'vector',
        url: 'mapbox://hoohot.3nqad7tl'
    });
    map.addLayer({
        'id': 'steepletop-trail',
        'type': 'line',
        'source': 'steepletop-trail',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#FF0000',
            'line-width': 2
        },
        'source-layer': 'Steepletop-trail-0iqvfj'
    });

    //CLAM RIVER TRAILS
    map.addSource('clam-river', {
        type: 'vector',
        url: 'mapbox://hoohot.1jqjxm6n'
    });
    map.addLayer({
        'id': 'clam-river',
        'type': 'line',
        'source': 'clam-river',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#FF0000',
            'line-width': 2
        },
        'source-layer': 'Clam-River-Trails-7qn1q3'
    });

    //HOUSATONIC FLATS
    map.addSource('housatonic-flats', {
        type: 'vector',
        url: 'mapbox://hoohot.9w9a0b4d'
    });
    map.addLayer({
        'id': 'housatonic-flats',
        'type': 'line',
        'source': 'housatonic-flats',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#FF0000',
            'line-width': 2
        },
        'source-layer': 'Housatonic_Flats_2017-dzmj17'
    });

    //HOOSAC RANGE
    map.addSource('hoosac-range', {
        type: 'vector',
        url: 'mapbox://hoohot.5up2zhxx'
    });
    map.addLayer({
        'id': 'hoosac-range',
        'type': 'line',
        'source': 'hoosac-range',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#FF0000',
            'line-width': 2
        },
        'source-layer': 'Hoosac_Range_2017-6qfm27'
    });

    //CONSITUTION HILL
    map.addSource('constitution-hill', {
        type: 'vector',
        url: 'mapbox://hoohot.3hzpxfs8'
    });
    map.addLayer({
        'id': 'constitution-hill',
        'type': 'line',
        'source': 'constitution-hill',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#FF0000',
            'line-width': 2
        },
        'source-layer': 'Constitution_Hill_2017-demp7o'
    });

    //BOBS WAY
    map.addSource('bobs-way', {
        type: 'vector',
        url: 'mapbox://hoohot.cmbu68f1'
    });
    map.addLayer({
        'id': 'bobs-way',
        'type': 'line',
        'source': 'bobs-way',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#FF0000',
            'line-width': 2
        },
        'source-layer': 'Bobs_Way_2017-57mct9'
    });

    //HOLLOW FIELDS
    map.addSource('hollow-fields', {
        type: 'vector',
        url: 'mapbox://hoohot.446z5y9f'
    });
    map.addLayer({
        'id': 'hollow-fields',
        'type': 'line',
        'source': 'hollow-fields',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#FF0000',
            'line-width': 2
        },
        'source-layer': 'Hollow_Fields_2017-6v3u6n'
    });

    //BASIN POND
    map.addSource('basin-pond', {
        type: 'vector',
        url: 'mapbox://hoohot.3ouhx1cw'
    });
    map.addLayer({
        'id': 'basin-pond',
        'type': 'line',
        'source': 'basin-pond',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#FF0000',
            'line-width': 2
        },
        'source-layer': 'Basin_Pond_2017-70eoz1'
    });

    //ALFORD SPRINGS
    map.addSource('alford-springs', {
        type: 'vector',
        url: 'mapbox://hoohot.4kk53696'
    });
    map.addLayer({
        'id': 'alford-springs',
        'type': 'line',
        'source': 'alford-springs',
        'layout': {
            'visibility': 'visible',
            'line-join': 'bevel',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#FF0000',
            'line-width': 2
        },
        'source-layer': 'Alford_Springs_2017-8qxm3c'
    });

});


map.on('mousemove', function (e) {

    // clear div 
    document.getElementById("mileage-value").innerHTML = "";
    document.getElementById("name-value").innerHTML = "";
    document.getElementById("reserve-value").innerHTML = "";


    // Returns an array of GeoJSON Feature objects under cursor.
    var features = map.queryRenderedFeatures(e.point);
    
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

    }
});

// indicate that the symbols are clickable
// by changing the cursor style to 'pointer'.
// map.on('mousemove', function (e) {

//     var features = map.queryRenderedFeatures(e.point);

// });


map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point);
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
});