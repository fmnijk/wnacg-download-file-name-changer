chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
    var url_str = item.url
    if (url_str.match('wnacg.download/down/*')) {
        var url = new URL(url_str);
        newName = url.searchParams.get("n") + '.zip';
        suggest({filename: newName, conflictAction: 'overwrite' });
    }
});