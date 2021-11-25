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
      // 这个参数是为了处理无法识别 require 函数的报错
      contextIsolation: false
    }
  })
  // mainWindow.webContents.openDevTools()
  mainWindow.loadFile('main/index.html')
}

module.exports.createMainWindow = createWindow

