import { mq549, mq950 } from './constants.js';


const svg = () => {

    /* DROP DOWN 3 */
    // legend
    const butt3 = document.querySelector('.open-popup-bot3');

    const close4 = document.querySelector('.close-popup-legend3');
    const dropDown4 = document.querySelector('.popup-legend3');
    
    // console.log(butt2);
    const reset3 = () => {
        dropDown4.style.display = "none"
    }

    butt3.addEventListener("click", function() {
        dropDown4.classList.remove("dropUp2");
        dropDown4.style.display = "block";
    });


    const c1 = document.querySelector("#col1");
    const c2 = document.querySelector("#col2");
    const c3 = document.querySelector("#col3");
    const c4 = document.querySelector("#col4");
    const c5 = document.querySelector("#col5");
    const c6 = document.querySelector("#col6");
    const c7 = document.querySelector("#col7");
    const c8 = document.querySelector("#col8");
    const columns = [c1, c2, c3, c4, c5, c6, c7, c8];
    const cC1 = document.querySelector(".col1circle");
    const cC2 = document.querySelector(".col2circle");
    const cC3 = document.querySelector(".col3circle");
    const cC4 = document.querySelector(".col4circle");
    const cC5 = document.querySelector(".col5circle");
    const cC6 = document.querySelector(".col6circle");
    const cC7 = document.querySelector(".col7circle");
    const cC8 = document.querySelector(".col8circle");
    const circles = [cC1, cC2, cC3, cC4, cC5, cC6, cC7, cC8]
    const cC1M = document.querySelector(".col1circle_MOB");
    const cC2M = document.querySelector(".col2circle_MOB");
    const cC3M = document.querySelector(".col3circle_MOB");
    const cC4M = document.querySelector(".col4circle_MOB");
    const cC5M = document.querySelector(".col5circle_MOB");
    const cC6M = document.querySelector(".col6circle_MOB");
    const cC7M = document.querySelector(".col7circle_MOB");
    const cC8M = document.querySelector(".col8circle_MOB");
    const circlesM = [cC1M, cC2M, cC3M, cC4M, cC5M, cC6M, cC7M, cC8M]
   
    if(mq549.matches) {

        close4.addEventListener("click", () => {
            dropDown4.classList.add("dropUp2");
    
            // 2. reset display after .5 sec
            setTimeout(() => reset3(), 400);
    
            $("#Rselector").css({
                color: "rgba(200,200,200,0.5)",
                top: "51px",
                left: "19px",
                fontSize: "12px"
            });
            $("#Rcases").css({
                color: "rgba(200,200,200,0.5)",
                top: "51px",
                left: "130px",
                fontSize: "12px"
            });

            $("#RTgraph").css({
                color: "rgba(200,200,200,0.5)",
                left: "243px",
                top: "56px",
                fontSize: "12px"
            });
            $("#Rreset").css({
                color: "rgba(200,200,200,0.5)",
                left: "317px",
                top: "56px",
                fontSize: "12px"
            });
            
    
            // selector
            $(".st3TLL2_MOB").fadeOut(500);
            $(".st3TLL22_MOB").fadeOut(500);
            $(".st3TLL_MOB").fadeOut(500);
            $(".st3TLLcircTOP_MOB").fadeOut(500);

          
            Rst3circle_MOB.classList.remove("opacShadow2circ_MOB");
            Rst3circle2_MOB.classList.remove("opacShadow2circ2_MOB");
            
            Rst3shadow_MOB.classList.remove("opacShadow");
            Rregion.classList.remove("opacShadow5");
            Rdata.classList.remove("opacShadow4");
            Ractive.classList.remove("opacShadow2");
    
           
            // active
            stBRshadow_MOB.classList.remove("opacShadow");
            columns.forEach((e, i) => {
                columns[i].classList.remove("opacShadow3");
            });
            circlesM.forEach((e, i) => {
                circlesM[i].classList.remove("opacShadow3");
            });
            $(".stBRline_MOB").fadeOut(500);
            $(".stBRcircle_MOB").fadeOut(500);
            $(".stBRline2_MOB").fadeOut(500);
            $(".stBRbox_MOB").fadeOut(500);
            $(".stBRboxfill_MOB").fadeOut(500);

            // reset
            $(".stTR3_MOB").fadeOut(500);
            $(".stTR3line_MOB").fadeOut(500);
            stTR3background_MOB.classList.remove("opacShadow");

            // grap5
            $(".stTR5_MOB").fadeOut(500);
            $(".stTR5line_MOB").fadeOut(500);
            stTR5background_MOB.classList.remove("opacShadow");


           
        });

        const Rst3shadow_MOB = document.querySelector(".st3TLLshadow_MOB");
        const Rst3_MOB = document.querySelector(".st3TLL_MOB");
        const Rst32_MOB = document.querySelector(".st3TLL2_MOB");
        const Rst322_MOB = document.querySelector(".st3TLL22_MOB");
        const Rdata = document.querySelector("#Rdata");
        const Rst3circ_MOB = document.querySelector(".st3TLLcircTOP_MOB");
        const Rst3circle2_MOB = document.querySelector(".st3TLLcircle2_MOB");
        const Rst3circle_MOB = document.querySelector(".st3TLLcircle_MOB");
        /*** SELECTOR ***/
        Rselector.addEventListener("click", function() {
            // Rselector.classList.add("transformFont");
            $("#Rselector").css({
                color: "rgb(200,200,200)",
                top: "82px",
                left: "121px",
                fontSize: "15px",
                transition: "1s ease"
            });
           
            $("#Rcases").css({
                color: "rgba(200,200,200,0.3)",
                top: "51px",
                left: "130px",
                fontSize: "12px"
            });

          
            $("#RTgraph").css({
                color: "rgba(200,200,200,0.3)",
                left: "243px",
                top: "56px",
                fontSize: "12px"
            });
            $("#Rreset").css({
                color: "rgba(200,200,200,0.3)",
                left: "317px",
                top: "56px",
                fontSize: "12px"
            });

            Rregion.classList.add("opacShadow5");
            Rdata.classList.add("opacShadow4");
            Rst3shadow_MOB.classList.add("opacShadow");
           
            Rst32_MOB.style.display="block";
            Rst322_MOB.style.display="block";
           
            Rst3_MOB.style.display="block";
            Rst3circ_MOB.style.display="block";
            
            Rst3circle_MOB.classList.add("opacShadow2circ_MOB");
            Rst3circle2_MOB.classList.add("opacShadow2circ2_MOB");

            //active
            stBRshadow_MOB.classList.remove("opacShadow");
            Ractive.classList.remove("opacShadow2");
            columns.forEach((e, i) => {
                columns[i].classList.remove("opacShadow3");
            });
            circlesM.forEach((e, i) => {
                circlesM[i].classList.remove("opacShadow3");
            });
            $(".stBRline_MOB").fadeOut(500);
            $(".stBRcircle_MOB").fadeOut(500);
            $(".stBRline2_MOB").fadeOut(500);
            $(".stBRbox_MOB").fadeOut(500);
            $(".stBRboxfill_MOB").fadeOut(500);

            // reset
            $(".stTR3_MOB").fadeOut(500);
            $(".stTR3line_MOB").fadeOut(500);
            stTR3background_MOB.classList.remove("opacShadow");

            // graphs
            $(".stTR5_MOB").fadeOut(500);
            $(".stTR5line_MOB").fadeOut(500);
            stTR5background_MOB.classList.remove("opacShadow");

        });
    
        const stBRshadow_MOB = document.querySelector(".stBRshadow_MOB");
        const stBRline_MOB = document.querySelector(".stBRline_MOB");
        const stBRline2_MOB = document.querySelector(".stBRline2_MOB");
        const stBRbox_MOB = document.querySelector(".stBRbox_MOB");
        const stBRboxfill_MOB = document.querySelector(".stBRboxfill_MOB");
        const stBRcircle_MOB = document.querySelector(".stBRcircle_MOB");
        /*** CASES ***/
        Rcases.addEventListener("click", function() {
            // Rcases.classList.add("transformFont");
           
            
            
            $("#Rcases").css({
                color: "rgb(200,200,200)",
                top: "82px",
                left: "114px",
                fontSize: "15px",
                transition: "1s ease"

            });

            $("#Rselector").css({
                color: "rgba(200,200,200,0.3)",
                top: "51px",
                left: "19px",
                fontSize: "12px"
            });
            $("#RTgraph").css({
                color: "rgba(200,200,200,0.3)",
                left: "243px",
                top: "56px",
                fontSize: "12px"
            });
            $("#Rreset").css({
                color: "rgba(200,200,200,0.3)",
                left: "317px",
                top: "56px",
                fontSize: "12px"
            });

            stBRshadow_MOB.classList.add("opacShadow");
            Ractive.classList.add("opacShadow2");
            stBRline_MOB.style.display="block";
            stBRline2_MOB.style.display="block";
            stBRcircle_MOB.style.display="block";
            stBRbox_MOB.style.display="block";
            stBRboxfill_MOB.style.display="block";
            columns.forEach((e, i) => {
                columns[i].classList.add("opacShadow3");
            });
            circlesM.forEach((e, i) => {
                circlesM[i].classList.add("opacShadow3");
            });
            

            //selector
            Rst3shadow_MOB.classList.remove("opacShadow");
            $(".st3TLL2_MOB").fadeOut(500);
            $(".st3TLL22_MOB").fadeOut(500);
            $(".st3TLL_MOB").fadeOut(500);
            $(".st3TLLcircTOP_MOB").fadeOut(500);

           
            Rst3circle_MOB.classList.remove("opacShadow2circ_MOB");
            Rst3circle2_MOB.classList.remove("opacShadow2circ2_MOB");

            Rregion.classList.remove("opacShadow5");
            Rdata.classList.remove("opacShadow4");

            // reset
            $(".stTR3_MOB").fadeOut(500);
            $(".stTR3line_MOB").fadeOut(500);
            stTR3background_MOB.classList.remove("opacShadow");

            // graphs
            $(".stTR5_MOB").fadeOut(500);
            $(".stTR5line_MOB").fadeOut(500);
            stTR5background_MOB.classList.remove("opacShadow");

            
        });

        const stTR3_MOB = document.querySelector(".stTR3_MOB");
        const stTR3line_MOB = document.querySelector(".stTR3line_MOB");
        const stTR3background_MOB = document.querySelector(".stTR3background_MOB");
        /*** RESET ***/
        Rreset.addEventListener("click", function() {
            $("#Rreset").css({
                color: "rgb(200,200,200)",
                left: "195px",
                top: "85px",
                fontSize: "15px",
                transition: "1s ease"

            });
            $("#Rselector").css({
                color: "rgba(200,200,200,0.3)",
                top: "51px",
                left: "19px",
                fontSize: "12px"
            });
            $("#Rcases").css({
                color: "rgba(200,200,200,0.3)",
                top: "51px",
                left: "130px",
                fontSize: "12px"
            });
           
            $("#RTgraph").css({
                color: "rgba(200,200,200,0.3)",
                left: "243px",
                top: "56px",
                fontSize: "12px"
            });
            
            
            stTR3_MOB.style.display="block";
            stTR3line_MOB.style.display="block";
            stTR3background_MOB.classList.add("opacShadow");

            //selector
            Rst3shadow_MOB.classList.remove("opacShadow");
            $(".st3TLL2_MOB").fadeOut(500);
            $(".st3TLL22_MOB").fadeOut(500);
            $(".st3TLL_MOB").fadeOut(500);
            $(".st3TLLcircTOP_MOB").fadeOut(500);

            // $(".st3TLLcircle_MOB").fadeOut(500);
            // $(".st3TLLcircle2_MOB").fadeOut(500);
            Rst3circle_MOB.classList.remove("opacShadow2circ_MOB");
            Rst3circle2_MOB.classList.remove("opacShadow2circ2_MOB");

            Rregion.classList.remove("opacShadow5");
            Rdata.classList.remove("opacShadow4");
            
            //active
            stBRshadow_MOB.classList.remove("opacShadow");
            Ractive.classList.remove("opacShadow2");
            columns.forEach((e, i) => {
                columns[i].classList.remove("opacShadow3");
            });
            circlesM.forEach((e, i) => {
                circlesM[i].classList.remove("opacShadow3");
            });
            $(".stBRline_MOB").fadeOut(500);
            $(".stBRcircle_MOB").fadeOut(500);
            $(".stBRline2_MOB").fadeOut(500);
            $(".stBRbox_MOB").fadeOut(500);
            $(".stBRboxfill_MOB").fadeOut(500);

            // graphs
            $(".stTR5_MOB").fadeOut(500);
            $(".stTR5line_MOB").fadeOut(500);
            stTR5background_MOB.classList.remove("opacShadow");

        });

        const stTR5_MOB = document.querySelector(".stTR5_MOB");
        const stTR5line_MOB = document.querySelector(".stTR5line_MOB");
        const stTR5background_MOB = document.querySelector(".stTR5background_MOB");
        /*** GRAPH ***/
        RTgraph.addEventListener("click", function() {
            $("#RTgraph").css({
                color: "rgb(200,200,200)",
                left: "187px",
                top: "85px",
                fontSize: "15px",
                transition: "1s ease"

            });
            $("#Rselector").css({
                color: "rgba(200,200,200,0.3)",
                top: "51px",
                left: "19px",
                fontSize: "12px"
            });
            $("#Rcases").css({
                color: "rgba(200,200,200,0.3)",
                top: "51px",
                left: "130px",
                fontSize: "12px"
            });
       
            $("#Rreset").css({
                color: "rgba(200,200,200,0.3)",
                left: "317px",
                top: "56px",
                fontSize: "12px"
            });
            stTR5_MOB.style.display="block";
            stTR5line_MOB.style.display="block";
            stTR5background_MOB.classList.add("opacShadow");

            //selector
            Rst3shadow_MOB.classList.remove("opacShadow");
            $(".st3TLL2_MOB").fadeOut(500);
            $(".st3TLL22_MOB").fadeOut(500);
            $(".st3TLL_MOB").fadeOut(500);
            $(".st3TLLcircTOP_MOB").fadeOut(500);

        
            Rst3circle_MOB.classList.remove("opacShadow2circ_MOB");
            Rst3circle2_MOB.classList.remove("opacShadow2circ2_MOB");

            Rregion.classList.remove("opacShadow5");
            Rdata.classList.remove("opacShadow4");
            
            //active
            stBRshadow_MOB.classList.remove("opacShadow");
            Ractive.classList.remove("opacShadow2");
            columns.forEach((e, i) => {
                columns[i].classList.remove("opacShadow3");
            });
            circlesM.forEach((e, i) => {
                circlesM[i].classList.remove("opacShadow3");
            });
            $(".stBRline_MOB").fadeOut(500);
            $(".stBRcircle_MOB").fadeOut(500);
            $(".stBRline2_MOB").fadeOut(500);
            $(".stBRbox_MOB").fadeOut(500);
            $(".stBRboxfill_MOB").fadeOut(500);

            // reset
            $(".stTR3_MOB").fadeOut(500);
            $(".stTR3line_MOB").fadeOut(500);
            stTR3background_MOB.classList.remove("opacShadow");
        });









    } else {









    /***  DESKTOP  ***/
    close4.addEventListener("click", () => {
        dropDown4.classList.add("dropUp2");

        // 2. reset display after .5 sec
        setTimeout(() => reset3(), 400);

    
        $("#Rselector").css({
            color: "rgba(200,200,200,0.3)",
            fontSize: "15px",
            left: "198px",
            top: "111px",
            // transition: "1s ease"
        });
        $("#Rcases").css({
            color: "rgba(200,200,200,0.3)",
            fontSize: "15px",
            left: "407px",
            top: "111px",
        });
        $("#RTgraph").css({
            color: "rgba(200,200,200,0.3)",
            fontSize: "15px",
            left: "824px",
            top: "116px"
        });
        $("#Rreset").css({
            color: "rgba(200,200,200,0.3)",
            fontSize: "15px",
            left: "622px",
            top: "116px"
        });

        // reset
        $(".stTR3").fadeOut(1000);
        $(".stTR3line").fadeOut(1000);
        stTR3background.classList.remove("opacShadow");

        // graphs
        $(".stTR5").fadeOut(1000);
        $(".stTR5line").fadeOut(1000);
        stTR5background.classList.remove("opacShadow");


        // selector
        Rst3.forEach((e, i) => {
            $(".st3TLL").fadeOut(500);
        });
        $(".st3TLL2").fadeOut(500);
        $(".st3TLL3").fadeOut(500);
        // $(".st3TLLcircle").fadeOut(500);
        // $(".st3TLLcircle2").fadeOut(500);
        Rst3circle.classList.remove("opacShadow2circ");
        Rst3circle2.classList.remove("opacShadow2circ");
        
        Rst3shadow.classList.remove("opacShadow");

        $(".st3TLLcircTOP").fadeOut(1000);
        Rregion.classList.remove("opacShadow2");
        Rgraph.classList.remove("opacShadow2");
        

        // active
        columns.forEach((e, i) => {
            columns[i].classList.remove("opacShadow3");
        });
        circles.forEach((e, i) => {
            circles[i].classList.remove("opacShadow3");
        });
        

        $(".stBRline").fadeOut(1000);
        $(".stBRline2").fadeOut(1000);
        $(".stBRbox").fadeOut(1000);
        $(".stBRboxfill").fadeOut(1000);
        $(".stBRcircle").fadeOut(1000);
        // $(".stBRshadow").fadeOut(1000);
        stBRshadow.classList.remove("opacShadow");
        Ractive.classList.remove("opacShadow2");
        // $("#Ractive").animate({color: "rgba(200,200,200,0.0)"}, 1000);
    });


    /**  MAP LEGEND DISPLAY **/
    const Rselector = document.getElementById("Rselector");
    const Ractive = document.getElementById("Ractive");
    const Rreset = document.getElementById("Rreset");
    const RTgraph = document.getElementById("RTgraph");
    const Rregion = document.getElementById("Rregion");
    const Rcases = document.getElementById("Rcases");
    const Rgraph = document.getElementById("Rgraph");
    const Rst3 = document.querySelectorAll(".st3TLL");
    const Rst32 = document.querySelector(".st3TLL2");
    const Rst33 = document.querySelector(".st3TLL3");
    const Rst3circle = document.querySelector(".st3TLLcircle");
    const Rst3circle2 = document.querySelector(".st3TLLcircle2");
    const Rst3TLLcircTOP = document.querySelector(".st3TLLcircTOP");
    const Rst3shadow = document.querySelector(".st3TLLshadow");


    /* REGION SELECTOR */
    Rselector.addEventListener("click", function() {

        
        columns.forEach((e, i) => {
            columns[i].classList.remove("opacShadow3");
        });
        circles.forEach((e, i) => {
            circles[i].classList.remove("opacShadow3");
        });

        $(".stBRline").fadeOut(1000);
        $(".stBRline2").fadeOut(1000);
        $(".stBRbox").fadeOut(2000);
        $(".stBRboxfill").fadeOut(1000);
        $(".stBRcircle").fadeOut(1000);
        // $("#Ractive").fadeOut(1000);
        stBRshadow.classList.remove("opacShadow");
        Ractive.classList.remove("opacShadow2");
        Rregion.classList.add("opacShadow2");
        Rgraph.classList.add("opacShadow2");
        // $(".stBRshadow").fadeOut(1000);
        // $("#Ractive").animate({color: "rgba(200,200,200,0.0)"}, 1000);


        Rst3.forEach((e, i) => {
            Rst3[i].style.display="block";
        });
        Rst32.style.display="block";
        Rst33.style.display="block";

        // Rst3circle.style.display="block";
        // Rst3circle2.style.display="block";
        Rst3circle.classList.add("opacShadow2circ");
        Rst3circle2.classList.add("opacShadow2circ");

        Rst3shadow.classList.add("opacShadow");

        Rst3TLLcircTOP.style.display="block";
        
        
        $("#Rselector").css({
            color: "rgb(200,200,200)",
            fontSize: "18px",
            left: "265px",
            top: "153px",
            transition: "1s ease"
        });
        $("#Rcases").css({
            color: "rgba(200,200,200,0.1)",
            fontSize: "15px",
            left: "407px",
            top: "111px",
            transition: "1s ease"
        });
        $("#RTgraph").css({
            color: "rgba(200,200,200,0.1)",
            fontSize: "15px",
            // right: "225px",
            left: "824px",
            top: "116px",
            transition: "1s ease"

        });
        $("#Rreset").css({
            color: "rgba(200,200,200,0.1)",
            fontSize: "15px",
            // right: "399px",
            left: "622px",
            top: "116px",
            transition: "1s ease"

        });

        // reset
        $(".stTR3").fadeOut(1000);
        $(".stTR3line").fadeOut(1000);
        // $(".stTR3background").fadeOut(1500);
        stTR3background.classList.remove("opacShadow");

        // graphs
        $(".stTR5").fadeOut(1000);
        $(".stTR5line").fadeOut(1000);
        // $(".stTR5background").fadeOut(500);
        stTR5background.classList.remove("opacShadow");


    });


    const stBRshadow = document.querySelector(".stBRshadow");
    const stBRline = document.querySelector(".stBRline");
    const stBRline2 = document.querySelector(".stBRline2");
    const stBRcircle = document.querySelector(".stBRcircle");
    const stBRbox = document.querySelector(".stBRbox");
    const stBRboxfill = document.querySelector(".stBRboxfill");

    

    /* ACTIVE CASES */
    Rcases.addEventListener("click", function() {
        
        columns.forEach((e, i) => {
            // columns[i].style.display="block";
            columns[i].classList.add("opacShadow3");

        });
        circles.forEach((e, i) => {
            // circles[i].style.display="block";
            circles[i].classList.add("opacShadow3");

        });

        Rst3.forEach((e, i) => {
            $(".st3TLL").fadeOut(500);
        });
        $(".st3TLL2").fadeOut(500);
        $(".st3TLL3").fadeOut(500);

        // $(".st3TLLcircle").fadeOut(250);
        // $(".st3TLLcircle2").fadeOut(250);
        Rst3circle.classList.remove("opacShadow2circ");
        Rst3circle2.classList.remove("opacShadow2circ");
        
        Rst3shadow.classList.remove("opacShadow");
        

        $(".st3TLLcircTOP").fadeOut(500);
        
        // $("#Ractive").animate({color: "rgb(200,200,200)"}, 1000);

        // Ractive.style.display="block";
        Ractive.classList.add("opacShadow2");
        Rregion.classList.remove("opacShadow2");
        Rgraph.classList.remove("opacShadow2");

        stBRline.style.display="block";
        stBRline2.style.display="block";

        stBRshadow.classList.add("opacShadow");

        stBRbox.style.display="block";
        stBRboxfill.style.display="block";
        stBRcircle.style.display="block";

       
        $("#Rselector").css({
            color: "rgba(200,200,200,0.1)",
            fontSize: "15px",
            left: "198px",
            top: "111px",
            transition: "1s ease"
        });
        
        $("#Rcases").css({
            color: "rgb(200,200,200)",
            fontSize: "18px",
            left: "307px",
            top: "154px",
            transition: "1s ease"
        });
        $("#RTgraph").css({
            color: "rgba(200,200,200,0.1)",
            fontSize: "15px",
            left: "824px",
            top: "116px",
            transition: "1s ease"

        });
        $("#Rreset").css({
            color: "rgba(200,200,200,0.1)",
            fontSize: "15px",
            left: "622px",
            top: "116px",
            transition: "1s ease"

        });

        // reset
        $(".stTR3").fadeOut(1000);
        $(".stTR3line").fadeOut(1000);
        // $(".stTR3background").fadeOut(1500);
        stTR3background.classList.remove("opacShadow");

        // graphs
        $(".stTR5").fadeOut(1000);
        $(".stTR5line").fadeOut(1000);
        // $(".stTR5background").fadeOut(500);
        stTR5background.classList.remove("opacShadow");
       
    });


    /* GRAPHS */
    const stTR5 = document.querySelector(".stTR5");
    const stTR5line = document.querySelector(".stTR5line");
    const stTR5background = document.querySelector(".stTR5background");
    RTgraph.addEventListener("click", function() {
        
        $("#Rselector").css({
            color: "rgba(200,200,200,0.1)",
            fontSize: "15px",
            left: "198px",
            top: "111px",
            transition: "1s ease"
        });
        $("#Rcases").css({
            color: "rgba(200,200,200,0.1)",
            fontSize: "15px",
            left: "407px",
            top: "111px",
            transition: "1s ease"

        });
        $("#RTgraph").css({
            color: "rgb(200,200,200)",
            fontSize: "18px",
            left: "706px",
            top: "158px",
            transition: "1s ease"

        });
        $("#Rreset").css({
            color: "rgba(200,200,200,0.1)",
            fontSize: "15px",
            left: "622px",
            top: "116px"
        });

        stTR5.style.display="block";
        stTR5line.style.display="block";
        // stTR5background.style.display="block";
        stTR5background.classList.add("opacShadow");


        // reset
        $(".stTR3").fadeOut(1000);
        $(".stTR3line").fadeOut(1000);
        // $(".stTR3background").fadeOut(1500);
        stTR3background.classList.remove("opacShadow");

        
        // selector
        Rst3.forEach((e, i) => {
            $(".st3TLL").fadeOut(500);
        });
        $(".st3TLL2").fadeOut(500);
        $(".st3TLL3").fadeOut(500);

        
        // $(".st3TLLcircle").fadeOut(500);
        // $(".st3TLLcircle2").fadeOut(500);
        Rst3circle.classList.remove("opacShadow2circ");
        Rst3circle2.classList.remove("opacShadow2circ");

        Rst3shadow.classList.remove("opacShadow");

        $(".st3TLLcircTOP").fadeOut(500);
       

        // active
        columns.forEach((e, i) => {
            columns[i].classList.remove("opacShadow3");
        });
        circles.forEach((e, i) => {
            circles[i].classList.remove("opacShadow3");
        });

        $(".stBRline").fadeOut(1000);
        $(".stBRline2").fadeOut(1000);
        $(".stBRbox").fadeOut(1000);
        $(".stBRboxfill").fadeOut(1000);
        $(".stBRcircle").fadeOut(1000);
        // $(".stBRshadow").fadeOut(1000);
        stBRshadow.classList.remove("opacShadow");
        Ractive.classList.remove("opacShadow2");
        Rregion.classList.remove("opacShadow2");
        Rgraph.classList.remove("opacShadow2");

    });

    /* MAP RESET */
    const stTR3 = document.querySelector(".stTR3");
    const stTR3line = document.querySelector(".stTR3line");
    const stTR3background = document.querySelector(".stTR3background");
    Rreset.addEventListener("click", function() {
        $("#Rselector").css({
            color: "rgba(200,200,200,0.1)",
            fontSize: "15px",
            left: "198px",
            top: "111px",
            transition: "1s ease"
        });
        $("#Rcases").css({
            color: "rgba(200,200,200,0.1)",
            fontSize: "15px",
            left: "407px",
            top: "111px",
            transition: "1s ease"

        });
        $("#RTgraph").css({
            color: "rgba(200,200,200,0.1)",
            fontSize: "15px",
            left: "824px",
            top: "116px",
            transition: "1s ease"

        });
        $("#Rreset").css({
            color: "rgb(200,200,200)",
            fontSize: "18px",
            left: "677px",
            top: "158px",
            transition: "1s ease"

        });


        
        stTR3.style.display="block";
        stTR3line.style.display="block";
        // stTR3background.style.display="block";
        stTR3background.classList.add("opacShadow");


        // graphs
        $(".stTR5").fadeOut(1000);
        $(".stTR5line").fadeOut(1000);
        // $(".stTR5background").fadeOut(500);
        stTR5background.classList.remove("opacShadow");


        // selector
        Rst3.forEach((e, i) => {
            $(".st3TLL").fadeOut(500);
        });
        $(".st3TLL2").fadeOut(500);
        $(".st3TLL3").fadeOut(500);

        // $(".st3TLLcircle").fadeOut(500);
        // $(".st3TLLcircle2").fadeOut(500);
        Rst3circle.classList.remove("opacShadow2circ");
        Rst3circle2.classList.remove("opacShadow2circ");

        Rst3shadow.classList.remove("opacShadow");

        $(".st3TLLcircTOP").fadeOut(500);
       
        // active
        columns.forEach((e, i) => {
            columns[i].classList.remove("opacShadow3");
        });
        circles.forEach((e, i) => {
            circles[i].classList.remove("opacShadow3");
        });

        $(".stBRline").fadeOut(1000);
        $(".stBRline2").fadeOut(1000);
        $(".stBRbox").fadeOut(1000);
        $(".stBRboxfill").fadeOut(1000);
        $(".stBRcircle").fadeOut(1000);
        // $(".stBRshadow").fadeOut(1000);
        stBRshadow.classList.remove("opacShadow");
        Ractive.classList.remove("opacShadow2");
        Rregion.classList.remove("opacShadow2");
        Rgraph.classList.remove("opacShadow2");


    });
    }

    
};

export default svg;