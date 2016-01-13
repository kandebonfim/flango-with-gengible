$('div, a, li, p, h1, h2, h3, h4, h5, h6, span, b, strong').each(function() {
  if ($(this).children().length == 0) {
    var newText = $(this).text().replace(/r/g, 'l');
    $(this).text(newText);
  };
})
