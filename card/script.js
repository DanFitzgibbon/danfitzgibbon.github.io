const gif = document.getElementById('gift-gif');
const presentContainer = document.querySelector('.present-container');
const giftImage = document.getElementById('gift-image');

gif.addEventListener('click', () => {
    gif.style.display = 'none';
    presentContainer.style.display = 'block';

    // Animation for opening the gift image
    setTimeout(() => {
        giftImage.src = 'opened-gift.gif';
    }, 500); // delay for 0.5 seconds

    // Repeat the animation every second
    setInterval(() => {
        const newSrc = giftImage.src === 'opened-gift.gif' ? 'gift.gif' : 'opened-gift.gif';
        giftImage.src = newSrc;
    }, 1000);
});