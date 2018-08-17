const {app, BrowserWindow, Menu} = require('electron')

let win

function createWindow () {
    win = new BrowserWindow({width: 1090, height: 610, frame: false, backgroundColor: '#111111'})

    win.webContents.openDevTools()

    // Remove default Windows menu
    Menu.setApplicationMenu(null)

    // and load the index.html of the app.
    win.loadFile('index.html')

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    app.quit()
})
