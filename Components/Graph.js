import { newIndex } from './constants.js';

//REGION LINE GRAPH
export default class LineGraph {
    
    constructor(regionCount) {
       
        
        if(regionCount[0].name === "Hokkaido") {
            const array_1 = regionCount[0].dailyConfirmedCount;
            const straw5 = array_1.map(i => i / 2);
            this._reg = straw5;
        } else {
            this._reg = regionCount[0].dailyConfirmedCount;
        }
    }



    plot() {
        const ctx = document.getElementById('graph_active_dailyR').getContext('2d');
        const gradientStroke = ctx.createLinearGradient(0,0,400,0);
        // gradientStroke.addColorStop(0, 'rgba(255,0,0,0.1)');
        // gradientStroke.addColorStop(1, 'rgba(255,0,0,0.5)');
        gradientStroke.addColorStop(0, 'rgba(153,153,153,0.1)');
        gradientStroke.addColorStop(1, 'rgba(153,153,153,0.9)');
        const gradientFill = ctx.createLinearGradient(0,175,0,0);
        // gradientFill.addColorStop(0, 'rgba(255,0,0,0.0)');
        // gradientFill.addColorStop(1, 'rgba(255,0,0,0.5)');
        gradientFill.addColorStop(0, 'rgba(153,153,153,0.1)');
        gradientFill.addColorStop(1, 'rgba(153,153,153,0.5)');
        const myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: newIndex,
            datasets: [
                
                
                {
                    label: 'Confirmed',
                    // backgroundColor: 'rgba(50, 50, 50, 0.99)',
                    backgroundColor: gradientFill,
                    // borderColor: 'rgb(100, 100, 100)',
                    // borderColor: 'rgba(255,0,0,0.9)',
                    borderColor: gradientStroke,
                    borderWidth: 1,
                    pointBorderWidth: 0,
                    pointRadius: 0,
                    lineTension: 0,
                    // pointBackgroundColor: 'rgb(100, 100, 100)',
                    // pointBackgroundColor: 'rgba(255,0,0,0.9)',
                    data: this._reg,
                },
                // {
                //     label: 'Deaths',
                //     // backgroundColor: 'rgba(153, 153, 153, 0.2)',
                //     borderColor: 'rgb(107, 107, 107)',
                //     borderWidth: 0.1,
                //     pointRadius: 1,
                //     pointBorderWidth: 0,
                //     lineTension: 0,
                //     z: 10,
                //     pointBackgroundColor: 'rgb(107, 107, 107)',
                //     data: kiwidead
                // },
                
            ],
        },
        
        options: {
            legend: {
                display: false
            },
            // title: {
            //     display: true,
            //     text: 'KANTO'
            // },
            hover: {
                mode: null
            },
            layout: {
                padding: {
                    top: 20,
                    left: 0,
                    right: 0
                },
            },
            scales: {
                yAxes: [{
                    display: true,
                    position: 'right',
                    ticks: {
                        fontColor: 'rgba(255,255,255,0.75)',
                        beginAtZero: true,
                        // max: 1500,
                        // min: -100,
                        maxTicksLimit: 8,
                        // stepSize: 100,
                        padding: 10
                    },
                    gridLines: {
                        // color: 'rgb(28, 28, 28)',
                        color: 'rgba(238, 238, 238, 0.1)',
                        // zeroLineColor: 'rgb(28, 28, 28)',
                        zeroLineColor: 'rgba(238, 238, 238, 0.1)',
                    },
                        scaleLabel: { 
                            display: true, 
                            labelString: 'Daily Cases' ,
                            fontColor: 'rgba(255,255,255,0.75)',
                        },

                }],
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'rgba(255,255,255,0.75)',
                        padding: 10,
                        maxTicksLimit: 15
    
                    },
                    time: {
                        displayFormats: {
                            quarter: 'MMM D YYYY'
                        }
                    },
                    gridLines: {
                        // color: 'rgb(28, 28, 28)',
                        color: 'rgba(238, 238, 238, 0.1)',
                        // zeroLineColor: 'rgb(28, 28, 28)',
                        zeroLineColor: 'rgba(238, 238, 238, 0.1)',
                    },
                }]
            },
            animation: {
                animateScale: true,
                duration: 2000
            },
            responsive: true,
            maintainAspectRatio: true,
            tooltips: {
                intersect: false,
                mode: 'index',
                backgroundColor: 'rgba(58, 58, 58, 0.5)',
                borderColor: 'rgba(250, 250, 250, 0.9)',
                borderWidth: 1,
                titleAlign: 'center',
                titleFontFamily: "roboto",
                titleFontColor: 'rgb(245, 245, 245)',
                titleFontSize: 14,
                bodyFontFamily: "roboto",
                bodyFontColor: 'rgb(239, 239, 239)',
                bodyFontSize: 14,
                bodyAlign: 'center',
                caretSize: 8,
                displayColors: false,
                
            }
        }
    });
    }
}

