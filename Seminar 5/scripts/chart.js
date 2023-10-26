window.onload = function() {
    let canvas = document.getElementById('chart');
    const context = canvas.getContext("2d");
    
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    let values = [];
    
    function drawHorizontalGridLines() {
        context.strokeStyle = '#222';
        context.lineWidth = 1;
        for(let i = 100; i <= canvasHeight; i += 100) {
            context.beginPath();
            context.moveTo(0, i);
            context.lineTo(canvasWidth, i);
            context.stroke();
            context.strokeText(canvasHeight - i, 0, i - 5);
        }
    }
    function drawVerticalGridLines() {
        context.strokeStyle = '#222'
        context.lineWidth = 1;
        for(let i = 150; i < canvasWidth; i += 150) {
            context.beginPath();
            context.moveTo(i, 0);
            context.lineTo(i, canvasHeight);
            context.stroke();
        }
    }

    function generateRandomNumber() {
        return parseInt(Math.random() * canvasHeight);
    }

    function generateRandomNumbers() {
        for(let i = 0; i <= canvasWidth / 20; i++) {
            values.push(generateRandomNumber());
        }
        console.log(values);
    }

    function drawChart() {
        context.strokeStyle = 'red';
        context.lineWidth = 5;

        context.beginPath();
        context.moveTo(0, canvasHeight - values[0]);
        for(let i = 1; i < values.length; i++) {
            context.lineTo(i * 20, canvasHeight - values[i]);
        }
        context.stroke();
    }
    
    function clearCanvas() {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
    }

    function draw() {
        clearCanvas();
        drawHorizontalGridLines();
        drawVerticalGridLines();
        drawChart();
    }

    generateRandomNumbers();
    draw();

    setInterval(() => {
        draw();
        values.push(generateRandomNumber());
        values.shift(1);
    }, 100);
}