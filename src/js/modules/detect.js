var iosDetect = function() {

      function iOS() {

	        var iDevices = [
	            'iPad Simulator',
	            'iPhone Simulator',
	            'iPod Simulator',
	            'iPad',
	            'iPhone',
	            'iPod'
	        ];

	        if (!!navigator.platform) {
	            while (iDevices.length) {
	                if (navigator.platform === iDevices.pop()) { return true; }
	            }

	        }

	        return false;
	    }
	    if (iOS()) {
	        $('body').addClass('ios');



	    } else {
	        var el = $('.video-box video');
	        for (var t = 0; t < el.length; t++) {
	            el[t].pause();
	        }
	    }

};
export default iosDetect;