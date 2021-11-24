const { BrowserWindow } = require('electron')

let mainWindow

function createWindow() {
  const mainWindow = new BrowserWindow({
    icon: "main/bootstrap.png",
    width: 1024,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  mainWindow.webContents.openDevTools()
  mainWindow.loadFile('main/index.html')
}

module.exports.createMainWindow = createWindow

