import headerSty from './css/header.scss'
import bodySty from './css/body.scss'
import footerSty from './css/footer.scss'

var root = document.getElementById('root')
var header = document.createElement('div')
var body = document.createElement('div')
var footer = document.createElement('div')

header.className = headerSty.header
body.className = bodySty.body
footer.className = footerSty.footer


root.appendChild(header)
root.appendChild(body)
root.appendChild(footer)