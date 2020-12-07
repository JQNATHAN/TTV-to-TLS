var contextMenus = {};

contextMenus.createCounterString = 
    chrome.contextMenus.create(
        {"title":"Open with TwitchLS",
        "contexts" : ["all"], "id": "trihard", "targetUrlPatterns": ["https://twitch.tv/*"]
        },
        function (){
            if(chrome.runtime.lastError){
                console.error(chrome.runtime.lastError.message);
            }
        }
    );

chrome.contextMenus.onClicked.addListener(onClickHandler);


  
function onClickHandler(info, tab) {
  console.log(document.location.href.split('/'))
  var link = document.location.href.split('/');
  chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    console.log(tablink)
    if(tablink.includes('twitch.tv')){
      console.log('redirecting')
      chrome.tabs.update({url: `https://twitchls.com/${tablink.split('/')[3]}`});

    }
    
  }); 
  
};