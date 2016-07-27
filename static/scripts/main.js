'use strict';

var App = App || {};

App = {
  init: function () {
    console.log('The Voice of the West. The Voice of San Francisco and the Bay Area.');
  }
};

// Twitter Intent
(function() {
  if (window.__twitterIntentHandler) return;
  var intentRegex = /twitter\.com\/intent\/(\w+)/,
      windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes',
      width = 550,
      height = 420,
      winHeight = screen.height,
      winWidth = screen.width;

  function handleIntent(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        m, left, top;

    while (target && target.nodeName.toLowerCase() !== 'a') {
      target = target.parentNode;
    }

    if (target && target.nodeName.toLowerCase() === 'a' && target.href) {
      m = target.href.match(intentRegex);
      if (m) {
        left = Math.round((winWidth / 2) - (width / 2));
        top = 0;

        if (winHeight > height) {
          top = Math.round((winHeight / 2) - (height / 2));
        }

        window.open(target.href, 'intent', windowOptions + ',width=' + width +
                                           ',height=' + height + ',left=' + left + ',top=' + top);
        e.returnValue = false;
        e.preventDefault && e.preventDefault();
      }
    }
  }

  if (document.addEventListener) {
    document.addEventListener('click', handleIntent, false);
  } else if (document.attachEvent) {
    document.attachEvent('onclick', handleIntent);
  }
  window.__twitterIntentHandler = true;
}());

$(".begin").click(function() {
        $('html, body').animate({
            scrollTop: $("#highland").offset().top - 35
        }, 500);
    });

    $(".fa-info-circle").click(function() {
      $('#img-info').toggle();
  });

    // init controller
  var controller = new ScrollMagic.Controller({globalSceneOptions: {reverse: false}});

  // build scenes
  new ScrollMagic.Scene({triggerElement: "#show1"})
          .setClassToggle("#showquote1", "show") // add class toggle
          .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#show2"})
          .setClassToggle("#showquote2", "show") // add class toggle
          .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#show3"})
          .setClassToggle("#showquote3", "show") // add class toggle
          .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#show4"})
          .setClassToggle("#showquote4", "show") // add class toggle
          .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#show5"})
          .setClassToggle("#showquote5", "show") // add class toggle
          .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#show6"})
          .setClassToggle("#showquote6", "show") // add class toggle
          .addTo(controller);

  $(".title").delay(1500).animate({"opacity": "1"}, 2000);