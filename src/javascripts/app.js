import prettyCode from '../../bower_components/google-code-prettify/bin/run_prettify.min.js'
import '../../bower_components/material-design-lite/material.min.js'
import '../../bower_components/jquery/dist/jquery.min.js'

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(function() {
    prettyCode.prettyPrint();
});


function init() {
  $('.show-buddy').click(function() {
    var list = $("[data-toggle=" + this.id);
    list.toggleClass('hide');
  });
}

$(document).ready(init);