let navPages = {
  "militaryNav": "militaryHeritage.html",
  "museumsNav": "museums.html",
  "cultureNav": "cultureHeritage.html",
  "homeNav": "index.html"
};

$(() => {
  const currentLang = window.location.pathname.match(/\/(\w{2})\//)[1];

  $('nav').first().load(`components/nav/${currentLang}/nav.html`);
  $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'components/nav/nav.css') );
  
  $(document).on('click', '.menuItem', (e) => {
    let id = $(e.target).attr('id');
    window.location.pathname = `OakHeritage/${currentLang}/${navPages[id] ?? 'index.html'}`;
  });
});
