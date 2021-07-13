import { map } from './map.js';


export default class NewCases {

    constructor(source, paint) {
        this._source = source;
        this._paint = paint
    }

    drawNewCases() {
        // PREFECTURE FILL FOR NEW CASES
        map.addLayer(
            {
            id: 'prefecture-layer',
            type: 'fill',
            // source: 'prefectures',
            source: this._source,
            layout: {},
            paint: {
                // 'fill-color': this._paint,
                // 'fill-color': [
                //     'interpolate',
                //     ['linear'],
                //     ['zoom'],
                //     5,
                //     this._paint,
                //     6,
                //     'rgba(25, 25, 25, 0.0)',
                //     // 'rgba(255, 94, 0, 0.1)',

                
                // ],
                'fill-outline-color': 'rgb(33,33,33)',
                'fill-opacity': 0.1,
                // 'fill-opacity': [
                //   'case',
                //   ['boolean', ['feature-state', 'hover'], false],
                //   0,
                //   0
                //   ]
            },
            },
        );
    };
};

