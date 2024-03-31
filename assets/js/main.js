jQuery('#FWDrop').raindrops({
    color:'#000',
    canvasHeight: 70,
    density: 0.04,
    frequency: 5,
    rippleSpeed: 0.05,
    waveLength: 700,
});
jQuery('#CSDrop').raindrops({
    color:'#000',
    canvasHeight: 70,
    density: 0.04,
    frequency: 5,
    rippleSpeed: 0.05,
    waveLength: 700,
});


$('.cf-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dot: true,
    navText: [
        '<i class="fa-solid fa-angle-left"></i>',
        '<i class="fa-solid fa-angle-right"></i>',
    ],
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 2
        }
    }
});