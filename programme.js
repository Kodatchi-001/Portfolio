//navbar_scroll
function navbar_scroll() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            header.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.185)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
}
navbar_scroll();
//navbar_responsiv
function navbar_content() {
    const links = document.querySelectorAll('.navbar-responsiv ul li a');
    links.forEach(link => {
        link.addEventListener('click', navbar_responsiv)
    })
}
navbar_content()
function navbar_responsiv() {
    const header_content = document.querySelector('.nav-content')
    const header = document.querySelector('header');
    const height = '50vh'

    if (header.style.height == height) {
        header.style.height = '';
        header_content.style.height = '';
    }
    else {
        header.style.height = height;
        header_content.style.height = '20%';
    }
}
//theme-page
function theme_page() {
    var button_theme_1 = document.querySelector('.content-3 i')
    var button_theme_2 = document.querySelector('.content-4 i')

    button_theme_1.addEventListener('click', theme)
    button_theme_2.addEventListener('click', theme)
}
theme_page()
function theme() {
    document.body.classList.toggle('theme')
    document.querySelector('body').style.transition = '1s'
}
//card_information
async function loadJSON() {
    const img_card = document.querySelectorAll('.info-image img')
    const tittle_card = document.querySelectorAll('.info-tittle-2 h1');
    const link_github = document.querySelectorAll('.info-tittle-3 .link-git')
    const link_web = document.querySelectorAll('.info-tittle-3 .link-web');

    const response = await fetch('cards_information.json');
    const jsonObject = await response.json();

    img_card.forEach((img, index) => {
        if (jsonObject[index]) {
            img.src = jsonObject[index].src
        }
    });

    tittle_card.forEach((tittle, index) => {
        if (jsonObject[index]) {
            tittle.textContent = jsonObject[index].tittle
        }
    });

    link_github.forEach((github, index) => {
        if (jsonObject[index]) {
            github.href = jsonObject[index].link_github;
        }
    });

    link_web.forEach((web, index) => {
        if (jsonObject[index]) {
            web.href = jsonObject[index].link_web;
        }
    });
}
loadJSON();
//check-form
var botton = document.getElementById('button-form');
var input_1 = document.getElementsByTagName('input')[0];
var input_2 = document.getElementsByTagName('input')[1];
var input_3 = document.getElementsByTagName('input')[2];
var input_4 = document.getElementsByTagName('textarea')[0];
var cond = /^[a-zA-Z-\s]+$/
botton.onclick = function () {
    // input__1
    if (cond.test(input_1.value) == false || input_1.value.trim() === '') {
        input_1.style.border = '2px solid red'
        input_1.value = ''
    }
    else {
        input_1.style.border = '2px solid green'
    }
    // input__2
    if (input_2.value.includes('@gmail.com') === false || input_2.value.trim() === '') {
        input_2.style.border = '2px solid red'
        input_2.value = ''
    }
    else {
        input_2.style.border = '2px solid green'
    }
    // input__3
    if (cond.test(input_3.value) == false || input_3.value.trim() === '') {
        input_3.style.border = '2px solid red'
        input_3.value = ''
    }
    else {
        input_3.style.border = '2px solid green'
    }
    // input__4
    if (cond.test(input_4.value) == false || input_4.value.trim() === '') {
        input_4.style.border = '2px solid red'
        input_4.value = ''
    }
    else {
        input_4.style.border = '2px solid green'
    }
    // verifier button
    if (
        cond.test(input_1.value) == false ||
        input_2.value.includes('@gmail.com') == false ||
        cond.test(input_3.value) == false ||
        cond.test(input_4.value) == false
    ) {
        alert('Respecter le champ correctement ');
    }
    else if (
        cond.test(input_1.value) == true ||
        input_2.value.includes('@gmail.com') == true ||
        cond.test(input_3.value) == true ||
        cond.test(input_4.value) == true
    ) {
        alert('Votre information et respecter');
    }
}