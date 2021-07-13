import { map } from './Map/map.js';

import { mq, listCases2, loader, spinner, spinner1, mq950, mq1250 } from './constants.js';


const getDatas = () => {

    

    async function getData() {

        
        
        // FETCH WITH LOADING DIV
        loader.style.display = 'block'
        spinner.style.display = 'inline-block'
        spinner1.style.display = 'inline-block'
        spinner2.style.display = 'inline-block'
        spinner3.style.display = 'inline-block'
        spinner4.style.display = 'inline-block'
        spinner5.style.display = 'inline-block'
        listCases2.style.display = 'none'


        const data = await fetch('https://data.covid19japan.com/summary/latest.json')
        .then(response => response.json())
        // console.log(data);
        // const banana = data.prefectures;
        const banana = data.prefectures;
        const bananas = data.daily;
        const kiwiDate = bananas.map(e => e.date)
        const kiwiT = bananas.map(e => e.confirmedCumulative)
        const kiwiD = bananas.map(e => e.deceasedCumulative)
        const kiwiR = bananas.map(e => e.recoveredCumulative)
        const kiwiA = bananas.map(e => e.activeCumulative)

        const kiwicon = bananas.map(e => e.confirmed)
        const kiwidead = bananas.map(e => e.deceased)
        const kiwirecov = bananas.map(e => e.recovered)
        const kiwiact = bananas.map(e => e.active)
        
        const kiwitest = bananas.map(e => e.tested)
        const kiwitestC = bananas.map(e => e.testedCumulative)
        

        loader.style.display = 'none'
        spinner.style.display = 'none'
        spinner1.style.display = 'none'
        spinner2.style.display = 'none'
        spinner3.style.display = 'none'
        spinner4.style.display = 'none'
        spinner5.style.display = 'none'
        listCases2.style.display = 'block'
        
        // GETS THE LAST ITEM IN THE ARRAY
        const totalJp = data.daily;
        const totalJap = totalJp[totalJp.length - 1]
        document.getElementById("totalCases").innerHTML = totalJap.confirmedCumulative;
        document.getElementById("totalAct").innerHTML = totalJap.activeCumulative;
        document.getElementById("totalRecov").innerHTML = totalJap.recoveredCumulative;
        document.getElementById("totalDeth").innerHTML = totalJap.deceasedCumulative;
        document.getElementById("totalNew").innerHTML = totalJap.confirmed;
        
        //CALCULATE PERCENTAGE
        function percentage(numSm, numB)
        {
            return (numSm/numB)*100;
        }
        const percent = percentage(totalJap.confirmedCumulative, 126500000);  
        const roundP = percent.toFixed(2);   
        // console.log(`${roundP} %`);
        document.getElementById("percent").innerHTML = roundP;
        

        const date = new Date(data.updated)
        // document.getElementById("update").innerHTML = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
        document.getElementById("update").innerHTML = moment(date).fromNow();
        
        const Prefcity = banana.map(e => e.confirmedByCity);
       
        const fruityV = Object.values(Prefcity);
        
        const fruityValues = Object.values(fruityV[0]);
       

        const getDaysArray2 = function(start, end) {
            let arr = [];
            let dt;
            for(dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
                arr.push(new Date(dt));
            }
            return arr;
        };

        const dayList2 = getDaysArray2(new Date("2020-01-08"),new Date());
        // console.log(dayList)
        // dayList.map(e => e[0])
        const newIndex2 = dayList2.map(function(element){
            // const yyyy = element.getFullYear();
            const mm = ('0' + (element.getMonth() + 1)).slice(-2); // getMonth() is zero-based
            const dd = ('0' + element.getDate()).slice(-2);
            // return String(10000 * yyyy + mm + dd); 
            return String(mm + "/" + dd); 
            // return (`${mm} / ${dd}`); 
        });
        const dateConfirm = banana.map(e => e.dailyConfirmedCount);
        const whattt = Math.max(...dateConfirm[0]);
        const whatttI = dateConfirm[0].indexOf(Math.max(...dateConfirm[0]));
        // console.log(whattt);
        // console.log(whatttI);
        // console.log(newIndex2[whatttI]);



        // $(document).ready(function() {
           
        
       

        const app = document.querySelector('#app');
        app.innerHTML = '<ul>' + banana.map(function (item, i) {
            const mdate = newIndex2[dateConfirm[i].indexOf(Math.max(...dateConfirm[i]))]
            const momDate = moment(mdate, 'MM/DD').format('MMM DD')
            // console.log(momDate);
            // console.log(mdate);
            // console.log(newIndex2);
            // console.log(dateConfirm);

    
            //this function finds the index of the largest value of the array
            function largestIndex(array){
            var counter = 1;
            var max = 0;
            for(counter; counter < array.length; counter++){
                if(array[max] < array[counter]){
                    max = counter;
                }
            }
            return max;
            }
            // console.log("index with largest value is: " +largestIndex(dateConfirm[i]));



            return '<li>' +
            
                `<div class="sect" data-name="${item.name}"> 
                    <div class="title" id="${item.name}" data-lng="${item.name + 'lng'}" data-lat="${item.name + 'lat'}">
                        <div class="i">
                            <i class="fas fa-fw fa-chevron-right" aria-hidden="true"></i>
                        </div>
                        <span id="cityName">${item.name.slice(0, 16)}</span>
                        <div class="count-location">  
                            <i id="skullsvg" class="fas fa-biohazard" aria-hidden="true"><span id="confirmed"> ${item.confirmed}</span></i>
                            <i id="skullsvg" class="fas fa-hospital-user" aria-hidden="true"><span id="recov"> ${item.recovered}</span></i>
                            <i id="skullsvg" class="fas fa-skull-crossbones" aria-hidden="true"><span id="deaths"> ${item.deaths}</span></i>    
                            <i id="upsvg" class="fas fa-level-up-alt" aria-hidden="true"><span id="new">+</span><span id="new">${item.newlyConfirmed}</span></i>
                            
                        </div> 
                    </div>
                </div>
                <div class="location">
                    <div class="patient"></div> 
                    <div class="stats stats-day graph-wrap-city">
                        <div id="oldtokyo" class="bar-inner-legend">
                            <canvas class="tokyo" id="graph_active_tokyo" ></canvas>
                            <p class="clickDetails">
                                <i id="downsvg" class="fas fa-chevron-circle-down" aria-hidden="true"></i>
                            </p>
                            <div class="newtokyo" id="closeT" class="bar-inner-legend"><div id="hello"><i class="fas fa-exclamation-triangle">${largestIndex(dateConfirm[i]) >= 359 ? `</i> Max recorded on ${momDate} / 21</div>` : `</i> Max recorded on ${momDate} / 20</div>`}
                            <canvas class="tokyo3" id="graph_active_tokyo3" ></canvas>
                            <canvas class="tokyo2" id="graph_active_tokyo2" ></canvas>
                            ${ !Object.keys(Prefcity[i]).length ? `<div class="cityConfirmed"><i id="circlesvg" class="fas fa-info-circle" aria-hidden="true"></i>Confirmed Cases</div>` : `${ item.name === "Port Quarantine" ? `<div class="cityConfirmed"><i id="circlesvg" class="fas fa-info-circle" aria-hidden="true"></i>Confirmed Cases</div>` : `<div class="cityConfirmed"><i id="circlesvg" class="fas fa-info-circle" aria-hidden="true"></i>Confirmed Cases by City</div>`}`}
                        </div>
                        </div>
                    </div> 
                </div>
                <div class="city-info" class="popup-legend-city">
                    <a class="close-popup-legend-city" data-popup="#me"><i class="fas fa-times"></i></a>
                    <div class="innercity">
                    ${ !Object.keys(Prefcity[i]).length ? `<h3 id="cityPopname">${item.name}</h3>` : `${ item.name === "Port Quarantine" ? `<h3 id="cityPopname">${item.name}</h3>` : `<h3 id="cityPopname">${item.name} Prefecture</h3>`}`}
                    ${ !Object.keys(Prefcity[i]).length ? `<h4 id="cityPopnameL">(Confirmed Cases)</h4>` : `${ item.name === "Port Quarantine" ? `<h4 id="cityPopnameL">(Confirmed Cases)</h4>` : `<h4 id="cityPopnameL">(Confirmed Cases by City)</h4>`}`}
                        
                        <h4 id="cityPopKey">${'Data updated soon...'}</h4>
                        
                    </div>
                </div>
                ` +
                '</li>'
                
        }).join('') + '</ul>';
        
        // ${ !Object.keys(Prefcity[i]).length ? `<h3 id="cityPopname">${item.name}</h3>` : `<h3 id="cityPopname">${item.name} Prefecture</h3>`}
        // ${ !Object.keys(Prefcity[i]).length ? `<h4 id="cityPopnameL">(Confirmed Cases)</h4>` : `<h4 id="cityPopnameL">(Confirmed Cases by City)</h4>`}

        {/* <ul> */}
            {/* <li>${JSON.stringify(item.confirmedByCity)}</li> */}
        {/* </ul> */}
        


        //** SPIN DOWN ARROW && OPEN ADDITIONAL INFO **//
        const details = document.querySelectorAll(".clickDetails");
        const newT = document.querySelectorAll(".newtokyo");
        const oldT = document.querySelectorAll("#oldtokyo");
        const oldT3 = document.querySelectorAll("#graph_active_tokyo3");
        const oldT4 = document.querySelectorAll("#graph_active_tokyo2");
        const hello = document.querySelectorAll("#hello");
        // const oldT = document.querySelectorAll("#oldtokyo");
        // console.log(details);
        // console.log(newT);
        // console.log(oldT);

        details.forEach((elem, i) => {
            let x = 0;

            elem.addEventListener('click', () => {
       
                oldT3.forEach((elem2, i2) => {
                //     //LOWER TWO GRAPHS border height
                    //styles.css 3094

                    oldT3[i2].classList.remove("openCanvasB");

                    oldT3[i2].classList.add("openCanvas");
                });
                oldT4.forEach((elem2, i2) => {
                //     //LOWER TWO GRAPHS border height

                    oldT4[i2].classList.remove("openCanvas2B");
                    oldT4[i2].classList.add("openCanvas2");
                });

                oldT.forEach((elem2, i2) => {
                    //LOWER TWO GRAPHS border height
                    // oldT[i2].classList.add("openTTT");
                    mq.matches ? oldT[i2].classList.add("openTTTiphone") : oldT[i2].classList.add("openTTT");
                    
                });
                hello.forEach((elem2, i2) => {
                    //LOWER TWO GRAPHS border height
                    //styles.css 1956
                    hello[i2].classList.remove("openHB");
                    hello[i2].classList.add("openH");
                });
                
                // ARROW
                details[i].classList.toggle("openG");

            


                if(x == 1) {
                    // console.log('NOT has openTTT');
                    oldT3.forEach((elem2, i2) => {
                    //     //LOWER TWO GRAPHS border height
                        oldT3[i2].classList.add("openCanvasB");
                    });
                    oldT4.forEach((elem2, i2) => {
                    //     //LOWER TWO GRAPHS border height
                        oldT4[i2].classList.add("openCanvas2B");
                    });

                    oldT.forEach((elem2, i2) => {
                        //LOWER TWO GRAPHS border height
                        // oldT[i2].classList.remove("openTTT");
                        mq.matches ? oldT[i2].classList.remove("openTTTiphone") : oldT[i2].classList.remove("openTTT");

                    });
                    hello.forEach((elem2, i2) => {
                        //LOWER TWO GRAPHS border height
                        hello[i2].classList.add("openHB");
                    });
                    x = 0;
                } else {
                    // console.log('has openTTT');
                
                    x = 1;
                    
                }
            });
        });

            
        // });

        // CLOSE POPUP
        const detailsConfirmed = document.querySelectorAll(".cityConfirmed");
        const cityInfo = document.querySelectorAll(".city-info");
        const popcityInfo = document.querySelectorAll(".innercity");
        // console.log(popcityInfo);

        
        
        detailsConfirmed.forEach((elem, i) => {
            elem.addEventListener('click', () => {
                cityInfo[i].classList.remove("dropUp3");
                cityInfo[i].style.display = "block";
                popcityInfo[i].style.display = "block";
            });
        });

        // const butt2 = document.querySelector('.open-popup-bot');
        const close3 = document.querySelectorAll('.close-popup-legend-city');
        const dropDown3 = document.querySelectorAll('.city-info');

        close3.forEach((elem, i) => {
            elem.addEventListener('click', () => {
                const reset3 = () => {
                    dropDown3[i].style.display = "none"
                }
                dropDown3[i].classList.add("dropUp3");
                setTimeout(() => reset3(), 400);

            });
        });
        
        // console.log(banana);
        const apple = banana.map(e => e.dailyConfirmedCount);
        const apple2 = banana.map(e => e.confirmed);
        const apple3 = banana.map(e => e.active);
        const apple4 = banana.map(e => e.recovered);
        const apple5 = banana.map(e => e.newlyConfirmed);
        const apple6 = banana.map(e => e.yesterdayConfirmed);
        const applename = banana.map(e => e.name);
        // console.log(data);
       
        const cherry = banana.map(e => e.dailyDeceasedCount);
        const getDaysArray = function(start, end) {
            let arr = [];
            let dt;
            for(dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
                arr.push(new Date(dt));
            }
            return arr;
        };


        const dayList = getDaysArray(new Date("2020-01-08"),new Date());
        // console.log(dayList)
        // dayList.map(e => e[0])
        const newIndex = dayList.map(function(element){
            // const yyyy = element.getFullYear();
            const mm = ('0' + (element.getMonth() + 1)).slice(-2); // getMonth() is zero-based
            const dd = ('0' + element.getDate()).slice(-2);
            // return String(10000 * yyyy + mm + dd); 
            return String(mm + "/" + dd); 
            // return (`${mm} / ${dd}`); 
        });

           
       
        
        
    /////////////////////////***********    CCCC  ***********///////////////////////
    /////////////////////////***********  C       ***********///////////////////////
    /////////////////////////***********  C       ***********///////////////////////
    /////////////////////////***********    CCCC  ***********///////////////////////
    const renderChart = () => {
        $('.tokyo').map(function(index, element){
            // console.log(index);

            const ctx = element.getContext("2d");
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
            // const TChart = new Chart(ctx, {
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: newIndex,
                    datasets: [
                        {
                            label: "Cases",
                            // backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            backgroundColor: gradientFill,
                            // borderColor: 'rgb(153, 153, 153)',
                            // borderColor: 'rgb(205, 205, 205)',
                            // borderColor: 'rgb(178, 34, 34)',
                            // borderColor: 'rgba(255,0,0,0.9)',
                            borderColor: gradientStroke,

                            borderWidth: 1,
                            pointBorderWidth: 0,
                            pointRadius: 0,
                            lineTension: 0,
                            z: 10,
                            pointBackgroundColor: 'rgb(153, 153, 153)',
                            data: apple[index],
                        },
                        // {
                        //     label: "deaths",
                        //     backgroundColor: 'rgba(153, 153, 153, 0.4)',
                        //     // borderColor: 'rgb(153, 153, 153)',
                        //     // borderColor: 'rgb(178, 34, 34)',
                        //     borderColor: 'rgb(34, 34, 34)',
                        //     borderWidth: 1,
                        //     pointBorderWidth: 0,
                        //     pointRadius: 0,
                        //     lineTension: 0,
                        //     z: 10,
                        //     pointBackgroundColor: 'rgb(153, 153, 153)',
                        //     data: cherry[index],
                        // },
                    ],
                },
                
                options: {
                    
                    // responsive: true,
                    // maintainAspectRatio: false,
                    responsive: false,
                    maintainAspectRatio: true,
                    legend: {
                        display: false,
                    },
                    title: {
                        display: true,
                        fontFamily: 'avenir',
                        // fontStyle: 'thin', //this creates a problem
                        // fontColor: 'rgb(200, 200, 200)',
                        // fontColor: 'rgb(125, 125, 125)',
                        // text: 'Daily confirmed vs daily deaths           ',
                        text: 'Daily Trend       ',
                        
                    },
                    hover: {
                        mode: null
                    },
                    layout: {
                        padding: {
                            // top: 5,
                            left: 30,
                            right: 5,
                            bottom: 5
                        },
                    },
                    scales: {
                        yAxes: [{
                            display: true,
                            position: 'right',
                            ticks: {
                                beginAtZero: true,
                                autoSkip: true,
                                maxTicksLimit: 8,
                                // max: 300,
                                // min: 0,
                                // stepSize: 50,
                                padding: 10,
                                precision: 0,
                            },
                            gridLines: {
                                color: 'rgba(222,222,222, 0.1)',
                                zeroLineColor: 'rgba(222,222,222, 0.1)',
                                lineWidth: 1
                            },
                            // type: 'linear',
                            // scaleLabel: { display: true, labelString: 'cases' }
                        }],
                        xAxes: [{
                            
                            display: true,
                            ticks: {
                                fontColor: '#666',
                                autoSkip: true,
                                padding: 10,
                                maxTicksLimit: 15
                            },
                            gridLines: {
                                color: 'rgba(222,222,222, 0.1)',
                                zeroLineColor: 'rgba(222,222,222, 0.1)',
                                lineWidth: 1
                            },
                        }]
                    },
                    animation: {
                        animateScale: true,
                        duration: 2000
                    },
                    responsive: true,
                    maintainAspectRatio: true,
                    // tooltips: false
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        // Disable the on-canvas tooltip
                        // enabled: false,
                        // xAlign: 'center',
                        backgroundColor: 'rgba(50, 50, 50, 0.5)',
                        borderColor: 'rgba(250, 250, 250, 0.9)',
                        borderWidth: 1,
                        titleFontFamily: "avenir",
                        // titleFontStyle: 'thin',
                        titleFontColor: 'rgba(245, 245, 245, 0.5)',
                        titleFontSize: 14,
                        titleAlign: 'left',
            
            
                        bodyFontFamily: "avenir",
                        // bodyFontStyle: 'thin',
                        bodyFontColor: 'rgb(238, 238, 238)',
                        bodyFontSize: 14,
                        bodyAlign: 'left',
                        caretSize: 8,
                        displayColors: false,
                    }
                }
            });
           
        });
    }
        // renderChart();

    
    function renderChart2() {
        $('.tokyo2').map(function(index, element2){
            // console.log(index);
            // const index = index;
            const newIndex = index /= 1;
            const ctx = element2.getContext("2d");
            const gradientFill = ctx.createLinearGradient(0,150,0,0);
            gradientFill.addColorStop(0, 'rgba(255,180,0,0.0)');
            gradientFill.addColorStop(1, 'rgba(255,180,0,0.9)');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Confirmed", "Active"],
                    datasets: [
                        {
                            // label: "Cases",
                            backgroundColor: gradientFill,
                            borderColor: 'rgb(255,180,0)',
                            barPercentage: 0.3,
                            borderWidth: 0.5,
                            z: 10,
                            pointBackgroundColor: 'rgb(153, 153, 153)',
                            data: [apple2[newIndex], apple3[newIndex]]
                        }
                    ],
                },
                
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: false,
                    },
                    title: {
                        display: true,
                        fontFamily: 'avenir',
                        // fontStyle: 'thin',
                        fontColor: 'rgb(200, 200, 200)',
                        // fontColor: 'rgb(125, 125, 125)',
                        // text: 'Daily confirmed vs daily deaths           ',
                        
                    },
                    hover: {
                        mode: null
                    },
                    layout: {
                        padding: {
                            // top: 5,
                            left: 30,
                            right: 5,
                            bottom: 5
                        },
                    },
                    scales: {
                        yAxes: [{
                            display: true,
                            position: 'right',
                            ticks: {
                                beginAtZero: true,
                                autoSkip: true,
                                maxTicksLimit: 8,
                                // max: 300,
                                // min: 0,
                                // stepSize: 50,
                                precision: 0,
                                padding: 10
                            },
                            gridLines: {
                                color: 'rgba(222,222,222, 0.1)',
                                zeroLineColor: 'rgba(222,222,222, 0.1)',
                                lineWidth: 1
                            },
                            type: 'linear',
                            scaleLabel: { display: true, labelString: 'Total Cases' }
                        }],
                        xAxes: [{
                            display: true,
                            ticks: {
                                fontColor: '#666',
                                padding: 0,
                                backdropColor: 'rgba(255,0,0,0.75)'
                            },
                            gridLines: {
                                color: 'rgba(222,222,222, 0.1)',
                                zeroLineColor: 'rgba(222,222,222, 0.0)',
                                lineWidth: 0
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
                        mode: 'x',
                        intersect: false,
                        // Disable the on-canvas tooltip
                        // enabled: false,
                        // xAlign: 'center',
                        backgroundColor: 'rgba(50, 50, 50, 0.5)',
                        borderColor: 'rgba(250, 250, 250, 0.9)',
                        borderWidth: 1,
                        titleFontFamily: "avenir",
                        // titleFontStyle: 'thin',
                        titleFontColor: 'rgba(245, 245, 245, 0.5)',
                        titleFontSize: 14,
                        titleAlign: 'left',
            
            
                        bodyFontFamily: "avenir",
                        // bodyFontStyle: 'thin',
                        bodyFontColor: 'rgb(238, 238, 238)',
                        bodyFontSize: 14,
                        bodyAlign: 'left',
                        caretSize: 8,
                        displayColors: false,
                    }
                }
            });
        });
    }
    // renderChart2();


    function renderChart3() {
        $('.tokyo3').map(function(index, element3){
            // console.log(index);
            // const index = index;
            const newIndex = index /= 1;
            const ctx = element3.getContext("2d");
            
            const gradientStroke = ctx.createLinearGradient(0,0,500,0);
            gradientStroke.addColorStop(0, 'rgba(255,24,0,0.0)');
            gradientStroke.addColorStop(0.2, 'rgba(255,24,0,0.0)');
            gradientStroke.addColorStop(1, 'rgb(255,24,0)');
            
            const gradientFill = ctx.createLinearGradient(0,150,0,0);
            // gradientFill.addColorStop(0, 'rgba(50,50,250,0.0)');
            // gradientFill.addColorStop(1, 'rgba(50,50,250,0.9)');
            gradientFill.addColorStop(0, 'rgba(255,210,0,0.0)');
            gradientFill.addColorStop(1, 'rgba(255,210,0,0.9)');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Yesterday", "Today"],
                    datasets: [
                        {
                            // label: "Cases",
                            // backgroundColor: 'rgba(255,0,0,0.1)',
                            backgroundColor: gradientFill,
                            // borderColor: 'rgba(255,0,0,0.9)',
                            borderColor: 'rgb(255,210,0)',
                            barPercentage: 0.3,
                            borderWidth: 0.5,
                            z: 10,
                            pointBackgroundColor: 'rgb(153, 153, 153)',
                            data: [apple6[newIndex], apple5[newIndex]]
                            
                        }, {
                            label: "                       Max",
                            data: [Math.max(...apple[newIndex]), Math.max(...apple[newIndex]), Math.max(...apple[newIndex])],
                            // borderColor: "rgba(255,0,0,0.5)",
                            borderColor: gradientStroke,
                            // backgroundColor: gradientFill,
                            type: 'line',
                            borderWidth: 3,
                            borderCapStyle: 'round',
                            clip: {left: 0, top: false, right: 10, bottom: 0},
                            pointBorderWidth: 0,
                            pointRadius: 0,
                            lineTension: 0,
                            fill: false,
                        }
                    ],
                },
                
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: false,
                    },
                    title: {
                        display: true,
                        fontFamily: 'roboto',
                        fontSize: 10,
                        // fontStyle: 'thin',
                        // fontColor: 'rgb(200, 200, 200)',
                        // fontColor: 'rgb(125, 125, 125)',
                        // text: 'Max vs Yesterday / Today Daily Totals          ',
                        // text: 'Total Recovered vs Active Cases       ',
                        // text: '                                             Highest cases in a day',
                        
                    },
                    hover: {
                        mode: null
                    },
                    layout: {
                        padding: {
                            // top: 5,
                            left: 30,
                            right: 5,
                            bottom: 5
                        },
                    },
                    // drawBorder: true,
                    scales: {
                        yAxes: [{
                            display: true,
                            position: 'right',
                            
                            ticks: {
                                beginAtZero: true,
                                autoSkip: true,
                                maxTicksLimit: 8,
                                // max: 300,
                                // min: 0,
                                // stepSize: 50,
                                precision: 0,
                                padding: 10
                            },
                            gridLines: {
                                color: 'rgba(222,222,222, 0.1)',
                                zeroLineColor: 'rgba(222,222,222, 0.1)',
                                lineWidth: 1
                            },
                            type: 'linear',
                            scaleLabel: { display: true, labelString: 'Daily Cases' }
                        }],
                        xAxes: [{
                            display: true,
                            ticks: {
                                fontColor: '#666',
                                padding: 0,
                                backdropColor: 'rgba(255,0,0,0.75)'
                            },
                            gridLines: {
                                color: 'rgba(222,222,222, 0.1)',
                                zeroLineColor: 'rgba(222,222,222, 0.0)',
                                lineWidth: 0
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
                        mode: 'index',
                        intersect: true,
                        // Disable the on-canvas tooltip
                        // enabled: false,
                        // xAlign: 'center',
                        backgroundColor: 'rgba(50, 50, 50, 0.5)',
                        borderColor: 'rgba(250, 250, 250, 0.9)',
                        borderWidth: 1,
                        titleFontFamily: "avenir",
                        // titleFontStyle: 'thin',
                        titleFontColor: 'rgba(245, 245, 245, 0.5)',
                        titleFontSize: 14,
                        titleAlign: 'left',
            
            
                        bodyFontFamily: "avenir",
                        // bodyFontStyle: 'thin',
                        bodyFontColor: 'rgb(238, 238, 238)',
                        bodyFontSize: 14,
                        bodyAlign: 'left',
                        caretSize: 8,
                        // caretSize: 0,
                        displayColors: false,
                    }
                }
            });
        });
    }
    // renderChart3();

    renderChart();
    renderChart2();
    renderChart3();


        const accordTitle = document.querySelectorAll(".title");
        
        const hoverStId = null;

        accordTitle.forEach(function(elem, index){
            // elem.addEventListener("click", () => {
                let id;
                let id2;

            $(elem).on("click", () => {
                // elem.style.backgroundColor = 'red';
                // li.style.backgroundColor = 'red';
                const resetBorder = document.querySelector('.reset');
                const resetBorder2 = document.querySelector('.reset svg');
                resetBorder.classList.add('resetB');
                resetBorder2.classList.add('resetBB');

                const oldT2 = document.querySelectorAll("#graph_active_tokyo");
                 oldT2.forEach((elem2, i2) => {
                //     //LOWER TWO GRAPHS border height
                    //styles.css 3094

                    oldT2[i2].classList.add("opacity");

                    // oldT2[i2].classList.add("openCanvas");
                });
                
                map.removeFeatureState(
                    { source: 'prefectures' },
                )
                map.removeFeatureState(
                    { source: 'cities' },
                );
                let lng = elem.getAttribute('data-lng');
                let lat = elem.getAttribute('data-lat');
                // console.log(elem)
                // console.log(index)
                // console.log(lng)
                if(lng === 'Tokyolng') {
                    lng = 139.5
                    lat = 35.6762
                    id = 34
                    id2 = 0

                } else if(lng === 'Osakalng') {
                    lng = 135.5023
                    lat = 34.6937                
                    id = 26
                    id2 = 1

                } else if(lng === 'Kanagawalng') {
                    lng = 139.2
                    lat = 35.4                
                    id = 31
                    id2 = 2

                } else if(lng === 'Hokkaidolng') {
                    lng = 142.8635
                    lat = 43.2203
                    id = 21
                    id2 = 3
                    
                } else if(lng === 'Saitamalng') {
                    lng = 139.35
                    lat = 36                
                    id = 32
                    id2 = 4

                } else if(lng === 'Chibalng') {
                    lng = 140.3
                    lat = 35.6074                
                    id = 29
                    id2 = 5

                } else if(lng === 'Diamond Princess Cruise Shiplng') {
                    lng = 139.6649
                    lat = 35.4498                
                    id = 31
                    id2 = 6

                } else if(lng === 'Hyogolng') {
                    lng = 134.8
                    lat = 35             
                    id = 23
                    id2 = 7

                } else if(lng === 'Fukuokalng') {
                    lng = 130.7
                    lat = 33.5902                
                    id = 6
                    id2 = 8

                } else if(lng === 'Aichilng') {
                    lng = 137.2924
                    lat = 35.0183                
                    id = 14
                    id2 = 9

                } else if(lng === 'Kyotolng') {
                    lng = 135.5
                    lat = 35.2                
                    id = 24
                    id2 = 10

                } else if(lng === 'Ishikawalng') {
                    lng = 136.5290
                    lat = 36.3260                
                    id = 16
                    id2 = 11

                } else if(lng === 'Toyamalng') {
                    lng = 137.2137
                    lat = 36.6958                
                    id = 20
                    id2 = 12

                } else if(lng === 'Ibarakilng') {
                    lng = 140.4245
                    lat = 36.2869               
                    id = 30
                    id2 = 13

                } else if(lng === 'Hiroshimalng') {
                    lng = 132.7
                    lat = 34.5                
                    id = 0
                    id2 = 14

                } else if(lng === 'Port Quarantinelng') {
                    if (mq.matches) {
                        map.fitBounds([
                            [128, 30],
                            [146, 33]
                        ]);
                    } else {
                        map.fitBounds([
                            [120, 30], // bottom/left
                            [145, 45]  // top/right
                        ]);
                    };
                    return
                } else if(lng === 'Gifulng') {
                    lng = 136.8
                    lat = 35.6                
                    id = 15
                    id2 = 16

                } else if(lng === 'Nagasaki Cruise Shiplng') {
                    lng = 129.8684
                    lat = 32.7457                
                    id = 43
                    id2 = 17

                } else if(lng === 'Gunmalng') {
                    lng = 138.8800
                    lat = 36.5605                
                    id = 46
                    id2 = 18

                } else if(lng === 'Okinawalng') {
                    lng = 127.7
                    lat = 26.5                
                    id = 45
                    id2 = 19

                } else if(lng === 'Fukuilng') {
                    lng = 136.2169
                    lat = 36.0641                
                    id = 22
                    id2 = 20

                } else if(lng === 'Shigalng') {
                    lng = 136.0563
                    lat = 35.3292                
                    id = 27
                    id2 = 21

                } else if(lng === 'Naralng') {
                    lng = 135.9
                    lat = 34.3               
                    id = 25
                    id2 = 22

                } else if(lng === 'Miyagilng') {
                    lng = 141.1193
                    lat = 38.6306                
                    id = 40
                    id2 = 23

                } else if(lng === 'Fukushimalng') {
                    lng = 140.4748
                    lat = 37.4             
                    id = 38
                    id2 = 24

                } else if(lng === 'Niigatalng') {
                    lng = 139.0364
                    lat = 37.6               
                    id = 41
                    id2 = 25

                } else if(lng === 'Naganolng') {
                    lng = 138.1
                    lat = 36.3                
                    id = 18
                    id2 = 26

                } else if(lng === 'Kochilng') {
                    lng = 133.2522
                    lat = 33.5481                
                    id = 11
                    id2 = 27

                } else if(lng === 'Shizuokalng') {
                    lng = 138.1
                    lat = 34.9756                
                    id = 19
                    id2 = 28

                } else if(lng === 'Yamagatalng') {
                    lng = 140.2
                    lat = 38.2554                
                    id = 42
                    id2 = 29

                } else if(lng === 'Ehimelng') {
                    lng = 132.7858
                    lat = 33.6025                
                    id = 9
                    id2 = 30

                } else if(lng === 'Wakayamalng') {
                    lng = 135.3
                    lat = 34                
                    id = 28
                    id2 = 31

                } else if(lng === 'Oitalng') {
                    lng = 131.3
                    lat = 33.2396                
                    id = 12
                    id2 = 32

                } else if(lng === 'Yamanashilng') {
                    lng = 138.6873
                    lat = 35.6933                
                    id = 35
                    id2 = 33

                } else if(lng === 'Tochigilng') {
                    lng = 139.8547
                    lat = 36.6715                
                    id = 33
                    id2 = 34

                } else if(lng === 'Kumamotolng') {
                    lng = 130.9
                    lat = 32.8032                
                    id = 7
                    id2 = 35

                } else if(lng === 'Sagalng') {
                    lng = 130.1009
                    lat = 33.2631                
                    id = 5
                    id2 = 36

                } else if(lng === 'Mielng') {
                    lng = 136.5
                    lat = 34.5              
                    id = 17
                    id2 = 37

                } else if(lng === 'Yamaguchilng') {
                    lng = 131.4738
                    lat = 34.1783                
                    id = 4
                    id2 = 38

                } else if(lng === 'Kagawalng') {
                    lng = 134.0199
                    lat = 34.2226                
                    id = 10
                    id2 = 39

                } else if(lng === 'Aomorilng') {
                    lng = 140.7474
                    lat = 40.65              
                    id = 37
                    id2 = 40

                } else if(lng === 'Okayamalng') {
                    lng = 133.9198
                    lat = 34.9              
                    id = 1
                    id2 = 41

                } else if(lng === 'Shimanelng') {
                    lng = 132.6293
                    lat = 35.1244                
                    id = 2
                    id2 = 42

                } else if(lng === 'Nagasakilng') {
                    lng = 130.05
                    lat = 32.9               
                    id = 43
                    id2 = 43

                } else if(lng === 'Miyazakilng') {
                    lng = 131.4
                    lat = 32.3                
                    id = 8
                    id2 = 44

                } else if(lng === 'Akitalng') {
                    lng = 140.4
                    lat = 39.7200                
                    id = 36
                    id2 = 45

                } else if(lng === 'Kagoshimalng') {
                    lng = 130.5571
                    lat = 31.8              
                    id = 44
                    id2 = 46

                } else if(lng === 'Unspecifiedlng') {
                    if (mq.matches) {
                        map.fitBounds([
                            [128, 30],
                            [146, 33]
                        ]);
                    } else {
                        map.fitBounds([
                            [120, 30], // bottom/left
                            [145, 45]  // top/right
                        ]);
                    };
                        return
                } else if(lng === 'Tokushimalng') {
                    lng = 134.3
                    lat = 33.9                
                    id = 13
                    id2 = 48

                } else if(lng === 'Tottorilng') {
                    lng = 133.9
                    lat = 35.4               
                    id = 3
                    id2 = 49

                } else if(lng === 'Iwatelng') {
                    lng = 141.3167
                    lat = 39.4833                
                    id = 39
                    id2 = 50

                }
                const hoverStId = id;
                const hoverStId2 = id2;
                if (mq.matches) {
                    map.flyTo({
                        center: [lng, lat],
                        // zoom: 6.5,
                        zoom: 7,
                        // zoom: 10,
                        offset: [0, -200],
                    });
                    map.setFeatureState(
                        { source: 'prefectures', id: hoverStId },
                        { hover: true },
                    )
                    map.setFeatureState(
                        { source: 'cities', id: hoverStId2 },
                        { click: true }
                    );
                // regionOpen.style.display = "none";

                } else {
                    map.flyTo({
                        center: [lng, lat],
                        // zoom: 6.5,
                        zoom: 7,
                        // zoom: 10,
                        offset: [200, 0],
                    });
                    map.setFeatureState(
                        { source: 'prefectures', id: hoverStId },
                        { hover: true }
                    )
                    map.setFeatureState(
                        { source: 'cities', id: hoverStId2 },
                        { click: true }
                    );
                   
                };
            });


            // set color of region name after being tapped
            const regN = document.querySelectorAll('.regN');
            if(mq.matches) {
                // regN[a].style.color = 'rgba(255, 255, 255, 0.6)';

                regN.forEach((elem, a) => {
                    regN[a].addEventListener('touchstart', () => {
                        regN[a].style.color = 'rgb(183, 196, 0)';

                        setTimeout(() => {
                            regN[a].style.color = 'rgba(255, 255, 255, 0.6)';
                        }, 200);
                    });
                    
                });
            }

            

            /* MAP BOUNDS -- this will reset the map to original position */
            document.getElementById('fit').addEventListener('click', function() {
               
                // const regionOpen = document.getElementById('regions');
                // regionOpen.style.display = "none";

                // RTsvg.style.display = "none";

                // const regN = document.querySelectorAll('.regN');
                // regN.forEach(a => {
                    // a.style.color = '';
                // });
    
                $('#regions').removeClass('show');
                $('#regionName').removeClass('open');
                
                // ROTATES RESET BUTTON
                const resetBorder = document.querySelector('.reset');
                const resetBorder2 = document.querySelector('.reset svg');
                resetBorder.classList.remove('resetB');
                resetBorder2.classList.remove('resetBB');
                // for ( let i = 0; i < regN.length; i++) {
                //     regN[i].addEventListener("click",function() {
                //         // function will never know what 'i' is here
                //         this.style.color = "";
                //         console.log('regNNN');
                //     });
                // };
                // regN.style.color = '';
                // console.log(regN);
                // regN.map(a => {
                //     a.style.color = "";
                //     console.log('regNNNNN');
                // });

                    $( ".regModal" ).fadeOut(2000);
                    const SVG = document.querySelector('#RegBorder');
                    SVG.classList.remove('spin');
                    SVG.classList.add('spinBack');
                   
                
                setTimeout(() => {
                
                    // styles.css 1991
                    $( "#RTitle" ).css("opacity", "0");
                    $( "#graph_active_dailyR" ).css("opacity", "0");
                }, 100);
               
                
                map.removeFeatureState(
                    { source: 'prefectures' },
                )
                map.removeFeatureState( //WORKING!!!!!!!!!!
                    { source: 'cities' },
                );
                
                const regionArray = ['region-layer', 'region2-layer', 'region3-layer', 'region4-layer', 'region5-layer', 'region6-layer', 'region7-layer', 'region8-layer'];
                const regionArrayFill = ['region-fill-layer', 'region2-fill-layer', 'region3-fill-layer', 'region4-fill-layer', 'region5-fill-layer', 'region6-fill-layer', 'region7-fill-layer', 'region8-fill-layer'];
                
                regionArrayFill.map(i => {
                    map.setLayoutProperty(i, 'visibility', 'none');
                });
                regionArray.map(i => {
                    map.setLayoutProperty(i, 'visibility', 'none');
                });


                if (mq.matches || mq950.matches) {
                    map.fitBounds([
                        [128, 30],
                        [146, 33]
                    ]);

                    //closes region total Active and New
                    // const RtOpen = document.getElementById('RTitle');
                    // RtOpen.style.display = "none";
                    // const regModal2 = document.querySelector('.regModal');
                    // regModal2.style.display = "none";
                    // $( "#RTitle" ).fadeOut( 5000, function() {
                    // });
                    

                } else {
                    map.fitBounds([
                        // [135, 32], // bottom/left
                        // [136, 44.5]  // top/right
                        [120, 30], // bottom/left
                        [145, 45]  // top/right
                    ]);
                    
                };
            });
        });
        


       
        
    
    



    

        
    /* ACCORDION */
    $(function() {
        $('#list-casesAccord').accordion({
            header: ".sect", //this sets where the accordion will open 
            autoHeight: false,
            collapsible: true,
            heightStyle: "content",
            // active: 0, //this will leave the first menu open on page load
            active: false,
            animate: 310,
            // heightStyle: "content"
            
        });
        
        
        $('#list-casesAccord .sect').bind('click', function(){
            // $(".location").css({display: "block"});
            const self = $(this);

            // console.log('hello')

            $("#list-casesAccord").find(".open").not($(this)).removeClass("open");
            self.toggleClass('open');
            

            // styles.css 2900
            const oldT2 = document.querySelectorAll("#oldtokyo");
            oldT2.forEach((elem2, i2) => {

                //LOWER TWO GRAPHS border height
                // oldT2[i2].classList.remove("openTTT");
                mq.matches ? oldT[i2].classList.remove("openTTTiphone") : oldT[i2].classList.remove("openTTT");

                //UPPER GRAPH border height
                // oldT2[i2].classList.add("openTTTT");
                mq.matches ? oldT[i2].classList.add("openTTTTiphone") : oldT[i2].classList.add("openTTTT");

            });
            //  const oldT2A = document.querySelectorAll("#graph_active_tokyo");

            //  oldT2A.forEach((elem2, i2) => {
            //     //     //LOWER TWO GRAPHS border height
            //         //styles.css 3094

            //         oldT2[i2].classList.add("opacity");

            //         // oldT2[i2].classList.add("openCanvas");
            //     });
            const oldT3 = document.querySelectorAll("#graph_active_tokyo3");
            const oldT4 = document.querySelectorAll("#graph_active_tokyo2");
            oldT3.forEach((elem2, i2) => {
                //LOWER TWO GRAPHS border height
                //styles.css 3094

                oldT3[i2].classList.add("openCanvasB");

                // oldT3[i2].classList.add("openCanvas");
            });
            oldT4.forEach((elem2, i2) => {
                //LOWER TWO GRAPHS border height

                oldT4[i2].classList.add("openCanvas2B");
                // oldT4[i2].classList.add("openCanvas2");
            });

            // StyleSheet.css 1937
            const hello = document.querySelectorAll("#hello");
            hello.forEach((elem2, i2) => {
                //LOWER TWO GRAPHS border height
                //styles.css 1956
                hello[i2].classList.add("openHB");
                // hello[i2].classList.add("openH");
            });
            
            const details = document.querySelectorAll(".clickDetails");
            details.forEach((elem, i) => {

                if(details[i].classList.contains("openG")) {
                    details[i].click();
                } else {
                    return
                }

            });

            setTimeout(function() {
                const theOffset = $(self[0].offsetTop);
                // console.log(theOffset[0]);
                if(mq.matches) {
                    $('#list-cases').animate({ scrollTop: theOffset[0]});
                } else {
                    // $('#list-cases').animate({ scrollTop: theOffset[0] - 44});
                    $('#list-cases').animate({ scrollTop: theOffset[0]});
                }
            }, 310);
            
        });
    });


    /* SHARE POPOUT */
    
    $("#homeShare").on('mouseenter', function() {
        if(mq.matches) {
            $(".fa-share-alt").css({"color": ""});
        } else {
            // $("#share").stop().fadeIn(200);
            // $(".fa-share-alt").css({"color": "#66ff00"});
            $(".fa-share-alt").css({"color": "rgba(187, 187, 187, 0.87)"});
        }
        
    });
    $("#homeShare").on('mouseleave', function() {
        // $("#share").stop().fadeOut(200);
        $(".fa-share-alt").css("color", "");
    });

    $("#homeShare").on('click', function() {
        
        if(document.getElementById("home").style.opacity === "") {

            $("#home").css({
                "transition": "all 0.8s ease",
                "transform": "translate(50px, 0px)"});
            document.getElementById("home").style.opacity = 1;
            document.getElementById("home").style.pointerEvents = "auto";
    
            $("#homeTwit").css({
                "transition": "all 0.8s ease",
                "transform": "translate(100px, 0px)"});
            document.getElementById("homeTwit").style.opacity = 1;
            document.getElementById("homeTwit").style.pointerEvents = "auto";
    
            $("#homeInsta").css({
                "transition": "all 0.8s ease",
                "transform": "translate(150px, 0px)"});
            document.getElementById("homeInsta").style.opacity = 1;
            document.getElementById("homeInsta").style.pointerEvents = "auto";
    
            // $("#share").fadeOut(100);
    
            // $("#homeShare").off('mouseenter');
            // $("#homeShare").off('mouseleave');
    
            // $(".fa-share-alt").css("color", "");

        } else {
            // setTimeout(() => {
            //     $("#homeShare").on('mouseenter', function() {
            //         if(mq.matches) {
            //             $(".fa-share-alt").css({"color": ""});
            //         } else {
            //             // $("#share").stop().fadeIn(200);
            //             // $(".fa-share-alt").css({"color": "#66ff00"});
            //             $(".fa-share-alt").css({"color": "rgba(187, 187, 187, 0.87)"});
            //         }
            //     });
            //     $("#homeShare").on('mouseleave', function() {
            //         // $("#share").stop().fadeOut(200);
            //         $(".fa-share-alt").css("color", "");
            //     });
            // }, 300);
            

            $("#home").css({
                "transition": "all 0.8s ease",
                "transform": "translate(0px, 0px)"});
            document.getElementById("home").style.opacity = 0;
            document.getElementById("home").style.pointerEvents = "none";
    
            $("#homeTwit").css({
                "transition": "all 0.8s ease",
                "transform": "translate(0px, 0px)"});
            document.getElementById("homeTwit").style.opacity = 0;
            document.getElementById("homeTwit").style.pointerEvents = "none";
    
            $("#homeInsta").css({
                "transition": "all 0.8s ease",
                "transform": "translate(0px, 0px)"});
            document.getElementById("homeInsta").style.opacity = 0;
            document.getElementById("homeInsta").style.pointerEvents = "none";

            // console.log(document.getElementById("home").style.opacity);
            // $("#share").fadeOut(100);

            
    
            // $(".fa-share-alt").css("color", "");
            document.getElementById("home").style.opacity = ""
        }
        
    });

    /* DROP DOWN */
    const butt = document.querySelector('.open-popup');
    const close = document.querySelector('.close-popup');
    const dropDown = document.querySelector('.popup');
    // console.log(butt);
    const reset = () => {
        dropDown.style.display = "none"
    }
    
    butt.addEventListener("click", () => {
        dropDown.classList.remove("dropUp");
        dropDown.style.display = "block";

        lineChart();
        lineChartA();
        lineChartB();
        bubbleChart();

        $(window).on('resize', function () {
            $('.inner').css('margin', function () {
                return ($(window).width() - $(this).width()) / 2
            });
            if( mq1250.matches ) {
                
                    $('.inner').css('margin', '');
             
            }
        }).resize();

        

    });


    close.addEventListener("click", () => {
        dropDown.classList.add("dropUp");

        // 2. reset display after .5 sec
        setTimeout(() => reset(), 500);
    });


    /* DROP DOWN 2 */

    // whos behind this site
    const butt2 = document.querySelector('.open-popup-bot');

    const close2 = document.querySelector('.close-popup-legend');
    const dropDown2 = document.querySelector('.popup-legend');
    
    // console.log(butt2);
    const reset2 = () => {
        dropDown2.style.display = "none"
    }

    butt2.addEventListener("click", function() {
        dropDown2.classList.remove("dropUp2");
        dropDown2.style.display = "block";
    });


    close2.addEventListener("click", () => {
        dropDown2.classList.add("dropUp2");

        // 2. reset display after .5 sec
        setTimeout(() => reset2(), 400);
    });

    
    // Fade svg on hover >>> REGIONS
    // const regionSvg = document.getElementById('regionName');
    // const sVg = document.querySelector('#regionI');

    // regionSvg.addEventListener('mouseover', function() {
        // regionSvg.style.color = 'rgba(29, 29, 29, 0.199)';
        // sVg.style.color = 'rgba(29, 29, 29, 0.199)';
    // });
    // regionSvg.addEventListener('mouseleave',function(){
        // regionSvg.style.color = 'rgb(43, 43, 43)';
        // sVg.style.color = 'rgb(43, 43, 43)';
    //  })

    $('#fit').bind('click', function(){

        $(function() {
            $("#list-casesAccord").accordion({
                autoHeight: false,
                collapsible: true,
                heightStyle: "content",
                // active: 0, //this will leave the first menu open on page load
                active: false,
                animate: 320,
            });
            
            $(function(){
                const self = $(this);
                $("#list-casesAccord").find(".open").not($(this)).removeClass("open");
                self.toggleClass('open');

                
                setTimeout(function() {
                
                
                    $("#list-cases").animate({ scrollTop: 0 });

                    const details = document.querySelectorAll(".clickDetails");
                    details.forEach((elem, i) => {

                        if(details[i].classList.contains("openG")) {
                            details[i].click();
                        } else {
                            return
                        }

                    });
                    
                
                }, 310);

            });
        });
    });












    /////////////////////////***********    CCCC  DDDD    ***********///////////////////////
    /////////////////////////***********  C       D    D  ***********///////////////////////
    /////////////////////////***********  C       D    D  ***********///////////////////////
    /////////////////////////***********    CCCC  DDDD   ***********///////////////////////    
    /* CHARTS JS */
    const lineChart = () => {
        const ctx = document.getElementById('graph_active').getContext('2d');
        const gradientFill = ctx.createLinearGradient(0,400,0,0);
        gradientFill.addColorStop(0, 'rgba(255,0,0,0.0)');
        gradientFill.addColorStop(1, 'rgba(255,0,0,0.9)');
        const gradientFill2 = ctx.createLinearGradient(0,0,1500,0);
        gradientFill2.addColorStop(0, 'rgba(50,50,50,0.9)');
        gradientFill2.addColorStop(1, 'rgb(127,255,0)');
        const gradientFill3 = ctx.createLinearGradient(0,0,1500,0);
        gradientFill3.addColorStop(0, 'rgba(50,50,50,0.9)');
        gradientFill3.addColorStop(1, 'rgb(0, 255, 255)');
        const gradientFill4 = ctx.createLinearGradient(0,0,1500,0);
        gradientFill4.addColorStop(0, 'rgba(50,50,50,0.9)');
        gradientFill4.addColorStop(1, 'rgba(255,0,0,0.9)');
        const myLineChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: kiwiDate,
                    datasets: [
                        
                        
                        {
                            label: 'Total',
                            // backgroundColor: 'rgba(127, 255, 0, 0.1)',
                            borderColor: 'rgb(0, 97, 136)',
                            // borderColor: gradientFill2,
                            borderWidth: 0.1,
                            pointBorderWidth: 0,
                            pointRadius: 1,
                            lineTension: 0,
                            // pointBackgroundColor: 'rgb(127, 255, 0)',
                            pointBackgroundColor: 'rgb(0, 97, 136)',
                            // pointBackgroundColor: gradientFill2,
                            data: kiwiT,
                        },
                        {
                            label: 'Recovered',
                            backgroundColor: 'rgba(0, 102, 255,0.1)',
                            borderColor: 'rgb(0, 102, 255)',
                            // borderColor: gradientFill3,
                            borderWidth: 0.1,
                            pointBorderWidth: 0,
                            pointRadius: 1,
                            lineTension: 0,
                            z: 10,
                            pointBackgroundColor: 'rgb(0, 102, 255)',
                            data: kiwiR
                        },
                        {
                            label: 'Active',
                            backgroundColor: 'rgba(255,25,0,0.2)',
                            borderColor: 'rgba(255,0,0,0.9)',
                            // borderColor: gradientFill4,
                            borderWidth: 0.1,
                            pointRadius: 1,
                            pointBorderWidth: 0,
                            lineTension: 0,
                            z: 10,
                            pointBackgroundColor: 'rgba(255,0,0,0.9)',
                            data: kiwiA
                        },
                        {
                            label: 'Deaths',
                            
                            backgroundColor: 'rgba(153, 153, 153, 0.0)',
                            borderColor: 'rgb(107, 107, 107)',
                            // borderColor: 'rgb(255,255,255)',
                            borderWidth: 0.1,
                            pointRadius: 1,
                            pointBorderWidth: 0,
                            lineTension: 0,
                            z: 10,
                            pointBackgroundColor: 'rgb(107, 107, 107)',
                            // pointBackgroundColor: 'rgb(255,255,255)',
                            data: kiwiD
                        },
                        
                    ],
                },
                
                options: {
                    legend: {
                        display: false
                    },
                    hover: {
                        mode: null
                    },
                    layout: {
                        padding: {
                            top: 20,
                            left: 100,
                            right: 40
                        },
                    },
                    scales: {
                        yAxes: [{
                            display: true,
                            position: 'right',
                            ticks: {
                                beginAtZero: true,
                                // max: 35000,
                                // min: -1000,
                                stepSize: 50000,
                                padding: 10,
                            },
                            gridLines: {
                                // color: 'rgba(238, 238, 238, 0.1)',
                                color: 'rgb(28, 28, 28)',
                                zeroLineColor: 'rgb(28, 28, 28)',
                                // zeroLineColor: 'rgba(238, 238, 238, 0.1)',
                            }
                        }],
                        xAxes: [{
                            display: true,
                            ticks: {
                                fontColor: '#666',
                                padding: 10,
                                maxTicksLimit: 20
            
                            },
                            time: {
                                displayFormats: {
                                    quarter: 'MMM D YYYY'
                                }
                            },
                            gridLines: {
                                // color: 'rgba(238, 238, 238, 0.1)',
                                color: 'rgb(28, 28, 28)',
                                zeroLineColor: 'rgb(28, 28, 28)',
                                // zeroLineColor: 'rgba(238, 238, 238, 0.1)',
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
                        backgroundColor: 'rgba(58, 58, 58, 0.9)',
                        titleAlign: 'center',
                        titleFontFamily: "roboto",
                        titleFontColor: 'rgb(245, 245, 245)',
                        titleFontSize: 14,
            
            
                        bodyFontFamily: "roboto",
                        bodyFontColor: 'rgb(23, 23, 23)',
                        bodyFontSize: 14,
                        bodyAlign: 'center',
                        caretSize: 8,
                        displayColors: false,
                        
                    }
                }
        });
    }


    const configLineA = {
        type: 'line',
        data: {
            labels: kiwiDate,
            datasets: [
                
                {
                    label: 'Recovered',
                    // backgroundColor: false,
                    backgroundColor: 'rgba(0, 102, 255,0.1)',

                    borderColor: 'rgb(0, 102, 255)',
                    borderWidth: 0.1,
                    pointBorderWidth: 0,
                    pointRadius: 1,
                    lineTension: 0,
                    z: 10,
                    pointBackgroundColor: 'rgb(0, 102, 255)',
                    data: kiwirecov
                },
                {
                    label: 'Active',
                    // backgroundColor: false,
                    backgroundColor: 'rgba(255,0,0,0.1)',
                    borderColor: 'rgba(255,0,0,0.9)',
                    borderWidth: 0.1,
                    pointRadius: 1,
                    pointBorderWidth: 0,
                    lineTension: 0,
                    z: 10,
                    pointBackgroundColor: 'rgba(255,0,0,0.9)',
                    data: kiwiact
                },
                
            ],
        },
        
        options: {
            legend: {
                display: false
            },
            hover: {
                mode: null
            },
            layout: {
                padding: {
                    top: 20,
                    left: 100,
                    right: 40
                },
            },
            scales: {
                yAxes: [{
                    display: true,
                    position: 'right',
                    ticks: {
                        beginAtZero: true,
                        max: 10000,
                        min: -10000,
                        stepSize: 1000,
                        padding: 10
                    },
                    gridLines: {
                        // color: 'rgba(238, 238, 238, 0.1)',
                        color: 'rgb(28, 28, 28)',
                        zeroLineColor: 'rgb(28, 28, 28)',
                        // zeroLineColor: 'rgba(238, 238, 238, 0.1)',
                    }
                }],
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: '#666',
                        padding: 10,
                        maxTicksLimit: 20

                    },
                    time: {
                        displayFormats: {
                            quarter: 'MMM D YYYY'
                        }
                    },
                    gridLines: {
                        color: 'rgb(28, 28, 28)',
                        // color: 'rgba(238, 238, 238, 0.1)',
                        zeroLineColor: 'rgb(28, 28, 28)',
                        // zeroLineColor: 'rgba(238, 238, 238, 0.1)',
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
                backgroundColor: 'rgba(58, 58, 58, 0.9)',
                titleAlign: 'center',
                titleFontFamily: "roboto",
                titleFontColor: 'rgb(245, 245, 245)',
                titleFontSize: 14,


                bodyFontFamily: "roboto",
                bodyFontColor: 'rgb(23, 23, 23)',
                bodyFontSize: 14,
                bodyAlign: 'center',
                caretSize: 8,
                displayColors: false,
                
            }
        }
    };   
    const configLineB = {
        type: 'line',
        data: {
            labels: kiwiDate,
            datasets: [
                
                
                {
                    label: 'Confirmed',
                    // backgroundColor: 'rgba(100, 100, 100, 0.4)',
                    // borderColor: 'rgb(100, 100, 100)',
                    borderColor: 'rgba(255,0,0,0.9)',
                    borderWidth: 0.1,
                    pointBorderWidth: 0,
                    pointRadius: 1,
                    lineTension: 0,
                    // pointBackgroundColor: 'rgb(100, 100, 100)',
                    pointBackgroundColor: 'rgba(255,0,0,0.9)',
                    data: kiwicon,
                },
                {
                    label: 'Deaths',
                    // backgroundColor: 'rgba(153, 153, 153, 0.2)',
                    borderColor: 'rgb(107, 107, 107)',
                    borderWidth: 0.1,
                    pointRadius: 1,
                    pointBorderWidth: 0,
                    lineTension: 0,
                    z: 10,
                    pointBackgroundColor: 'rgb(107, 107, 107)',
                    data: kiwidead
                },
                
            ],
        },
        
        options: {
            legend: {
                display: false
            },
            hover: {
                mode: null
            },
            layout: {
                padding: {
                    top: 20,
                    left: 100,
                    right: 40
                },
            },
            scales: {
                yAxes: [{
                    display: true,
                    position: 'right',
                    ticks: {
                        beginAtZero: true,
                        // max: 1500,
                        // min: -100,
                        stepSize: 500,
                        padding: 10
                    },
                    gridLines: {
                        color: 'rgb(28, 28, 28)',
                        // color: 'rgba(238, 238, 238, 0.1)',
                        zeroLineColor: 'rgb(28, 28, 28)',
                        // zeroLineColor: 'rgba(238, 238, 238, 0.1)',
                    }
                }],
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: '#666',
                        padding: 10,
                        maxTicksLimit: 20

                    },
                    time: {
                        displayFormats: {
                            quarter: 'MMM D YYYY'
                        }
                    },
                    gridLines: {
                        color: 'rgb(28, 28, 28)',
                        // color: 'rgba(238, 238, 238, 0.1)',
                        zeroLineColor: 'rgb(28, 28, 28)',
                        // zeroLineColor: 'rgba(238, 238, 238, 0.1)',
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
                backgroundColor: 'rgba(58, 58, 58, 0.9)',
                titleAlign: 'center',
                titleFontFamily: "roboto",
                titleFontColor: 'rgb(245, 245, 245)',
                titleFontSize: 14,


                bodyFontFamily: "roboto",
                bodyFontColor: 'rgb(23, 23, 23)',
                bodyFontSize: 14,
                bodyAlign: 'center',
                caretSize: 8,
                displayColors: false,
                
            }
        }
    };   

    const straw = data.regions;
    const strawHok = data.prefectures;
    const reg = straw.map(e => e.name);
    // const regTots = straw.map(e => e.confirmed);
    const regTots = straw.map(e => e.active);
    const regAct = straw.map(e => e.deceased);
    // console.log(regAct);
    const regRecov = straw.map(e => e.recovered);
    // console.log(straw);
    // console.log(reg);
    const configBubble = {
        type: 'bubble',
        data: {
        datasets: [
            {
                label: ["Kansai"],
                backgroundColor: "rgba(255,0,0,0.1)",
                borderColor: "rgba(255,0,0,0.9)",
                data: [{
                    x: regTots[1],
                    y: regRecov[1],
                    r: regAct[1] / 40
                }]
            }, {
                label: ["Kanto"],
                backgroundColor: "rgba(255,30,0,0.1)",
                borderColor: "rgba(255,30,0,0.9)",
                data: [{
                    x: regTots[0],
                    y: regRecov[0],
                    r: regAct[0] / 40
                }]
            }, {
                label: ["Chubu"],
                backgroundColor: "rgba(255,60,0,0.1)",
                borderColor: "rgba(255,60,0,0.9)",
                data: [{
                    x: regTots[2],
                    y: regRecov[2],
                    r: regAct[2] / 40
                }]
            }, {
                label: ["Kyushu"],
                backgroundColor: "rgba(255,90,0,0.1)",
                borderColor: "rgba(255,90,0,0.9)",
                data: [{
                    x: regTots[3],
                    y: regRecov[3],
                    r: regAct[3]/ 40
                }]
            }, {
                label: ["Chugoku"],
                backgroundColor: "rgba(255,120,0,0.1)",
                borderColor: "rgba(255,120,0,0.9)",
                data: [{
                    x: regTots[6],
                    y: regRecov[6],
                    r: regAct[6] / 40
                }]
            }, {
                label: ["Hokkaido"],
                backgroundColor: "rgba(255,150,0,0.1)",
                borderColor: "rgba(255,150,0,0.9)",
                data: [{
                    x: regTots[5],
                    y: regRecov[5],
                    r: regAct[5]/ 40
                }]
            }, {
                label: ["Shikoku"],
                backgroundColor: "rgba(255,180,0,0.1)",
                borderColor: "rgba(255,180,0,0.9)",
                data: [{
                    x: regTots[7],
                    y: regRecov[7],
                    r: regAct[7] / 40
                }]
            }, {
                label: ["Tohoku"],
                backgroundColor: "rgba(255,210,0,0.1)",
                borderColor: "rgba(255,210,0,0.9)",
                data: [{
                    x: regTots[4],
                    y: regRecov[4],
                    r: regAct[4] / 40
                }]
            }
        ]
        },
        options: {
            title: {
                display: false,
                text: 'Active Cases By Region'
            }, 
            legend: {
                display: false
            },
            scales: {
                yAxes: [{ 
                    position: 'right',
                    ticks: {
                        beginAtZero: true,
                        max: 750000,
                        min: 0,
                        stepSize: 50000,
                        padding: 10
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Recovered",
                        fontSize: 20
                    }
                }, {
                    position: 'left',
                    ticks: {
                        beginAtZero: true,
                        max: 750000,
                        min: 0,
                        stepSize: 50000,
                        padding: 10
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Recovered",
                        fontSize: 20
                    }
                }],
                xAxes: [{ 
                    ticks: {
                        beginAtZero: true,
                        max: 40000,
                        min: 0,
                        stepSize: 1000,
                        padding: 10
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Active",
                        fontSize: 20
                    }
                }],
            },
            animation: {
                animateScale: true,
                duration: 2000
            },
            responsive: true,
            maintainAspectRatio: true,
            tooltips: {
                // enabled: false
                displayColors: false,
                callbacks: {
                    label: function(t, d) {
                        return d.datasets[t.datasetIndex].label + 
                                ': ' + (d.datasets[t.datasetIndex].data[t.index].r * 40).toFixed() + ' deaths ';
                                '';
                    }
                },
                backgroundColor: 'rgba(58, 58, 58, 0.9)',
                titleAlign: 'center',
                bodyFontFamily: "roboto",
                bodyFontColor: 'rgb(123, 123, 123)',
                // bodyFontColor: 'rgb(23, 23, 23)',
                // bodyFontColor: 'rgba(255,0,0,0.9)',
                bodyFontSize: 15,
                // bodyAlign: 'center',
                caretSize: 5,
                xPadding: 7,
                yPadding: 5,
                // displayColors: false,
            }
        }
    };   


    const lineChartA = () => {
        const ctx = document.getElementById('graph_active_total').getContext('2d');
        const myLineChart = new Chart(ctx, configLineA);
    }
    const lineChartB = () => {
        const ctx = document.getElementById('graph_active_daily').getContext('2d');
        const myLineChart = new Chart(ctx, configLineB);
    }
    const bubbleChart = () => {
        const ctx = document.getElementById('bubble_active_total').getContext('2d');
        const myBubbleChart = new Chart(ctx, configBubble);
    }


    };
    getData();

};

export default getDatas;