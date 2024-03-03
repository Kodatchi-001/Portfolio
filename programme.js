var test = document.getElementById('mode')

test.onclick = function () {
    document.body.classList.toggle('theme')
    document.querySelector('body').style.transition = '1s'
}

var src_2 = document.getElementById('test-1')
var src_3 = document.getElementById('test-2')

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
    }
    else if (scrollY <= 500) {
        //Move-1
        src_2.style.opacity = '0'
        src_2.style.transform = 'scale(0)'
        //Move-2
        src_3.style.opacity = '0'
        src_3.style.marginRight = '-20vw'
    }

};
var botton = document.getElementById('button-form');
var input_1 = document.getElementsByTagName('input')[0];
var input_2 = document.getElementsByTagName('input')[1];
var input_3 = document.getElementsByTagName('input')[2];
var input_4 = document.querySelector('textarea');

botton.onclick = function () {
    // input__1
    if (Number(input_1.value) || input_1.value == '@') {
        input_1.style.border = '3px solid red'
        input_1.value = ''
    }
    else if (String(input_1.value)) {
        input_1.style.border = '3px solid green'
    }
    else {
        input_1.style.border = '3px solid gray'
    }

    // input__2
    if (Number(input_2.value)) {
        input_2.style.border = '3px solid red'
        input_2.value = ''
    }
    else if (String(input_2.value) || input_2.value == '@') {
        input_2.style.border = '3px solid green'
    }
    else {
        input_2.style.border = '3px solid gray'
    }

    // input__3
    if (Number(input_3.value) || input_3.value == '@') {
        input_3.style.border = '3px solid red'
        input_3.value = ''
    }
    else if (String(input_3.value)) {
        input_3.style.border = '3px solid green'
    }
    else {
        input_3.style.border = '3px solid gray'
    }

    // input__4
    if (Number(input_4.value) || input_4.value == '@') {
        input_4.style.border = '3px solid red'
        input_4.value = ''
    }
    else if (String(input_4.value)) {
        input_4.style.border = '3px solid green'
    }
    else {
        input_4.style.border = '3px solid gray'

    }

} 
