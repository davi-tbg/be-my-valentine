const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const card = document.querySelector('.card');
const successMsg = document.getElementById('success-msg');

let fontSize = 1.1; // Initial font size for Yes button

const moveNoButton = (e) => {
    // Prevent the default tap behavior (like zooming) on mobile
    if(e) e.preventDefault(); 

    // Get the current button size
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    // Add a safety margin so it doesn't hit the absolute edge
    const margin = 20; 

    // Calculate available space
    const maxWidth = window.innerWidth - btnWidth - margin;
    const maxHeight = window.innerHeight - btnHeight - margin;

    // Generate random coordinates within the safe area
    const randomX = Math.max(margin, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(margin, Math.floor(Math.random() * maxHeight));

    // Apply new position
    noBtn.style.position = 'fixed'; // 'fixed' works better than absolute for viewport relative
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    // Make the Yes button grow
    fontSize += 0.1; // Grow slower on mobile to avoid overflow
    yesBtn.style.transform = `scale(${fontSize})`;
};

// --- Event Listeners ---

// Desktop: Run away on hover
noBtn.addEventListener('mouseover', moveNoButton);

// Mobile: Run away on touch (touchstart is faster than click)
noBtn.addEventListener('touchstart', moveNoButton);

// Fallback: Run away on click (for hybrid devices)
noBtn.addEventListener('click', moveNoButton);

// Success Action
yesBtn.addEventListener('click', () => {
    card.style.display = 'none';
    noBtn.style.display = 'none';
    successMsg.classList.remove('hidden');
    document.body.style.backgroundColor = '#ffc2d1';
});