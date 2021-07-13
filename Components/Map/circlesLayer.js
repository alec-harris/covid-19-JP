import { map } from './map.js';

import { mq } from '../constants.js';


export default class CircleLayers {

    constructor(source) {
        this._source = source;
    }

    drawCircles() {

        if (mq.matches) {
            /* Creates larger circles when clustered (point_count) > 0 */
            map.addLayer({
                id: 'clusters',
                type: 'circle',
                // source: 'cities,
                source: this._source,
                filter: ['has', 'point_count'],
                paint: {
                    'circle-color': [
                        'step',
                        ['get', 'yes'],
                        'rgba(255,210,0,0.2)',
                        500, //20px when num < 500
                        'rgba(255,180,0,0.2)',
                        1000, //30px when num < 1000
                        'rgba(255,150,0,0.2)',
                        5000, //
                        'rgba(255,120,0,0.2)',
                        10000, //
                        'rgba(255,90,0,0.2)',
                        15000, //
                        'rgba(255,60,0,0.2)',
                        20000, //
                        'rgba(255,30,0,0.2)',
                        35000, //
                        'rgba(255,0,0,0.2)',
                    ],
                    'circle-stroke-width': 1,
                    // 'circle-stroke-color': 'rgba(255,255,255,0.5)',
                    'circle-stroke-color': [
                        'step',
                        ['get', 'yes'],
                        'rgba(255,210,0,0.9)',
                        500, //20px when num < 500
                        'rgba(255,180,0,0.9)',
                        1000, //30px when num < 1000
                        'rgba(255,150,0,0.9)',
                        5000, //
                        'rgba(255,120,0,0.9)',
                        10000, //
                        'rgba(255,90,0,0.9)',
                        15000, //
                        'rgba(255,60,0,0.9)',
                        20000, //
                        'rgba(255,30,0,0.9)',
                        35000, //
                        'rgba(255,0,0,0.9)',
                    ],
                    // 'circle-radius': 60,
                    'circle-radius': [
                        'step',
                        ['get', 'yes'],
                        15,
                        500, //15px when num < 500
                        20,
                        1000, //20px when num < 1000
                        20,
                        5000, //
                        25,
                        10000, //
                        30,
                        15000, //
                        40,
                        20000, //
                        50,
                        35000, //
                        70,
                    ]
                }
            });

            /* Creates text for circles when clustered (point_count) > 0 */
            map.addLayer({
                id: 'clusters-text',
                type: 'symbol',
                source: this._source,
                filter: ['has', 'point_count'],
                layout: {
                    'text-field': ['get', 'yes'],
                    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                    // 'text-size': 12
                    'text-size': [
                        'step',
                        ['get', 'yes'],
                        12,
                        5000,
                        14,
                        15000, //
                        16,
                        20000, //
                        18,
                        25000, //
                        18,
                    ],
                },
                paint: {
                    // 'text-color': '#fff'
                    'text-color': [
                        'step',
                        ['get', 'yes'],
                        'rgba(255,210,0,0.9)',
                        500, //20px when num < 500
                        'rgba(255,180,0,0.9)',
                        1000, //30px when num < 1000
                        'rgba(255,150,0,0.9)',
                        5000, //
                        'rgba(255,120,0,0.9)',
                        10000, //
                        'rgba(255,90,0,0.9)',
                        15000, //
                        'rgba(255,60,0,0.9)',
                        20000, //
                        'rgba(255,30,0,0.9)',
                        35000, //
                        'rgba(255,0,0,0.9)',
                    ],
                }
            });
        /* Renders individual circles for cities (unclustered points) */
        map.addLayer({
            id: 'unclustered-point',
            type: 'circle',
            source: this._source,
            filter: ['!', ['has', 'point_count']],
            paint: {
                // 'circle-color': 'rgba(0, 255, 255, 0.3)',
                // 'circle-color': [
                //     'match',
                //     ['get', 'title'],
                //     'Tokyo',
                //     'rgba(0, 255, 255, 0.3)',
                //     'Osaka',
                //     'rgba(255, 0, 0, 0.3)',
                //     '#ccc'
                // ],
                'circle-color': [
                    'step',
                    ['get', 'num'],
                    'rgba(255,210,0,0.2)',
                    500, //20px when num < 500
                    'rgba(255,180,0,0.2)',
                    1000, //30px when num < 1000
                    'rgba(255,150,0,0.2)',
                    5000, //
                    'rgba(255,120,0,0.2)',
                    10000, //
                    'rgba(255,90,0,0.2)',
                    15000, //
                    'rgba(255,60,0,0.2)',
                    20000, //
                    'rgba(255,30,0,0.2)',
                    35000, //
                    'rgba(255,0,0,0.2)',
                ],
                'circle-radius': [
                    'step',
                    ['get', 'num'],
                    // 15,
                    // 25,
                    15,
                    500, //15px when num < 500
                    20,
                    1000, //20px when num < 1000
                    20,
                    5000, //
                    25,
                    10000, //
                    30,
                    15000, //
                    40,
                    20000, //
                    50,
                    35000, //
                    70,
                ],
                'circle-stroke-width': 1,
                'circle-stroke-color': [
                    'step',
                    ['get', 'num'],
                    'rgba(255,210,0,0.9)',
                    500, //20px when num < 500
                    'rgba(255,180,0,0.9)',
                    1000, //30px when num < 1000
                    'rgba(255,150,0,0.9)',
                    5000, //
                    'rgba(255,120,0,0.9)',
                    10000, //
                    'rgba(255,90,0,0.9)',
                    15000, //
                    'rgba(255,60,0,0.9)',
                    20000, //
                    'rgba(255,30,0,0.9)',
                    35000, //
                    'rgba(255,0,0,0.9)',
                ],
            }
        });

        /* Renders text for individual circles (unclustered points) */
        map.addLayer({
            id: 'unclustered-label-numbers',
            type: 'symbol',
            source: this._source,
            filter: ['!', ['has', 'point_count']],
            layout: {
                // 'text-field': ['get', 'title'], //name of prefecture
                'text-field': ['get', 'num'],
                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                // 'text-size': 12
                'text-size': [
                    'step',
                    ['get', 'num'],
                    12,
                    5000,
                    14,
                    15000, //
                    16,
                    20000, //
                    18,
                    25000, //
                    18,
                ],
            },
            'paint': {
                // 'text-color': '#FFF'
                'text-color': [
                    'step',
                    ['get', 'num'],
                    'rgb(255,210,0)',
                    500, //20px when num < 500
                    'rgb(255,180,0)',
                    1000, //30px when num < 1000
                    'rgb(255,150,0)',
                    5000, //
                    'rgb(255,120,0)',
                    10000, //
                    'rgb(255,90,0)',
                    15000, //
                    'rgb(255,60,0)',
                    20000, //
                    'rgb(255,30,0)',
                    35000, //
                    'rgb(255,0,0)',
                ],
            }
            
        });
        } else {
            
            /* Creates larger circles when clustered (point_count) > 0 */
            map.addLayer({
                id: 'clusters',
                type: 'circle',
                // source: 'cities,
                source: this._source,
                filter: ['has', 'point_count'],
                paint: {
                    'circle-color': [
                        'step',
                        ['get', 'yes'],
                        'rgba(255,210,0,0.2)',
                        500, //20px when num < 500
                        'rgba(255,180,0,0.2)',
                        1000, //30px when num < 1000
                        'rgba(255,150,0,0.2)',
                        5000, //
                        'rgba(255,120,0,0.2)',
                        10000, //
                        'rgba(255,90,0,0.2)',
                        15000, //
                        'rgba(255,60,0,0.2)',
                        20000, //
                        'rgba(255,30,0,0.2)',
                        35000, //
                        'rgba(255,0,0,0.2)',
                    ],
                    'circle-stroke-width': 1,
                    // 'circle-stroke-color': 'rgba(255,255,255,0.5)',
                    'circle-stroke-color': [
                        'step',
                        ['get', 'yes'],
                        'rgba(255,210,0,0.9)',
                        500, //20px when num < 500
                        'rgba(255,180,0,0.9)',
                        1000, //30px when num < 1000
                        'rgba(255,150,0,0.9)',
                        5000, //
                        'rgba(255,120,0,0.9)',
                        10000, //
                        'rgba(255,90,0,0.9)',
                        15000, //
                        'rgba(255,60,0,0.9)',
                        20000, //
                        'rgba(255,30,0,0.9)',
                        35000, //
                        'rgba(255,0,0,0.9)',
                    ],
                    // 'circle-radius': 60,
                    'circle-radius': [
                        'step',
                        ['get', 'yes'],
                        // 10,
                        // 500, //20px when num < 500
                        // 20,
                        // 1000, //30px when num < 1000
                        // 30,
                        // 5000, //
                        // 50,
                        // 10000, //
                        // 60,
                        // 15000, //
                        // 70,
                        // 20000, //
                        // 90,
                        // 35000, //
                        // 100,
                        15,
                        500, //20px when num < 500
                        20,
                        1000, //30px when num < 1000
                        20,
                        5000, //
                        30,
                        10000, //
                        40,
                        15000, //
                        50,
                        20000, //
                        60,
                        35000, //
                        70,
                    ]
                }
            });

            /* Creates text for circles when clustered (point_count) > 0 */
            map.addLayer({
                id: 'clusters-text',
                type: 'symbol',
                source: this._source,
                filter: ['has', 'point_count'],
                layout: {
                    'text-field': ['get', 'yes'],
                    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                    // 'text-size': 18
                    'text-size': [
                        'step',
                        ['get', 'yes'],
                        12,
                        5000,
                        14,
                        15000, //
                        16,
                        20000, //
                        18,
                        25000, //
                        18,
                    ],
                },
                paint: {
                    // 'text-color': '#fff'
                    'text-color': [
                        'step',
                        ['get', 'yes'],
                        'rgba(255,210,0,0.9)',
                        500, //20px when num < 500
                        'rgba(255,180,0,0.9)',
                        1000, //30px when num < 1000
                        'rgba(255,150,0,0.9)',
                        5000, //
                        'rgba(255,120,0,0.9)',
                        10000, //
                        'rgba(255,90,0,0.9)',
                        15000, //
                        'rgba(255,60,0,0.9)',
                        20000, //
                        'rgba(255,30,0,0.9)',
                        35000, //
                        'rgba(255,0,0,0.9)',
                        
                    ],
                }
            });
        };

        /* Renders individual circles for cities (unclustered points) */
        map.addLayer({
            id: 'unclustered-point',
            type: 'circle',
            source: this._source,
            filter: ['!', ['has', 'point_count']],
            paint: {
                // 'circle-color': 'rgba(0, 255, 255, 0.3)',
                // 'circle-color': [
                //     'match',
                //     ['get', 'title'],
                //     'Tokyo',
                //     'rgba(0, 255, 255, 0.3)',
                //     'Osaka',
                //     'rgba(255, 0, 0, 0.3)',
                //     '#ccc'
                // ],
                'circle-color': [
                    'step',
                    ['get', 'num'],
                    'rgba(255,210,0,0.2)',
                    500, //20px when num < 500
                    'rgba(255,180,0,0.2)',
                    1000, //30px when num < 1000
                    'rgba(255,150,0,0.2)',
                    5000, //
                    'rgba(255,120,0,0.2)',
                    10000, //
                    'rgba(255,90,0,0.2)',
                    15000, //
                    'rgba(255,60,0,0.2)',
                    20000, //
                    'rgba(255,30,0,0.2)',
                    35000, //
                    'rgba(255,0,0,0.2)',
                ],
                'circle-radius': [
                    'step',
                    ['get', 'num'],
                    // 15,
                    // 25,
                    15,
                    500, //15px when num < 500
                    20,
                    1000, //20px when num < 1000
                    20,
                    5000, //
                    30,
                    10000, //
                    40,
                    15000, //
                    50,
                    20000, //
                    60,
                    35000, //
                    70,
                ],
                'circle-stroke-width': 1,
                'circle-stroke-color': [
                    'step',
                    ['get', 'num'],
                    'rgba(255,210,0,0.9)',
                    500, //20px when num < 500
                    'rgba(255,180,0,0.9)',
                    1000, //30px when num < 1000
                    'rgba(255,150,0,0.9)',
                    5000, //
                    'rgba(255,120,0,0.9)',
                    10000, //
                    'rgba(255,90,0,0.9)',
                    15000, //
                    'rgba(255,60,0,0.9)',
                    20000, //
                    'rgba(255,30,0,0.9)',
                    35000, //
                    'rgba(255,0,0,0.9)',
                ],
            }
        });

        /* Renders text for individual circles (unclustered points) */
        map.addLayer({
            id: 'unclustered-label-numbers',
            type: 'symbol',
            source: this._source,
            filter: ['!', ['has', 'point_count']],
            layout: {
                // 'text-field': ['get', 'title'], //name of prefecture
                'text-field': ['get', 'num'],
                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                // 'text-size': 12
                'text-size': [
                    'step',
                    ['get', 'num'],
                    12,
                    5000,
                    14,
                    15000, //
                    16,
                    20000, //
                    18,
                    25000, //
                    18,
                ],
            },
            'paint': {
                // 'text-color': '#FFF'
                'text-color': [
                    'step',
                    ['get', 'num'],
                    'rgb(255,210,0)',
                    500, //20px when num < 500
                    'rgb(255,180,0)',
                    1000, //30px when num < 1000
                    'rgb(255,150,0)',
                    5000, //
                    'rgb(255,120,0)',
                    10000, //
                    'rgb(255,90,0)',
                    15000, //
                    'rgb(255,60,0)',
                    20000, //
                    'rgb(255,30,0)',
                    35000, //
                    'rgb(255,0,0)',
                ],
            }
            
        });

        

    };

};


     