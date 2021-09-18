chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            //Tabs which satisfy these conditions: 

            var activeTabs = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {'message': 'clicked_browser_action'})


        }); //Figure out which tab I'm on
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.message == 'open_new_tab')
    {
        chrome.tabs.create({'url': request.url});
    }
});
