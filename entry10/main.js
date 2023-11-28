function changeImage() {
    var box = document.getElementById('box');
    var images = [
        'imgs/toy1.png',
        'imgs/toy2.png',
        'imgs/toy3.png',
        'imgs/toy4.png',
        'imgs/toy5.png',
        'imgs/toy6.png',
        'imgs/toy7.png',
        'imgs/toy8.png',
        'imgs/toy9.png',
        'imgs/toy10.png',
    ];

    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];

    box.src = randomImage;
}
