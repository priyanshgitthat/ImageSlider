document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('menu');
    const hamnav = document.querySelector('.hamnav');
    
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            hamnav.style.right = '20%'; // Adjust as needed
        } else {
            hamnav.style.right = '-100%'; // Hide the menu
        }
    });
});

let items, next, prev, thumbnails;
items = document.querySelectorAll('.slider .list .item');
next = document.getElementById('next');
prev = document.getElementById('prev');
thumbnails = document.querySelectorAll('.thumbnail .item'); // Fixed selector

// config para
let countItem = items.length;
let itemActive = 0;

// next button function
next.onclick = function() {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}

// prev button function
prev.onclick = function() {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}

let refreshInterval = setInterval(() => {
    next.click();
}, 3000);

function showSlider() {
    // remove old active item
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    if (itemActiveOld) itemActiveOld.classList.remove('active');
    if (thumbnailActiveOld) thumbnailActiveOld.classList.remove('active');
    
    // add new active item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    
    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
});
