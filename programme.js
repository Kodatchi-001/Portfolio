var test = document.getElementById('mode')

test.onclick = function () {
    document.body.classList.toggle('theme')
    document.querySelector('body').style.transition = '1s'
}