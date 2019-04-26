window.addEventListener("load", main, false);

function main(e) {
  const jsInitCheckTimer = setInterval(jsLoaded, 5000);
  function jsLoaded() {
    if (document.getElementsByClassName('p-message_pane_banner') != null) {
      clearInterval(jsInitCheckTimer);
      let banner = document.getElementsByClassName('p-message_pane_banner');
      banner[0].style.display = 'none';
    }
  }
}