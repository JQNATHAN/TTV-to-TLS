function goToLS(){
    var link = document.location.href.split('/');
    window.location.replace(`https://twitchls.com/${link[3]}`)
}


chrome.contextMenus.onClicked.addListener(goToLS)