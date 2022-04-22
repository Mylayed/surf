$(function () {
    new WOW().init();
    $('.header__slider').slick({
        speed: 500,
        fade: true,
        asNavFor: '.header__slider-dots'
    });
    $('.header__slider-dots').slick({
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider'
    });
    $('.surf__slider').slick({
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        asNavFor: '.surf__slider-card'
    });
    $('.surf__slider-card').slick({
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.surf__slider'
    });
    $('.travel__slider, .sleep__slider').slick({
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true
    });



    $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
    $('.quantity-button').on('click', function(){
        let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
        $('.summ').html('$' + summ);
    });
    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ);
    $('.shop__goods-circle').on('click', function(){
      // $('.shop__goods-circle').removeClass('active');
      $(this).toggleClass('active');
    });
});