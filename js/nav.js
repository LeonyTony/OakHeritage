let navPages = {
  "militaryNav": "militaryHeritage.html",
  "museumsNav": "museums.html",
  "cultureNav": "cultureHeritage.html",
  "homeNav": "index.html"
};

$(() => {
  $('nav').first().load('components/nav/nav.html');
  $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'components/nav/nav.css') );
  
  $(document).on('click', '.menuItem', (e) => {
    let id = $(e.target).attr('id');
    window.location.href = navPages[id] ?? 'index.html';
  });
});
