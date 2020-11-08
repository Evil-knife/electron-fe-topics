const isDev = require('electron-is-dev');
const { app, BrowserWindow } = require('electron');

try {
  // eslint-disable-next-line global-require
  require('electron-reloader')(module);
} catch (_) {
  console.error(_);
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // eslint-disable-next-line no-unused-expressions
  isDev
    ? win.loadURL('http://localhost:8080/')
    : win.loadFile('../../dist/index.html');
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
