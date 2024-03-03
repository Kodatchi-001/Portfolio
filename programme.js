var test = document.getElementById('mode')

test.onclick = function () {
    document.body.classList.toggle('theme')
    document.querySelector('body').style.transition = '1s'
}

var src_2 = document.getElementById('test-1')
var src_3 = document.getElementById('test-2')

var src_4 = document.getElementById('card-1')
var src_5 = document.getElementById('card-2')
var src_6 = document.getElementById('card-3')

var src_7 = document.getElementById('card-4')
var src_8 = document.getElementById('card-5')
var src_9 = document.getElementById('card-6')

window.onscroll = function () {
    //page-1
    if (scrollY >= 600) {
        //Move-1
        src_2.style.opacity = '1'
        src_2.style.transition = '1s'
        src_2.style.transform = 'scale(1)'
        //Move-2
        src_3.style.opacity = '1'
        src_3.style.transition = '1s'
        src_3.style.marginRight = '0'
    }
    else if (scrollY <= 900) {
        //Move-1
        src_2.style.opacity = '0'
        src_2.style.transform = 'scale(0)'
        //Move-2
        src_3.style.opacity = '0'
        src_3.style.marginRight = '-20vw'
    }
    //page-2
    if (scrollY >= 1405) {
        //Move-1
        src_4.style.opacity = '1'
        src_4.style.transition = '1s'
        src_4.style.marginTop = '0vh'
        //Move-2
        src_5.style.opacity = '1'
        src_5.style.transition = '2s'
        src_5.style.marginTop = '0vh'
        //Move-3
        src_6.style.opacity = '1'
        src_6.style.transition = '3s'
        src_6.style.marginTop = '0'
    }
    else if (scrollY <= 1100) {
        //Move-1
        src_4.style.opacity = '0'
        src_4.style.marginTop = '-20vh'
        //Move-2
        src_5.style.opacity = '0'
        src_5.style.marginTop = '-20vh'
        //Move-3
        src_6.style.opacity = '0'
        src_6.style.marginTop = '-20vh'
    }
    //page-3
    if (scrollY >= 2100) {
        //Move-1
        src_7.style.opacity = '1'
        src_7.style.transition = '1.5s'
        src_7.style.transform = 'scale(1)'
        //Move-2
        src_8.style.opacity = '1'
        src_8.style.transition = '2.5s'
        src_8.style.transform = 'scale(1)'
        //Move-3
        src_9.style.opacity = '1'
        src_9.style.transition = '3.5s'
        src_9.style.transform = 'scale(1)'
    }
    else if (scrollY <= 1900) {
        //Move-1
        src_7.style.opacity = '0'
        src_7.style.transform = 'scale(0.5)'
        //Move-2
        src_8.style.opacity = '0'
        src_8.style.transform = 'scale(0.5)'
        //Move-3
        src_9.style.opacity = '0'
        src_9.style.transform = 'scale(0.5)'
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

var respo = document.getElementById('nav-respo')
var cont = document.getElementsByTagName('ul')[0];
var cont_2 = document.getElementsByTagName('ul')[1];
var cont_3 = document.getElementsByTagName('ul')[2];

respo.onclick = function name(params) {
    document.getElementById('nav-content').style.marginTop = '0vh'
}

cont.onclick = function name(params) {
    document.getElementById('nav-content').style.marginTop = '-100vh'
}

cont_2.onclick = function name(params) {
    document.getElementById('nav-content').style.marginTop = '-100vh'
}

cont_3.onclick = function name(params) {
    document.getElementById('nav-content').style.marginTop = '-100vh'
}

