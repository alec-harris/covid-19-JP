import { map } from './map.js';


export default class prefectLayers {

    constructor(source) {
        this._source = source;
    }

    drawPrefects() {
        const layers = map.getStyle().layers;
        // console.log(layers);
        let firstSymbolId;
        for (let i = 0; i < layers.length; i++) {
            if (layers[i].type === 'symbol') {
                firstSymbolId = layers[i].id;
                break;
            }
        };
        // HIGHLIGHT PREFECTURE OUTLINE (on hover and on accordion click)
        map.addLayer(
            {
            id: "prefecture-outline-layer",
            type: "line",
            // source: "prefectures",
            source: this._source,
            layout: {},
            paint: {
                // "line-width": 1.5,
                "line-width": [
                    "interpolate",
                    ["exponential", 2],
                    ["zoom"],
                    // 3,
                    // .5,
                    // 7.5,
                    // 1
                    4, 
                    0.5,
                    7,
                    0.5,//thicker line on inspect
                ],
                // "line-dasharray": [2, 1],
                // "line-color": "rgb(178, 34, 34)",
                "line-color": "rgb(0,250,0)",
                // "line-color": [
                //     "interpolate",
                //     ["linear"],
                //     ["zoom"],
                //     4,
                //     "rgb(250,250,250)",
                //     5.9,
                //     // "rgba(255,0,0,0.9)",
                //     "rgb(250,250,250)",
                // ],
                'line-opacity': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                1,
                0.1
                ]
            },
            },firstSymbolId
            
        );

        // prefecture outline on static map (and prefecture highlight color on map click)
        map.addLayer(
            {
            id: "prefecture-outline-layer2",
            type: "line",
            source: this._source,
            layout: {},
            paint: {
                "line-width": 2,
                // "line-width": [
                //     "interpolate",
                //     ["exponential", 2],
                //     ["zoom"],
                //     // 3,
                //     // .5,
                //     // 7.5,
                //     // 1
                //     4, 
                //     0.5,
                //     5.9,
                //     0.5,//thicker line on inspect
                // ],
                // "line-dasharray": [2, 1],
                // "line-color": "rgb(178, 34, 34)",
                "line-color": "rgb(50,50,250)",
                // "line-color": [
                //     "interpolate",
                //     ["linear"],
                //     ["zoom"],
                //     4,
                //     "rgb(250,250,250)",
                //     5.9,
                //     "rgb(178,34,34)",
                //     // "rgb(250,250,250)",

                    
                // ],
                'line-opacity': [
                'case',
                ['boolean', ['feature-state', 'click'], false],
                1,
                0.1
                ]
            },
            },firstSymbolId
        );
    }
};
