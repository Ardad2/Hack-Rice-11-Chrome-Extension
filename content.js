chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === 'clicked_browser_action')
    {
        var links = document.getElementsByTagName('a');
        chrome.runtime.sendMessage({'message': 'open_new_tab', 'url': links[0]['href']});
    }
});
