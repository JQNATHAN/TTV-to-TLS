var contextMenuItem = {
    "id" : "goToLS",
    "title" : "Open Stream in TwitchLS",
    "contexts": ["all"]
};
  
  chrome.contextMenus.onClicked.addListener(onClickHandler);
  
  function onClickHandler(info, tab) {
    var link = document.location.href.split('/');
    window.location.replace(`https://twitchls.com/${link[3]}`)
  };
  