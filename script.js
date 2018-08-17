// get webview and insert custom CSS

// const webview = $('#player');
const webview = document.querySelector('webview');
// let isMenuOpen = false;

webview.addEventListener('did-finish-load', () => {
    webview.insertCSS(
        '#masthead-container.ytd-app{position:absolute;top:1000px;}'
        + '#page-manager.ytd-app{margin-top:0;}'
        + '#top{margin-top:0}'
        + 'ytd-watch-flexy:not([theater]):not([fullscreen]) #primary.ytd-watch-flexy, ytd-watch-flexy:not([theater]):not([fullscreen]) #secondary.ytd-watch-flexy{padding-top:0}'
    );

    // $('#menu-toggle').on('click', () => {
    //     console.log('togglin')
    //     if (isMenuOpen) {
    //         webview.insertCss('#masthead:{display:none;}');
    //     } else {
    //         webview.insertCss('#masthead:{display:block;}');
    //     }
    //     isMenuOpen = !isMenuOpen;
    // })
})

