import iosDetect from './modules/detect';
import menus from './modules/menus';
import videoBanner from './modules/video-banner';
import videoBox from './modules/video-box';
import owlSlide from './modules/sliders';
import parallax from './modules/parallax';
import scrollreveal from './modules/scrollreveal';
import smoothscroll from './modules/smoothscroll';
import callbackjs from './modules/callbackjs';
import filterjs from './modules/filterjs';
import markinteractive from './modules/markinteractive';
import delbtn from './modules/delbtn';
import popupclose from './modules/popupclose';


(($) => {
    iosDetect();
   
    videoBanner();
    menus();
    owlSlide();
    parallax();
    scrollreveal();
    smoothscroll();
    callbackjs();
    filterjs();
    markinteractive();
    delbtn();
    popupclose();
     videoBox();
})(jQuery);

