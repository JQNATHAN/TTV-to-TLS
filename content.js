function elementLoaded(el, cb) {
    if ($(el).length) {
        // Element is now loaded.
        cb($(el));
    } else {
        // Repeat every 500ms.
        setTimeout(() => {
            elementLoaded(el, cb);
        }, 500);
    }
}

elementLoaded(".channel-info-content", (_el) => {
    console.log('Loaded a stream')
    url = window.location.pathname
    chrome.storage.sync.get(['twitchuser'], function(result) {
        console.log(result.twitchuser.toLowerCase())
        console.log(url.substring(1))
        if(result.twitchuser)
        {
            if(result.twitchuser.toLowerCase() === url.substring(1))
            {
                return
            }
            else
            {
                window.location.replace("https://twitchls.com" + url)
            }

        }
      });
    //window.location.replace("https://twitchls.com" + url)
    
})
elementLoaded('[data-a-target="user-display-name"]', (_el) => {
    username = _el[0].innerHTML
    if(username){
        chrome.storage.sync.set({twitchuser: username})
        console.log('Set username to: ' + username)
    }
})