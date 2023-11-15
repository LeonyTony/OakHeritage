let navigate = (path) => {
  const currentLang = window.location.pathname.match(/\/(\w{2})\//)[1];
  window.location.pathname = `OakHeritage/${currentLang}/${path}`;
}
