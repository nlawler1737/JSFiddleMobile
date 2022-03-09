let style = document.createElement('style')
style.innerHTML = `
html {
    overflow: hidden
}
.hideGrid {
    grid-area: auto !important;
}
.hide {
    display: none !important;
}
#editor > div.tabsContainer.tabsH {
    width: 100vw !important
}
`

let meta = document.createElement('meta')
meta.name = 'viewport'
meta.content = 'width=device-width, initial-scale=1, maximum-scale=1'

document.head.appendChild(meta)
document.head.appendChild(style)


let d = (e)=>{return document.querySelector(e)}
let layout = ()=>document.querySelector("#layout > label:nth-child(7)").click()
d('#app-updates').classList.add('hide')
d("#collaborate").innerHTML = d("#collaborate").innerHTML.replaceAll('Collaborate', 'Collab')
d("#sidebar").classList.add('hide')
d("#content").classList.add('hideGrid')
const removeText = ()=>{document.querySelectorAll('.aiButton').forEach(e=>{e.onclick = removeText; e.innerHTML = e.innerHTML.replace(new RegExp(`${e.innerText}([^${e.innerText}]*)$`), '$1')})}
const showSidebar = ()=>{
    let a = d("#content").classList.toggle('hideGrid')
    let b = d('#sidebar').classList.toggle('hide')
}
removeText()
layout()
