$('a').on('click', function (e) {
    console.log($(this).attr("href"));

    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 600, 'swing');
});

$(function () {
    var pricing = $('#pricing');
    var backgrounds = [
        "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('assets/craftsman.jpg')",
        "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('assets/1.jpg')",
        "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('assets/2.jpg')",
        "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('assets/3.jpg')",
        "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('assets/4.jpg')",
    ];
    var current = 0;

    function nextBackground() {
        pricing.css({
            'background': backgrounds[current = ++current % backgrounds.length],
            'background-size': 'cover'
        });
        setTimeout(nextBackground, 5000);
    }   
    setTimeout(nextBackground, 5000);
    pricing.css({
        'background': backgrounds[0],
        'background-size': 'cover'
    });
});

// $('#pricing').css({
//     "background": "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('assets/craftsman.jpg')",
//     "background-size": "cover"
// });