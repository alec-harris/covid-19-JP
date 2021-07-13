import { map } from './map.js';


export default class drawLineLayer {
    
    constructor(endPointLng, endPointLat) {

        //MAP POINT
        this._endPointLng = endPointLng;
        this._endPointLat = endPointLat;

        // this._x = x;
        
    };

    drawTheInitial = () => {
        
        let x = 3;
        let interval = 1000;

        for (let i = 0; i < x; i++) {

            setTimeout(() => {

                let coordinate = new mapboxgl.LngLat(this._endPointLng, this._endPointLat);
                
                const point = map.project(coordinate);


                const canvas = document.getElementById('lineRegion2');
                const ctx = canvas.getContext('2d');

                function draw() {
                    

                    canvas.setAttribute('width', window.innerWidth);
                    canvas.setAttribute('height', window.innerHeight);

                    // set line stroke and line width
                    ctx.strokeStyle = 'rgb(255,255,255)';
                    ctx.fillStyle = 'rgb(255,255,255)';
                    ctx.lineWidth = 0.2;
                    
                    // Stroked triangle
                    ctx.beginPath();

                    ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
                    ctx.fill();

                    ctx.moveTo(point.x, point.y);
                    ctx.lineTo(window.innerWidth - 300, window.innerHeight - 240); //middle
                    ctx.lineTo(window.innerWidth - 275, window.innerHeight - 240); //end
                    // ctx.closePath();
                    ctx.stroke();
                };

                draw();
            }, i * interval);
        };
    };


    drawTheLine = () => {
        
        window.addEventListener('mousemove', this._move = () => {
        
            this._timeOut = setTimeout(() => {
    
                let coordinate = new mapboxgl.LngLat(this._endPointLng, this._endPointLat);
                const point = map.project(coordinate);

                const canvas = document.getElementById('lineRegion2');
                const ctx = canvas.getContext('2d');

                canvas.setAttribute('width', window.innerWidth);
                canvas.setAttribute('height', window.innerHeight);

                // set line stroke and line width
                ctx.strokeStyle = 'rgb(255,255,255)';
                ctx.fillStyle = 'rgb(255,255,255)';
                ctx.lineWidth = 0.2;
                
                // Stroked triangle
                ctx.beginPath();

                ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
                ctx.fill();

                ctx.moveTo(point.x, point.y);
                ctx.lineTo(window.innerWidth - 300, window.innerHeight - 240); //middle
                ctx.lineTo(window.innerWidth - 275, window.innerHeight - 240); //end
                // ctx.closePath();
                ctx.stroke();
                
            }, 300);

        }); // addEventListener

    };
    
    stopTheLine = () => {
       
        window.removeEventListener('mousemove', this._move);

        // const canvas = document.getElementById('lineRegion2');
        // const ctx = canvas.getContext('2d');
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        
    };

    stopTheLineFit = () => {
       
        window.removeEventListener('mousemove', this._move);

        setTimeout(() => {
            const canvas = document.getElementById('lineRegion2');
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, 500);

    };

};









// drawTheLine = () => {
        
//     window.addEventListener('mousemove', this._move = () => {
    
//         this._timeOut = setTimeout(() => {

//             let coordinate = new mapboxgl.LngLat(this._endPointLng, this._endPointLat);
//             const point = map.project(coordinate);
            
//             // const draw = () => {
//                 const canvas = document.getElementById('lineRegion2');
//                 if (canvas.getContext) {
//                     const ctx = canvas.getContext('2d');

//                     canvas.setAttribute('width', window.innerWidth);
//                     canvas.setAttribute('height', window.innerHeight);

//                     // set line stroke and line width
//                     ctx.strokeStyle = 'rgb(255,255,255)';
//                     ctx.fillStyle = 'rgb(255,255,255)';
//                     ctx.lineWidth = 0.1;
                    
//                     // Stroked triangle
//                     ctx.beginPath();

//                     ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
//                     ctx.fill();

//                     ctx.moveTo(point.x, point.y);
//                     ctx.lineTo(window.innerWidth - 350, window.innerHeight - 240); //middle
//                     ctx.lineTo(window.innerWidth - 275, window.innerHeight - 240); //end
//                     // ctx.closePath();
//                     ctx.stroke();
//                 }
//             // };
//             // draw();

//         }, 300);

//     }); // addEventListener

// };
