var total = 53;
var correct = 53;
var progress = 100;
$( document ).ready(function() {

  // when input leaves focus it checks it validates the input

  $("input").focus(function() {
    console.log('in');
  }).blur(function() {
    console.log('out');

    if(this.value.toLowerCase() == this.name.toLowerCase()){
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
      item.addClass("border_green", 1000, "easeOutBounce");
      correct++;
      progress=correct/total*100; 
      $('#progress_bar').css("width", progress + "%");
    } else {

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

function cheat () {
  addBack("eonR");
  addBack("eraR");
  addBack("periodR");
  addBack("epochR");
  addBack("ageR");
  validate("eonR");
  validate("eraR");
  validate("periodR");
  validate("epochR");
  validate("ageR");

}

function uncheat () {
  addBack("eonR");
  addBack("eraR");
  addBack("periodR");
  addBack("epochR");
  addBack("ageR");
}

// var ss = new ScrollSpy({
//      mode: 'vertical',
//      onTick: function(position,state,enters,leaves) {
//           $(".header").style.left = -position.x+"px";
//           $(".footer").style.left = -position.x+"px";
//      },
//      container: window
// });

