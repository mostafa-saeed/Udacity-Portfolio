const HOST_NAME = new RegExp(location.hostname);
let linksArray = document.getElementsByTagName('a');

// Open all external links in a new window
for (i = 0; i < linksArray.length; i++) {
    if (!HOST_NAME.test(linksArray[i].href)) {
        linksArray[i].target = '_blank';
    }
}