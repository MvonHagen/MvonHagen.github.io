var x, y, isInPortrait, viewWidth, viewHeight, headermarginleft, header1;
var delays = [70, 70, 70, 300, 70, 70, 70, 100, 70, 70, 70, 70, 70, 100];
var header1text = "Hi, I'm Simon.";

function checkLinks() {
  $(".link").each(function() {
    var fontsize = $(this).css("font-size");
    if($(this).height() > 1.21 * fontsize.substring(0, fontsize.length - 2)) {
      $(this).removeClass("linelink");
      $(this).addClass("multilinelink");
    } else {
      $(this).removeClass("multilinelink");
      $(this).addClass("linelink");
    }
  });
}

function setFontSizeAndWidths() {
  x = window.innerWidth;
  y = window.innerHeight;
  isInPortrait = y > x;
  var normaltext = $(".normaltext");
  var fontsize, intromargin, buttonclass;
  if(isInPortrait) {
    fontsize = 0.06 * x;
    intromargin = "7vh";
    buttonclass = "center";
  } else {
    fontsize = 0.017 * x;
    intromargin = "10vh";
    buttonclass = "right";
  }
  $('.furtherbuttons').removeClass().addClass("furtherbuttons " + buttonclass);
  normaltext.css({'font-size': fontsize + "px"});
  $(".sectionheader").css({'font-size': fontsize * 1.5 + "px"});
  $(".introdiv").css({'margin': intromargin + " 4vw"});
  var readmoreheight = $('#readmore').outerHeight() + 2;
  //$(".googleplay").css({'height': readmoreheight + "px", 'width': (readmoreheight * 3.357) + "px"});

  var div = $("#headerdiv");
  viewWidth = $(document).width(); //div.clientWidth
  viewHeight = div.height();
  /*$("#headertextdiv").css({"width": viewWidth, "height": viewHeight});
  $("#background").css({"width": viewWidth, "height": viewHeight});*/
}

function both() {
  setFontSizeAndWidths();
  checkLinks();
}

function drawNextCharacter(i) {
  if (i < header1text.length) {
    $("#header").text(header1text.substring(0, i + 1));
    setTimeout(function() {
      drawNextCharacter(i + 1);
    }, delays[i]);
  } else {
    var leng = 300;
    $("#flickering").animate({color: "#000"}, leng)
                    .animate({color: "#fff"}, leng)
                    .animate({color: "#000"}, leng)
                    .animate({color: "#fff"}, leng)
                    .animate({color: "#000"}, leng);
    setTimeout(function(){
      $("#flickering").html("");
    }, 1600);
  }
}

$(window).load(function() {
  both();
  window.onresize = both;
  $('div.hidden').fadeIn(500).removeClass('hidden').addClass('preventFontAdjustment');

  $("#background").ready(function() {
    $("#background").css({"width": viewWidth, "height": viewHeight});
  });

  //Position "Hi, I'm Simon" correctly.
  var test = $("#always-hidden");
  test.css({"font-size": "7vw"});
  headermarginleft = 50 - (test.width() / $("#headerdiv").width()) * 50;
  $("#firstheader").css({"margin-left": headermarginleft + "vw"});
  test.css({"display": "none"});
  console.log("text.width(): " + test.width() + " $(\"#headerdiv.width()\"): " + $("#headerdiv").width());

  setTimeout(function() {
    drawNextCharacter(0);
  }, 570);

  $("#playbadge").click(function() {
    window.location.href = "https://play.google.com/store/apps/details?id=de.jamesbeans.quadrasolve&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1";
  });
});
