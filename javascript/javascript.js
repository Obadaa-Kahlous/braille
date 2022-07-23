/// When you click everywhere in the document
$(document).click(function (event) {
    if (!$(event.target).is('.navbar-collapse *')) {
      $('.navbar-collapse').collapse('hide');
    }
});