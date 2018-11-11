console.log("Connected");

$('a').on('click', function (e) {
    console.log($(this).attr("href"));

    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 600, 'swing');
});



