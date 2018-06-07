function checkLinks() {
  $(".link").each(function() {
    /*console.log("Checked Link: " + $(this).html());
    console.log("Height: " + $(this).height());*/
    const fontsize = $(this).css("font-size");
    if($(this).height() > 1.4 * parseFloat(fontsize.substring(0, fontsize.length - 2))) {
      $(this).removeClass("linelink");
      $(this).addClass("multilinelink");
    } else {
      $(this).removeClass("multilinelink");
      $(this).addClass("linelink");
    }
  });
}

var delays = [100, 100, 100, 200, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
var writeString = "Hi, ich bin Marvin.";
var flickerHTML = "<span id=\"flickering\">|</span>";

function drawNextCharacter(i) {
  if (i < delays.length) {
    $("#spell").html(writeString.substring(0, i + 1));
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

let threshold = 50;

function fadeIn() {
  //console.log($(window).scrollTop());
  var viewPortSize = $(window).height();
  $(".fade").each(function() {
    //console.log(this.tagName);
    var dies = $(this);
    if ($(window).scrollTop() + viewPortSize - threshold >= dies.position().top) {
        setTimeout(function() {
          dies.css('visibility', 'visible').hide().fadeIn();
        }, 100);
        dies.removeClass('fade');
    }
  });
}

$(document).ready(function() {
  //$('div.fade').fadeIn(750).removeClass('div.fade');
  setTimeout(checkLinks, 100);
  $(window).resize(checkLinks);
  //console.log('loaded');

  //Position "Hi, I'm Marvin." correctly.
  var test = $("#always-hidden");
  headermarginleft = 45 - (test.width() / $("#content").width()) * 45;
  $("#name").css({"margin-left": headermarginleft + "vw"});
  console.log("text.width(): " + test.width()); // + " $(\"#headerdiv.width()\"): " + $("#headerdiv").width()
  test.html('');
});

$(window).ready(function() {
  $("#name").ready(function() {
    $("#flickering").html("|");
    drawNextCharacter(0);
  });

  setTimeout(fadeIn, 100);
  $(window).scroll(fadeIn);
});
