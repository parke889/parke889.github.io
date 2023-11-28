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



// when i click i want an image replace the box
// when i click i want it to be a randomly generated image

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var box = document.getElementById('box');

    // Get the dropped file
    var file = event.dataTransfer.files[0];

    // Check if a file is dropped
    if (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // Set the dropped image as the source
            box.src = e.target.result;
            images.push(e.target.result);
        };

        // Read the dropped file as a data URL
        reader.readAsDataURL(file);
    }
}

function drag(event) {
    event.dataTransfer.setData('text', event.target.src);
}