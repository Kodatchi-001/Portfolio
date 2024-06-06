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
function navbar_responsiv() {
    const header = document.querySelector('header');
    const header_content = document.querySelector('.nav-content')
    let height = '40vh'
    if (header.style.height == height) {
        header.style.height = '';
        header_content.style.height = '';
        header.style.boxShadow = '';
    }
    else {
        header.style.height = height;
        header_content.style.height = '20%';
        header.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.185)';
    }
}

//theme-page
function theme_page() {
    var button_theme = document.querySelectorAll('.bx bxs-moon')
    console.log('test')
    button_theme.forEach(element => {
        element.addEventListener('click', function () {
            document.body.classList.toggle('theme')
            document.querySelector('body').style.transition = '1s'
        })
    });
}
theme_page()
// //check-form
// var botton = document.getElementById('button-form');
// var input_1 = document.getElementsByTagName('input')[0];
// var input_2 = document.getElementsByTagName('input')[1];
// var input_3 = document.getElementsByTagName('input')[2];
// var input_4 = document.getElementsByTagName('textarea')[0];
// var cond = /^[a-zA-Z-\s]+$/
// botton.onclick = function () {
//     // input__1
//     if (cond.test(input_1.value) == false || input_1.value.trim() === '') {
//         input_1.style.border = '2px solid red'
//         input_1.value = ''
//     }
//     else {
//         input_1.style.border = '2px solid green'
//     }
//     // input__2
//     if (input_2.value.includes('@gmail.com') === false || input_2.value.trim() === '') {
//         input_2.style.border = '2px solid red'
//         input_2.value = ''
//     }
//     else {
//         input_2.style.border = '2px solid green'
//     }
//     // input__3
//     if (cond.test(input_3.value) == false || input_3.value.trim() === '') {
//         input_3.style.border = '2px solid red'
//         input_3.value = ''
//     }
//     else {
//         input_3.style.border = '2px solid green'
//     }
//     // input__4
//     if (cond.test(input_4.value) == false || input_4.value.trim() === '') {
//         input_4.style.border = '2px solid red'
//         input_4.value = ''
//     }
//     else {
//         input_4.style.border = '2px solid green'
//     }
//     // verifier button
//     if (
//         cond.test(input_1.value) == false ||
//         input_2.value.includes('@gmail.com') == false ||
//         cond.test(input_3.value) == false ||
//         cond.test(input_4.value) == false
//     ) {
//         alert('Respecter le champ correctement ');
//     }
//     else if (
//         cond.test(input_1.value) == true ||
//         input_2.value.includes('@gmail.com') == true ||
//         cond.test(input_3.value) == true ||
//         cond.test(input_4.value) == true
//     ) {
//         alert('Votre information et respecter');
//     }
// }




