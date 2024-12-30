
const images = [
    { src: './images/animal-1.png', category: 'animals' },
    { src: './images/ani-2.png', category: 'animals' },
    { src: './images/image.png', category: 'birds' },
    { src: './images/bird1.png', category: 'birds' },
    { src: './images/i1.png', category: 'insects' },
    { src: './images/i2.png', category: 'insects' }
];

// Select gallery and filter buttons
const gallery = document.getElementById('gallery');
const filterButtons = document.querySelectorAll('.filters button');

function displayImages(filter = 'all') {
    gallery.innerHTML = ''; // Clear existing images
    
    const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);
    
    filteredImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.category;
        gallery.appendChild(imgElement);
    });
}
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');
        
        // Get the filter value and display images
        const filter = button.getAttribute('data-filter');
        displayImages(filter);
    });
});
displayImages();
