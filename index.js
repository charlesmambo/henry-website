const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const serviceImg = document.querySelector('.service-img');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
    serviceImg.scrollBy({ left: 200, behavior: 'smooth' }); // Scroll to the right
});

prevBtn.addEventListener('click', () => {
    serviceImg.scrollBy({ left: -200, behavior: 'smooth' }); // Scroll to the left
});
