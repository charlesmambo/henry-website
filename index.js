const openBtn = document.getElementById('hamburger');
const dropDown = document.getElementById('drop-down');
const closeBtn = document.getElementById('close-btn');
const links = document.querySelectorAll('#drop-down a'); // Select all links inside the dropdown

openBtn.addEventListener('click', () => {
    dropDown.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    dropDown.style.display = 'none';
});

// Add event listener to each link to close dropdown on click
links.forEach(link => {
    link.addEventListener('click', () => {
        dropDown.style.display = 'none';
    });
});


document.getElementById('see-all-link').addEventListener('click', function(event) {
    event.preventDefault();
    const hiddenCard = document.getElementById('hidden-card');
    
    // Add class to show card with animation
    hiddenCard.classList.add('show');
    
    setTimeout(() => {
        hiddenCard.style.display = 'flex';
    }, 3000); 
    
    this.style.display = 'none';
});

document.getElementById('see-all-services').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    const hiddenCards = document.querySelectorAll('#hidden-content .card.hide');

    hiddenCards.forEach(card => {
        card.classList.remove('hide'); // Remove the hide class
    });

    // Hide the "See All" button after cards are displayed
    this.style.display = 'none';
});



