const landingCanvas = document.getElementById("landingCanvas");
const ctx = landingCanvas.getContext("2d");

landingCanvas.width = window.innerWidth;
landingCanvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    landingCanvas.width = window.innerWidth;
    landingCanvas.height = window.innerHeight;
});

const img = new Image();
img.src = "/src/assets/images/background.png";
var isDrawImage = false;

const fontFaceStyle = document.createElement("style");
fontFaceStyle.textContent = `
@font-face {
    font-family: "Sakana";
    src: url("/src/assets/fonts/Sakana.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}
`;
document.head.appendChild(fontFaceStyle);

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 18;
const columns = landingCanvas.width / fontSize;

// An array to store the vertical position of each column
const rainDrops = [];
for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1; // Start all drops at the top
}

function drawMyName(){
    const x = landingCanvas.width - 400;
    const Y = landingCanvas.height / 2;
    ctx.fillStyle = '#FF0000';
    ctx.font = '80px "Sakana"';
    ctx.strokeStyle = "black";
    ctx.lineJoin = "round";
    ctx.lineWidth = 40;
    ctx.strokeText("OkithM", x, Y);
    ctx.fillText("OkithM", x, Y);
    ctx.font = '40px arial';
    ctx.lineWidth = 20; 
    ctx.strokeText("Okith Moksha", x+80 , Y + 40);
    ctx.fillText("Okith Moksha", x+80 , Y + 40);
}

const draw = () => {
    // Draw a translucent black layer to fade previous frames
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, landingCanvas.width, landingCanvas.height);

    ctx.fillStyle = '#FF0000'; // Matrix Green
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        // Pick a random character
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));

        // Draw it at current (x, y)
        // x = index * fontSize, y = value in array * fontSize
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        // Reset drop to top randomly after it crosses the screen
        if (rainDrops[i] * fontSize > landingCanvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
            isDrawImage = true;
        }

        // Increment Y position
        rainDrops[i]++;
    }
    if (isDrawImage) {
        // Calculate the scale factor (the smaller of width or height ratios)
        const scale = Math.max(landingCanvas.width / img.width, landingCanvas.height / img.height);

        // Calculate the new dimensions
        const newWidth = img.width * scale;
        const newHeight = img.height * scale;

        // Optional: Center the image
        const x = (landingCanvas.width - newWidth);
        const y = (landingCanvas.height - newHeight);

        ctx.drawImage(img, x, 0, newWidth, newHeight);

        drawMyName();
    }
};

// Run the draw function roughly 30 times per second
setInterval(draw, 30);