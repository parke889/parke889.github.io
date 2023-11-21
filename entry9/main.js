document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');
    let isDrawing = false;



    const textureImage = new Image();
    textureImage.src = 'imgs/brush_sand.jpeg';

    textureImage.onload = function () {
        const pattern = context.createPattern(textureImage, 'repeat');

        function startDrawing(e) {
            isDrawing = true;
            draw(e);
        }

        function stopDrawing() {
            isDrawing = false;
            context.beginPath();
        }

        function draw(e) {
            if (!isDrawing) return;

            context.lineWidth = 25;
            context.lineJoin = 'round';
            context.lineCap = 'round';
            context.strokeStyle = pattern;

            context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            context.stroke();
            context.beginPath();
            context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        }


        function clearCanvas() {
            const isConfirmed = window.confirm('Are you sure you want to clear the canvas?');

            if (isConfirmed) {
                context.clearRect(0, 0, canvas.width, canvas.height);
            }
        }

        document.getElementById('clearButton').addEventListener('click', clearCanvas);

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);
        canvas.addEventListener('mousemove', draw);


setTimeout(() => {
    const coverImage = document.getElementById('coverImage');
    coverImage.style.opacity = 0;
    setTimeout(() => {
        coverImage.style.display = 'none';
    }, 2000); 
}, 2000);
};
});