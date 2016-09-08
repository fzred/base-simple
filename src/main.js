import './css/index.css'

window.setInterval(() => {
  window.document.body.innerHTML = new Date().toLocaleString()
}, 1000)
