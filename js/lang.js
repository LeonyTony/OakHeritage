$(() => {
  
})

const changeLang = (lang) => {
  window.location.pathname = window.location.pathname.replace(/^\/(\w{2})\//, lang);
};
