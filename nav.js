var total = 53;
var correct = 53;
var progress = 100;
$( document ).ready(function() {

  $("input").focus(function() {
    console.log('in');
  }).blur(function() {
    console.log('out');

    if(this.value == this.name){
      $(this).addClass("border_green", 1000, "easeOutBounce");
      correct++;
      progress=correct/total*100; 
      $('#progress_bar').css("width", progress + "%");
    }
    else if(this.value == ""){
      // don't do anything
    }
    else
      $(this).addClass("border_red");
  });
});




function removeColumnContent(type) {
  // type comes from the button, ex: eonR
  $('.' + type).each(function(i, el) {
    el.value = "";
    var item = $(el);
    item.removeClass("border_green");
    item.removeClass("border_red");
    item.prop('disabled', false);

    correct--;
    progress=correct/total*100; 
    $('#progress_bar').css("width", progress + "%");

    // console.log("correct: " + correct);
    // console.log("progress: " + progress);
    // console.log("total: " + total);


  })
}

function validate(type) {
  $('.' + type).each(function(i, el) {
    var item = $(el);
    if (el.value == el.name) {
      // item.css({color: 'green'})
      item.addClass("border_green");
      correct++;


    } else {
      // item.css({border: 'red'})
      item.addClass("border_red");
    }
  })
}

function addBack(type) {
  $('.' + type).each(function(i, el) {
    el.value = el.name;

    // set colors back to to default incase they changed it by pressing
    // the validate btn
    var item = $(el);
    // item.css({color: 'black'})
    item.removeClass("border_green");
    item.removeClass("border_red");
    item.prop('disabled', true);


    correct++;
    progress=correct/total*100;
    $('#progress_bar').css("width", progress + "%");

    console.log("correct: " + correct);
    console.log("progress: " + progress);
    console.log("total: " + total);


  })
}

// var ss = new ScrollSpy({
//      mode: 'vertical',
//      onTick: function(position,state,enters,leaves) {
//           $(".header").style.left = -position.x+"px";
//           $(".footer").style.left = -position.x+"px";
//      },
//      container: window
// });

