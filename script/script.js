// Navbar fixed
window.onscroll = function() {
    const header = document.querySelector('.navbar');
    const fixedNav = header.offsetTop;
    const floatBtn = document.querySelector('.float-btn');
    const navbarNavFixed = document.querySelector('.navbar-nav');
    
    if (window.pageYOffset > fixedNav) {
        header.classList.add('fixed');
        floatBtn.classList.add('scroll');
        navbarNavFixed.classList.add('scroll');
    } else {
        header.classList.remove('fixed');
        floatBtn.classList.remove('scroll');
        navbarNavFixed.classList.remove('scroll');
    }
}


// toggle class active for hamburger-menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
}

// toggle class active for search-form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// toggle class active for shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}

// klik hamburger diluar elemen 
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const scb = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

document.addEventListener('click', function(e) {
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
})

document.addEventListener('click', function(e) {
    if(!scb.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
})

// modal box
/*const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach(btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
}
}

// itemDetailButton.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
}

// klik tombol close pd modal 
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}

// klik diluar modal 
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
}

*/



