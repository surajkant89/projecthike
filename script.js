/*document.getElementById('share-button').addEventListener('click', function() {
    if (navigator.share) {
        navigator.share({
            title: 'Check out this awesome page!',
            text: 'Hey, I found this interesting page. You should check it out!',
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch((error) => {
            console.error('Error sharing:', error);
        });
    } else {
        alert('Web Share API not supported on this browser. Please share manually.');
    }
});*/




document.addEventListener('DOMContentLoaded', function() {
    const shareButtons = document.querySelectorAll('[id^="share-button"]');
    
    shareButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: `THESE IS MY CARD ID NUMBER IS ${index + 1}!`,
                    text: `Hey, I found this interesting FREE-card just follow ${index + 1}. You should check it out!`,
                    url: window.location.href
                }).then(() => {
                    console.log(`Thanks for sharing card ${index + 1}!`);
                }).catch((error) => {
                    console.error(`Error sharing card ${index + 1}:`, error);
                });
            } else {
                alert('Web Share API not supported on this browser. Please share manually.');
            }
        });
    });
});






document.getElementById('search-input').addEventListener('input', function() {
    let filter = this.value.toUpperCase();
    let cards = document.getElementsByClassName('card');
    let found = false;

    for (let i = 0; i < cards.length; i++) {
        let idNoText = cards[i].querySelector('.card-footer b').innerText;
        if (idNoText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = '';  // Show the card if it matches the search
            found = true;
        } else {
            cards[i].style.display = 'none';  // Hide the card if it doesn't match
        }
    }

    // If no card matches the search term, show a "No results found" message
    if (!found) {
        alert("No results found for the given ID.");
    }
});
