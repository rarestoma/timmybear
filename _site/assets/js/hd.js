

$(document).ready(function(){
    // 
    // $('.tabs-section .nav-tabs .nav-item .nav-link').click(function(){
    //   setTimeout(function(){
    //     $('.big-box-1').addClass('hover');
    //   },500);
    // });

    $(".btn-arrow-down").click(function() {
    $('html,body').animate({
        scrollTop: $(".tabs-section").offset().top},
        'slow');
    });

    $(".btn-arrow-up").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-shop-carousel").offset().top},
        'slow');
    });

    $(".btn-box").click(function(){
      $(this).closest(".big-box-1").addClass("before-buy");
    });

    $(".btn-modify").click(function(){
      $(this).closest(".big-box-1").removeClass("before-buy");
    });

    //quantity add and remove buttons

    var quantitiy=0;
   $('.btn-plus').click(function(){

        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

            $('#quantity').val(quantity + 1).change();


            // Increment

    });

     $('.btn-minus').click(function(){

        // Get the field name
        var quantity = parseInt($('#quantity').val());


        // If is not undefined

            // Increment

            if(quantity>1){
            $('#quantity').val(quantity - 1).change();
            }
    });

    //Update the add to cart inputs

    $('#sizeDonut').change(function() {
        $('#size-stabil').val($(this).val());
    });

    $('#quantity').change(function() {
        $('#qty-stabil').val($(this).val());
        $('#price').val($(this).val() * 39);
    });


});


$(document).on('click', '.navbar-toggler', function(){
    $toggle = $(this);
    if($('html').hasClass('nav-open')){
        $('html').removeClass('nav-open');

        $('.close-layer').remove();
        setTimeout(function(){
            $toggle.removeClass('toggled');
        }, 430);

    } else {

        setTimeout(function(){
            $toggle.addClass('toggled');
        }, 430);

        var $layer = $('<div class="close-layer"></div>');

        if($('body').find('.main-panel').length != 0 ){
            $layer.appendTo(".main-panel");

        } else if( ($('body').hasClass('off-canvas-sidebar') )) {
            $layer.appendTo(".wrapper-full-page");
        }

        setTimeout(function(){
            $layer.addClass('visible');
        }, 100);

        $layer.click(function() {
            $('html').removeClass('nav-open');
            $layer.removeClass('visible');

             setTimeout(function(){
                $layer.remove();
                $toggle.removeClass('toggled');

             }, 400);
        });

        $('html').addClass('nav-open');
        navbar_initialized = 1;
    }
});

$(window).resize(function(){

  hd.initSidebarsCheck();

seq = seq2 = 0;
});
