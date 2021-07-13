mapboxgl.accessToken = 'pk.eyJ1Ijoic3VwZXIyY2Fub3MiLCJhIjoiY2s4ZmU1dnZzMDNlczNlcXRzajJ4Z3ZuZyJ9.xMHlnOr8cLriegM5ZyghiQ';

export const map = new mapboxgl.Map({
    container: 'map',
    // zoom: 9,
    zoom: 4.5,
    // maxZoom: 5.9,
    minZoom: 3,
    center: [138, 39],
    // style: 'mapbox://styles/mapbox/satellite-v9',
    style: 'mapbox://styles/mapbox/dark-v10',
    // style: 'mapbox://styles/super2canos/ckc8g9zor2dfc1iqjcgzmyf7z', 
    bearingSnap: 90,
    // pitch: 65, // sets pitch on refresh/open
    pitchWithRotate: true, //false prevents map tilt
    bounds: ([
        [120, 30], // bottom/left
        [145, 45]  // top/right
    ])
});