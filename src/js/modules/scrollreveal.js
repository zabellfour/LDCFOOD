var scrollreveal = function() {
    window.sr = ScrollReveal();
    if ($('.section-element').length) {
        sr.reveal('.section-element', { duration: 1000, delay: 100 });
    }
    
    if ($('.sr-left').length) {
        sr.reveal('.sr-left', { duration: 1200, origin: 'left', distance: '120px', delay: 100 });
    }
    if ($('.sr-right').length) {
        sr.reveal('.sr-right', { duration: 1200, origin: 'right', distance: '120px', delay: 100 });
    }
    if ($('.sr-bottom').length) {
        sr.reveal('.sr-bottom', { duration: 1200, origin: 'bottom', distance: '120px', delay: 100 });
    }
};
export default scrollreveal;