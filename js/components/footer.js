const langs = [
  'ru',
  'en',
  'by'
];

$(() => {
  const currentLang = window.location.pathname.match(/^\/(\w{2})\//)[1];

  $('footer').first().load(`/components/footer/${currentLang}/footer.html`, () => {

    langs.forEach((value) => $('footer .lang').append(`<span id='${value}'>${value}</span>`));

    $(`footer #${currentLang}`).addClass('current');

    $('footer').on('click', '.lang span', (e) => {
      window.location.pathname = window.location.pathname.replace(currentLang, $(e.target).attr('id'));
    })

  });
  $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/components/footer/footer.css') );
});
