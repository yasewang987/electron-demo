const render = require('electron').ipcRenderer

var btn = document.getElementById('crmbtn')

btn.onclick = openCrm

function openCrm() {
  console.log("123")
  render.invoke('openWindow', 'crm')
}

var wpsBtn = document.getElementById('wpsbtn')
wpsBtn.onclick = openWPS
function openWPS() {
  render.invoke('openWindow', 'wps')
}