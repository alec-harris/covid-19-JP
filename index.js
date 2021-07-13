import getDatas from './Components/GetData.js';
import getDatas2 from './Components/GetData2.js';
import svg from './Components/SVG.js';

import { mq } from './Components/constants.js';

import { map } from './Components/Map/map.js';


if (mq.matches) {
    map.fitBounds([
        [128, 30],
        [146, 33]
    ]);

}; 

/* FULL SCREEN */
const toggle_full_screen = () =>
{
    if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen))
    {
        if (document.documentElement.requestFullScreen){
            document.documentElement.requestFullScreen();
        }
        else if (document.documentElement.mozRequestFullScreen){ /* Firefox */
            document.documentElement.mozRequestFullScreen();
        }
        else if (document.documentElement.webkitRequestFullScreen){   /* Chrome, Safari & Opera */
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        else if (document.msRequestFullscreen){ /* IE/Edge */
            document.documentElement.msRequestFullscreen();
        }
        else if (document.webkitEnterFullscreen){ /* iphone - NOT WORKING */
            document.documentElement.webkitEnterFullscreen();
        }
        
    }
    else
    {
        if (document.cancelFullScreen){
            document.cancelFullScreen();
        }
        else if (document.mozCancelFullScreen){ /* Firefox */
            document.mozCancelFullScreen();
        }
        else if (document.webkitCancelFullScreen){   /* Chrome, Safari and Opera */
            document.webkitCancelFullScreen();
        }
        else if (document.msExitFullscreen){ /* IE/Edge */
            document.msExitFullscreen();
        }
    };
}


$(".fa-compress").on('click', function() {
   
    toggle_full_screen();
     
});

svg();
getDatas();
getDatas2();

