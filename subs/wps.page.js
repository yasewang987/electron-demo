const { BrowserWindow } = require('electron')

let subWindow

function createWindow() {
  if (subWindow) {
    subWindow.show()
  } else {
    subWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        // contextIsolation: false
      }
    })

    subWindow.on('closed', () => {
      subWindow = undefined
    })
    subWindow.webContents.openDevTools()
    subWindow.loadURL('http://wps.ifuncun.cn/official')
  }

  return subWindow
}

module.exports.createWpsWindow = createWindow