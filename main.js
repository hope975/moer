import string from './css.js'
let n = 1
let time = 100
const run = () => {
    n += 1
    if (n > string.length) {
        clearInterval(id)
        return
    }
    document.querySelector('#demo').innerText = string.substring(0, n)
    document.querySelector('#demo2').innerHTML = string.substring(0, n)
    document.querySelector('#demo').scrollTop = document.querySelector('#demo').scrollHeight
}
let play = () => {
    return setInterval(run, time)
}
let pause = () => {
    return clearInterval(id)
}
let id = play()
btnPause.onclick = () => {
    pause()
}
btnPlay.onclick = () => {
    pause()
    id = play()
}
btnSlow.onclick = () => {
    pause()
    let time = 300
    id = play()
}
btnNormal.onclick = () => {
    pause()
    time = 100
    id = play()
}
btnFast.onclick = () => {
    pause()
    time = 0
    id = play()
}