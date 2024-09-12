document.querySelector('.call').addEventListener('click', function() {
    window.location.href = 'tel:+97126756348';
});

document.querySelector('.mail').addEventListener('click', function() {
    window.location.href = 'mailto:info@jadarahome.com';
});

document.querySelector('.message').addEventListener('click', function() {
    // Assuming message functionality
    alert('Message functionality is triggered!');
});