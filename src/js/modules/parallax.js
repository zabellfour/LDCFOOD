var parallax = function() {

    new Parallaxify({
        elements: ".parallax",
        backgroundYMin: 60,
        backgroundYMax: 0
    }).registerUpdate();

};
export default parallax;