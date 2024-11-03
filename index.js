document.getElementById('discord').addEventListener('click', function() {
    navigator.clipboard.writeText('@leafyluna').then(() => {
        document.getElementById('discord').textContent = 'Copied to Clipboard';
    }).catch(error => {
        console.error('Failed to copy text: ', error);
    });
    setTimeout(() => { document.getElementById('discord').textContent = 'Discord: @leafyluna (click to copy)'; }, 700);

})
document.getElementById('email').addEventListener('click', function() {
    navigator.clipboard.writeText('StellarAstraea@gmail.com').then(() => {
        document.getElementById('email').textContent = 'Copied to Clipboard';
    }).catch(error => {
        console.error('Failed to copy text: ', error);
    });
    setTimeout(() => { document.getElementById('email').textContent = 'Email: StellarAstraea@gmail.com (click to copy)'; }, 700);

})