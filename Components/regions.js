import { map } from './Map/map.js';
import { mq } from './constants.js';

import LineGraph from './Graph.js';


export default class MapRegions {
    
    constructor(regionName, regionTitle, coords, coords1, filter, symbolID) {

        const regionN = document.getElementById(regionName);
        
        this._regName = regionName;
        this._regN = regionN;
        this._regT = regionTitle;
        this._coord = coords;
        this._coord1 = coords1;
        this._filter = filter;
        this._symbolID = symbolID;
    }



    draw() {

        map.addSource(this._regName, {
            type: 'geojson',
            data: this._filter, 
            'generateId': true,
            // "promoteId": {"original": "features[0].properties.NAME_1"}

        });


        map.addLayer(
            {
                id: `${this._regName}-fill-layer`,
                type: "fill",
                source: this._regName,
                layout: {
                    'visibility': 'none',
                },
                paint: {
                    // "fill-color": "rgba(3,169,244,0.0)",
                    "fill-color": "rgba(255,255,255,0.1)",
                    "fill-outline-color": "rgba(255,255,255,0.9)",
                   
                },
            },
            this._symbolID
        );

        map.addLayer(
            {
                id: `${this._regName}-layer`,
                type: "line",
                source: this._regName,
                layout: {
                    'visibility': 'none',
                    "line-join": "round",
                },
                paint: {
                    // "line-color": "rgba(3,169,244,0.1)",
                    "line-color": "rgba(255,255,244,0.9)",
                    "line-width": 2,
                    // "fill-color": "rgba(0,0,0,0.7)",
                },
            },
            this._symbolID
        );

        const resetBorder = document.querySelector('.reset');
        const resetBorder2 = document.querySelector('.reset svg');

        // map.on('zoomend', function() {
        //     resetBorder.classList.add('resetB');
        //     resetBorder2.classList.add('resetBB');
        //     // console.log('A zoomend event occurred.');
        // });
        // let x = 0;

        this._regN.addEventListener('click', () => {

           
        
            document.getElementById("arrow-left").innerHTML = "";
            document.getElementById("arrow-left").innerHTML = `

                    <div id="RTitle">${this._regT[0].name}:  
                        <div id="AActive"> Active: ${this._regT[0].active}</div> 
                        <div id="NNew"> New: ${this._regT[0].newlyConfirmed}</div>
                    </div>

                <div class="statsR stats-dayR graph-wrapR">
                    <div class="bar-innerR">
                        <canvas width="550" height="250" class="graph" id="graph_active_dailyR" ></canvas>
                        <div id="chartjs-tooltipA">
                            <table id="num"></table>
                        </div>    
                    </div>
                </div> 
            `;
            
    
            const lineChartC = new LineGraph(this._regT);
            lineChartC.plot();

            if(mq.matches) {
                $( ".regModal" ).fadeIn(1000);
                setTimeout(() => {
                    $( "#RTitle" ).css({
                        "transition": "all 1s ease",
                        "opacity": "1"
                    });
                   
                }, 500);
                setTimeout(() => {
                    $( "#AActive" ).css({
                        "transition": "all 1s ease-in-out",
                        "opacity": "1",
                        "transform": "translate(50px, 0px)"
                    });
                    $( "#NNew" ).css({
                        "transition": "all 1s ease-in-out",
                        "opacity": "1",
                        "transform": "translate(85px, 0px)"
                    });
                }, 1000);
            } else {

                $( ".regModal" ).fadeIn(1000);
                
                setTimeout(() => {

                    //styles.css 1991
                    // $( "#RTitle" ).css("opacity", "1");
                    $( "#graph_active_dailyR" ).css("opacity", "1");

                }, 100);
                setTimeout(() => {

                    //styles.css 1991
                    $( "#RTitle" ).css("opacity", "1");
                    // $( "#graph_active_dailyR" ).css("opacity", "1");

                }, 500);
            
            };
            
            

            // const regions = document.querySelector('#regions');
            // regions.style.display = 'none'


            // const regN = document.getElementById(this._regN.id);
            // const regN = document.querySelectorAll('.regN');

            //add color to map reset when regions are clicked
            
            
            resetBorder.classList.add('resetB');
            resetBorder2.classList.add('resetBB');
            // regN.style.color = '#FFF';
            // console.log(regN);
            // if(mq.matches) {
            //     regN.forEach((elem, a) => {
            //         // a.style.color = 'rgba(255,255,255,0.6)';
            //         regN[a].addEventListener('touchend', () => {
                        
            //             regN[a].style.color = 'rgb(183, 196, 0)';
            //           });
            //     });
            // }
            
            
            
            // regModal.style.transform = "scale(0.01)";
                // regModal.style.display = "block";

            // if (regModal.style.display === "none") {
                // regModal.classList.add(".regModal-active");
                // regModal.style.display = "block";

                // regModal.style.transform = "scale(1)";
                // regModal.style.transition = "all 0.5s";
                // console.log('hello Alec, how are you this afternoon?');
            // } else {
                // regModal.style.transform = "scale(1)";
                // regModal.style.transition = "all 0.5s";
            // }
            // regModal.classList.add(".regModal-active");
            // regModal.style.transform = "scale(1)";
            // regModal.style.transition = "all 0.5s";
            // regModal.style.display = "block";

            // const RTsvg = document.getElementById('RTsvg');
    
            // RTsvg.style.display = "block";
            // RTsvg.style.marginTop = "10px";
            
            
            const regionArray = ['region-layer', 'region2-layer', 'region3-layer', 'region4-layer', 'region5-layer', 'region6-layer', 'region7-layer', 'region8-layer'];
            const regionArrayFill = ['region-fill-layer', 'region2-fill-layer', 'region3-fill-layer', 'region4-fill-layer', 'region5-fill-layer', 'region6-fill-layer', 'region7-fill-layer', 'region8-fill-layer'];
            
            regionArrayFill.map(i => {
                map.setLayoutProperty(i, 'visibility', 'none');
            });
            regionArray.map(i => {
                map.setLayoutProperty(i, 'visibility', 'none');
            });


            var clickedLayer = `${this._regName}-layer`;
            var clickedLayerFill = `${this._regName}-fill-layer`;
           
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            map.setLayoutProperty(clickedLayerFill, 'visibility', 'visible');


            


            // region.style.color = "rgba(255,255,255,0.8)"
            // region.style.color = "rgba(243,43,0,0.8)" // NOT working
            // this._regN.style.color = "rgb(255,255,255)"
            // this._regN.style.color = "rgba(44,44,44,0.9)"
            if (mq.matches) {
                map.flyTo({
                    center: [this._coord, this._coord1],
                    zoom: 6,
                    offset: [0, -200],
                });
            } else {
                map.flyTo({
                    center: [this._coord, this._coord1],
                    zoom: 6,
                    offset: [200, 0],
                });
            }
        });
    }
}

