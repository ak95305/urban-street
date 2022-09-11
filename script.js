$('.prod-col .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        767: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});


$('.sec4-prod-col .owl-carousel, .sec6-prod-col .owl-carousel, .sec6-test .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        767: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});


$('.prod-imgs .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
});




// Hamburger
let hamIcon = document.querySelector('.hamburger');
let navMenu = document.querySelector('.navbar-mob');
let cross = document.querySelector('.navbar-mob .bi-x');
hamIcon.addEventListener('click', () => {
    hamIcon.classList.add('active');
    navMenu.classList.add('active');
    document.body.classList.add('overflow-hidden');
});
cross.addEventListener('click', () => {
    hamIcon.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
});




// Quantity
let quant = document.querySelector('.quant');
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
i = 0
quant.textContent = i;
plus.addEventListener('click', () => {
    if (i < 10) {
        i++;
        quant.textContent = i;
    }
});
minus.addEventListener('click', () => {
    if (i > 0) {
        i--;
        quant.textContent = i;
    }
});


// size radio
let radio = document.querySelectorAll('.size-input');
let sizeVal = document.querySelector('.size-val');
radio.forEach(item => {
    item.addEventListener('click', () => {
        if (item.checked) {
            sizeVal.textContent = item.value;
        }
    });
});