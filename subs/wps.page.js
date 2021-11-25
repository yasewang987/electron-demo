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
      },
    })

    // 关闭页面
    subWindow.on('closed', () => {
      subWindow = undefined
      runWPS()
    })
    // subWindow.webContents.openDevTools()
    subWindow.loadURL('http://wps.ifuncun.cn/official')
  }

  return subWindow
}

const exec = require('child_process').exec
let wpsProcess
// 启动WPS应用程序
function runWPS() {
  switch (process.platform) {
    case 'linux':
      // linux启动wps
      break;
    case 'darwin':
      // mac启动wps
      wpsProcess = exec('open -a wpsoffice.app')
      break;
    case 'win32':
      //  win启动wps，这里有空格，需要用双引号把地址包起来
      wpsProcess = exec('"D:\\wps\\WPS Office\\ksolaunch.exe"')
      break;
    default:
      break;
  }
}

module.exports.createWpsWindow = createWindow