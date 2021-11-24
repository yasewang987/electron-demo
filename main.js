const { app, BrowserWindow, ipcMain } = require('electron')
const { createMainWindow } = require('./main/main')
const { createCrmWindow } = require('./subs/crm.page')
const { createWpsWindow } = require('./subs/wps.page')
const path = require('path')

app.whenReady().then(() => {
  createMainWindow()

  app.on('activate', function() {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })

  // runWPS()
})

app.on('window-all-closed', () => {
  if (process.platform === 'darwin') {
    app.quit()
  }
})

const exec=require('child_process').exec

function runWPS() {
  let wpsProcess = exec('open -a wpsoffice.app')
}

let crmWindow, wpsWindow

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
