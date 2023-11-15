$(() => {
  const currentLang = window.location.pathname.match(/\/(\w{2})\//)[1];

  $('header').first().load(`components/header/${currentLang}/header.html`);
  $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'components/header/header.css') );
});
