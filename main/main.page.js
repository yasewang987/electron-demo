const render = require('electron').ipcRenderer

var btn = document.getElementById('crmbtn')
btn.onclick = openCrm
function openCrm() {
  console.log("123")
  // 渲染进程与主进程通讯
  render.invoke('openWindow', 'crm')
}

var wpsBtn = document.getElementById('wpsbtn')
wpsBtn.onclick = openWPS
function openWPS() {
  // 渲染进程与主进程通讯
  render.invoke('openWindow', 'wps')
}