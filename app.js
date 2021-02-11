const { app, BrowserWindow } = require('electron');
const BASENAME = `file://${__dirname}/dist/convertiseo`;
let mainWindow;

function createWindow(title = 'Convertiseo', resizable = false) {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#eee',
        icon: `${BASENAME}/assets/icon.png`,
        title: title,
        resizable,
    });

    mainWindow.loadURL(`${BASENAME}/index.html`);
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => {
        mainWindow = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (!mainWindow) {
        createWindow();
    }
})
