let navPages = {
  "militaryNav": "militaryHeritage.html",
  "museumsNav": "museums.html",
  "cultureNav": "cultureHeritage.html",
  "homeNav": "index.html"
};

$(() => {
  $('nav').first().load('components/nav/nav.html');
  $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'components/nav/nav.css') );

  $('.menuItem').each((_, element) => {
    element.click(() => window.location.href = navPages[element.id] ?? "index.html")
  });
});
