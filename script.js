// get webview and insert custom CSS

const webview = document.querySelector('webview');
let isMenuOpen = false;

webview.addEventListener('did-finish-load', () => {
    const webview = document.getElementById('player');


    // TODO rewrite this
    const hiddenMenuStyle = '#masthead-container.ytd-app{position:absolute;top:1000px;}'
        + '#page-manager.ytd-app{margin-top:0;}'
        + '#top{margin-top:0}'
        + 'ytd-watch-flexy:not([theater]):not([fullscreen]) #primary.ytd-watch-flexy, ytd-watch-flexy:not([theater]):not([fullscreen]) #secondary.ytd-watch-flexy{padding-top:0}';
    const defaultMenuStyle = '#masthead-container.ytd-app{position:relative;top:0;}'
        + '#page-manager.ytd-app{margin-top:0;}'
        + '#top{margin-top:0}'
        + 'ytd-watch-flexy:not([theater]):not([fullscreen]) #primary.ytd-watch-flexy, ytd-watch-flexy:not([theater]):not([fullscreen]) #secondary.ytd-watch-flexy{padding-top:0}';

    document.getElementById('menu-toggle').onclick = () => {
        if (isMenuOpen) {
            webview.executeJavaScript('var sheet = document.createElement("style");sheet.innerHTML = "' + hiddenMenuStyle + '";document.body.appendChild(sheet);');
        } else {
            webview.executeJavaScript('var sheet = document.createElement("style");sheet.innerHTML = "' + defaultMenuStyle + '";document.body.appendChild(sheet);');
        }
    };
})

