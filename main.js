const { app, BrowserWindow, ipcMain } = require('electron')
const { createMainWindow } = require('./main/main')
const { createCrmWindow } = require('./subs/crm.page')
const { createWpsWindow } = require('./subs/wps.page')
const path = require('path')

//app.commandLine.appendSwitch()

// 启动首页渲染页面
app.whenReady().then(() => {
  createMainWindow()

  app.on('activate', function() {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })
})

// 关闭app
app.on('window-all-closed', () => {
  if (process.platform === 'darwin') {
    app.quit()
  }
})

let crmWindow, wpsWindow

// 主进程监听openWindow事件，用于打开其他渲染进程
ipcMain.handle('openWindow', (event, ...args) => {
  switch(args[0]) {
    case 'crm':
      crmWindow = createCrmWindow()
      break;
    case 'wps':
      wpsWindow = createWpsWindow()
    default:
      break;
  }
})
