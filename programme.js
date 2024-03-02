var test = document.getElementById('mode')

test.onclick = function () {
    document.body.classList.toggle('theme')
    document.querySelector('body').style.transition = '1s'
}

var src_2 = document.getElementById('test-1')
var src_3 = document.getElementById('test-2')
var src = document.getElementById('scrolle-nav')

window.onscroll = function () {
    if (scrollY >= 580) {
        //Move-1
        src_2.style.opacity = '1'
        src_2.style.transition = '1.5s'
        src_2.style.transform = 'scale(1)'
        //Move-2
        src_3.style.opacity = '1'
        src_3.style.transition = '1.5s'
        src_3.style.marginRight = '0'
        //Move-3
        src.style.opacity = '1'
        src.style.transition = '1.5s'
        src.style.transform = 'scale(1)'
    }
    else if (scrollY <= 500) {
        //Move-1
        src_2.style.opacity = '0'
        src_2.style.transform = 'scale(0)'
        //Move-2
        src_3.style.opacity = '0'
        src_3.style.marginRight = '-20vw'
        //Move-3
        src.style.opacity = '0'
        src.style.transform = 'scale(0)'
    }

};
