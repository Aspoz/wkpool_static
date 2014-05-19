//= require jquery
//= require nouislider
//= require jquery.modal

document.addEventListener("touchstart", function(){}, true);

function rangeSlider() {
  $(function(){
    var Link = $.noUiSlider.Link;

    $('.rangeslider').noUiSlider({
      start: [ 15, 65 ],
      step: 5,
      behaviour: 'snap',
      range: {
        'min': 5,
        'max': 65
      },
      connect: true,
      serialization: {
        lower: [
          new Link({
            target: $('.slider').find('.min'),
          }),
          new Link({
            target: $('.slider').find('.mintext'),
            method: "text"
          })
        ],
        upper: [
          new Link({
            target: $('.slider').find('.max')
          }),
          new Link({
            target: $('.slider').find('.maxtext'),
            method: "text"
          })
        ],
        format: {
          decimals: 0
        }
      }
    });
  });
}

function filterHandle() {
  $('.filter-handle').on('click', function() {
    var $fa = $(this).find('.fa');
    if($fa.hasClass('fa-caret-right')) {
      $fa.removeClass('fa-caret-right').addClass('fa-caret-down');
    } else {
      $fa.removeClass('fa-caret-down').addClass('fa-caret-right');
    }
    $(this).next().toggleClass('show');
  });

  $('.form-search input').focus( function() {
    $(this).addClass('active');
  });

  $('.form-search input').blur( function() {
    $(this).removeClass('active');
  });
}


function poolNewPassword() {
  $input = $("input:radio[name='pool[is_public]']");
  $.each($input,function(k,v) {
    togglePasswordFields(v);
  });

  $input.on('change', function() {
    togglePasswordFields(this);
  });

  $('a.togglepassword').on('click', function(e) {
    $('a.togglepassword.hide').removeClass('hide');
    $(this).addClass('hide');

    e.preventDefault();
    $('.password').each(function(){
      $this = $(this);
      if($this.hasClass('hide')) {
        $this.removeClass('hide');
      } else {
        $this.addClass('hide');
      }
    });
  });
}
function togglePasswordFields(e) {
  if(e.checked) {
    if (e.value == 'true') {
      $("#private_pool_enabled").hide();
    } else {
      $("#private_pool_enabled").show();
    }
  }
}


// flash message
function flashMessage() {
  close = document.getElementById("flashClose");
   close.addEventListener('click', function() {
     flash = document.getElementById("flash");
     flash.style.display = 'none';
   }, false);
}

function contentflashMessage() {
  close = document.getElementById("flashClose");
   close.addEventListener('click', function() {
     flash = document.getElementById("contentflash");
     flash.style.display = 'none';
   }, false);
}

$(function() {
  $('#nav-open-btn, #nav-close-btn').on('click', function(e){
    e.preventDefault();
    $('#mobile-nav').toggleClass('closed');
  });
});