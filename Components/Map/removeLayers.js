import { map } from './map.js'

const removeLayers = () => {
 // map.removeLayer('road-pedestrian-case');
        // map.removeLayer('road-minor-low');
        // map.removeLayer('road-street-low');
        // map.removeLayer('road-minor-case');
        // map.removeLayer('road-secondary-tertiary-case');
        // map.removeLayer('road-primary-case');
        // map.removeLayer('road-major-link-case');
        // map.removeLayer('road-motorway-trunk-case');
        // map.removeLayer('road-construction');
        // map.removeLayer('road-path');
        // map.removeLayer('road-steps');
        // map.removeLayer('road-major-link');
        // map.removeLayer('road-pedestrian');
        // map.removeLayer('road-minor');
        // map.removeLayer('road-street');
        // map.removeLayer('road-secondary-tertiary');
        // map.removeLayer('road-primary');
        // map.removeLayer('road-motorway-trunk');
        // map.removeLayer('road-rail');
        // map.removeLayer('road-pedestrian-case');
        

        // map.removeLayer('national-park');

        // map.removeLayer('water');
        // map.removeLayer('background');
        // map.removeLayer('landuse');
        // map.removeLayer('land');

        // map.removeLayer('hillshade');
        // map.removeLayer('land-structure-polygon');
        // map.removeLayer('land-structure-line');

        // map.removeLayer('admin-1-boundary-bg');
        // map.removeLayer('admin-0-boundary-bg');
        // map.removeLayer('admin-1-boundary');
        // map.removeLayer('admin-0-boundary');

        // map.removeLayer('road-label');
        // map.removeLayer('waterway-label');
        // map.removeLayer('water-line-label');
        // map.removeLayer('water-point-label'); //Oceans

        map.removeLayer('natural-line-label');
        map.removeLayer('natural-point-label');

        // map.removeLayer('state-label'); //prefectures
        // map.removeLayer('settlement-label'); //cities

        // map.removeLayer('road');
        // map.removeLayer('ne-10m-admin-0-countries-7wgke4') //rest of the world
        // map.removeLayer('ne-10m-admin-0-countries-2bb1et') //japan?
};

export default removeLayers;



        /////////////****  DARK MODE ****//////////////
        // darkMode = document.getElementById('togglesvg');
        // darkMode.addEventListener('click', function(e) {
        //         darkMode.classList.toggle('rotate');
                
        //         if(layers[0].id === "background") {
        //             map.removeLayer('background');
        //             map.addLayer(
        //                 {
        //                     id: "background2",
        //                     type: "background",
        //                     paint: {
        //                         "background-color": "rgba(44,44,44,0.95)",
        //                         // "background-color": "#222629"
        //                         "background-opacity": 0,
        //                         "background-opacity-transition": {
        //                             "duration": 500,
        //                             // "delay": 0
        //                         }
        //                     }
        //                 },
        //                 // 'background'
        //                 'water'
        //             );
        //             setTimeout(function() {
        //                 map.setPaintProperty('background2', 'background-opacity', 1);
        //             }, 1);

        //             // darkMode.style.color = "rgba(0, 242, 250, 0.1)";
        //             layers[0].id = null
        //             // console.log(layers[0].id);

        //         } else if(e) {
        //             // map.removeLayer('background2');
        //             map.removeLayer(
        //                 {
        //                     id: "background2",
        //                     type: "background",
        //                     paint: {
        //                         "background-color": "rgba(44,44,44,0.95)",
        //                         // "background-color": "#222629"
        //                         "background-opacity": 1,
        //                         "background-opacity-transition": {
        //                             "duration": 500,
        //                             // "delay": 0
        //                         }
        //                     }
        //                 },
        //                 // 'background'
        //                 'water'

        //             );
        //             setTimeout(function() {
        //                 map.setPaintProperty('background2', 'background-opacity', 0);
        //             }, 1);
        //             map.addLayer(
        //                 {
        //                     id: "background",
        //                     type: "background",
        //                     paint: {
        //                         "background-color": "rgba(222,222,222,0.5)",
        //                     }
        //                 },
        //                 // 'background'
        //                 'water'

        //             );
        //             darkMode.style.color = ""

        //             // console.log(layers[0].id)
        //             layers[0].id = "background";

        //             // map.addLayer('background')
        //         }
        // });
        


        // map.addLayer(
        //     {
        //         id: "water",
        //         type: "fill",
        //         source: "composite",
        //         "source-layer": "water",
        //         paint: {
        //             // "fill-color": "#b0bec5",
        //             // "fill-color": "rgb(127, 255, 0)",
        //             // "fill-color": "rgb(97,97,97)",
        //             "fill-color": "rgb(22,22,22)",
        //         }
        //     },
        // //    'ne-10m-admin-0-countries-7wgke4' //new layer will be placed below the layer in the second argument
        // );