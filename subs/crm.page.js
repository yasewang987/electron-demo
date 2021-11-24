const { BrowserWindow } = require('electron')

let crmWindow

function createWindow() {
  if (crmWindow) {
    crmWindow.show()
  } else {
    crmWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        // contextIsolation: false
      }
    })

    crmWindow.on('closed', () => {
      crmWindow = undefined
    })
    crmWindow.webContents.openDevTools()
    crmWindow.loadURL('http://crm.ifuncun.cn:8080/funcun')
  }

  return crmWindow
}

module.exports.createCrmWindow = createWindow