



function removeColumnContent(type) {
  // type comes from the button, ex: eonR
  $('.' + type).each(function(i, el) {
    el.value = "";
  })
}

function validate(type) {
  $('.' + type).each(function(i, el) {
    var item = $(el);
    if (el.value == el.name) {
      item.css({color: 'green'})
    } else {
      item.css({color: 'red'})
    }
  })
}

function addBack(type) {
  $('.' + type).each(function(i, el) {
    el.value = el.name;

    // set colors back to to default incase they changed it by pressing
    // the validate btn
    var item = $(el);
    item.css({color: 'black'})
  })
}
