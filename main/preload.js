window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.setAttribute("href", text)
  }

  replaceText("crm", "http://crm.ifuncun.cn:8080/funcun")
})