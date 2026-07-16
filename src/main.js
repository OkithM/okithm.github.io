import { projects } from './projects.js';

// Loader animation logic
const percentageEl = document.getElementById("percentage");
const loaderWrapper = document.querySelector(".loader-wrapper");
const loaderBar = document.getElementById("loader-bar")
let currentProgress = 0;
let resourcesLoaded = false;

const progressInterval = setInterval(() => {
  const increment = resourcesLoaded ? 3 : 1;
  currentProgress = Math.min(currentProgress + increment, 100);

  if (percentageEl) {
    percentageEl.textContent = `${Math.floor(currentProgress)}%`;
  }
  if (loaderBar) {
    loaderBar.style.width = currentProgress + "%";
  }

  if (currentProgress >= 100) {
    clearInterval(progressInterval);
    setTimeout(() => {
      if (loaderWrapper && resourcesLoaded) {
        loaderWrapper.classList.add("fade-out");
      }
    }, 300);
  }
}, 50);

window.addEventListener("load", () => {
  resourcesLoaded = true;
});


//....................

const landingCanvas = document.getElementById("landingCanvas");
const ctx = landingCanvas.getContext("2d");
const aboutMeBtn = document.getElementById("aboutMeBtn");

landingCanvas.width = window.innerWidth;
landingCanvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  landingCanvas.width = window.innerWidth;
  landingCanvas.height = window.innerHeight;
});

import backgroundImg from './assets/images/Background.png';

const img = new Image();
img.src = backgroundImg;
var isDrawImage = false;


const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 18;
const columns = landingCanvas.width / fontSize;

// An array to store the vertical position of each column
const rainDrops = [];
for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1; // Start all drops at the top
}

function drawMyName() {
  const xStart = landingCanvas.width - 400;
  const Y = landingCanvas.height / 2;
  const fontName = '"Sakana"';
  const bigSize = 80;
  const smallSize = 65;

  // Pre-calculate positions so the strokes and fills align perfectly
  ctx.font = `${bigSize}px ${fontName}`;
  const widthO = ctx.measureText("O").width;

  ctx.font = `${smallSize}px ${fontName}`;
  const widthKith = ctx.measureText("KITH").width;

  const xKith = xStart + widthO;
  const xM = xKith + widthKith;

  // --- 1. STROKE PASS ---
  ctx.strokeStyle = "black";
  ctx.lineJoin = "round";

  // Stroke "O"
  ctx.font = `${bigSize}px ${fontName}`;
  ctx.lineWidth = 40;
  ctx.strokeText("O", xStart, Y);

  // Stroke "KITH"
  ctx.font = `${smallSize}px ${fontName}`;
  ctx.lineWidth = 25; // Thinner stroke for smaller text
  ctx.strokeText("KITH", xKith, Y);

  // Stroke "M"
  ctx.font = `${bigSize}px ${fontName}`;
  ctx.lineWidth = 40;
  ctx.strokeText("M", xM, Y);

  // --- 2. FILL PASS ---
  ctx.fillStyle = '#FF0000';

  // Fill "O"
  ctx.font = `${bigSize}px ${fontName}`;
  ctx.fillText("O", xStart, Y);

  // Fill "KITH"
  ctx.font = `${smallSize}px ${fontName}`;
  ctx.fillText("KITH", xKith, Y);

  // Fill "M"
  ctx.font = `${bigSize}px ${fontName}`;
  ctx.fillText("M", xM, Y);

  // --- 3. SUBTEXT (Okith Moksha) ---
  // Drawing this last so it sits on top of everything
  ctx.font = '40px arial';
  ctx.lineWidth = 20;
  ctx.strokeStyle = "black";
  ctx.strokeText("Okith Moksha", xStart + 55, Y + 40);
  ctx.fillText("Okith Moksha", xStart + 55, Y + 40);
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

    if (aboutMeBtn) {
      aboutMeBtn.style.display = "block";

      // Dynamically update position to follow the canvas text
      const xStart = landingCanvas.width - 400;
      const Y = landingCanvas.height / 2;

      aboutMeBtn.style.left = (xStart + 150) + "px";
      aboutMeBtn.style.top = (Y + 75) + "px";
    }
  }
};

// Run the draw function roughly 30 times per second
setInterval(draw, 30);

window.toAboutMe = function () {
  document.getElementById("me")?.scrollIntoView({ behavior: "auto" });
};

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projects.map(project => `
        <div class="project-item border-2 border-red-500/50 p-4 rounded-lg font-mono flex flex-col md:flex-row gap-4">
          <!-- Image Section -->
          <div
            style="background-image: url('${project.image}'); height: 300px; width: 300px; border-radius: 8px; background-size: cover; background-position: top; flex-shrink: 0;">
          </div>

          <!-- Content Section -->
          <div class="flex flex-col justify-between flex-1">
            <div>
              <div>
                <div class="text-red-500 text-2xl font-mono mb-2">${project.title}</div>
                <div class="text-white/90 text-lg font-mono mb-4">
                  ${project.description}
                </div>
              </div>
              <!-- Tech Stack -->
              <div class="flex flex-col items-start justify-between">
                <div class="text-md text-red-500 font-mono">${project.tech}</div>
              </div>
            </div>
            ${project.link ? `
            <a href="${project.link}" target="_blank"
              rel="noopener noreferrer" class="btn-primary flex items-center gap-2 w-fit cursor-pointer">
              ${project.linkLabel || 'View'}<i data-lucide="arrow-right" class="h-5"></i>
            </a>
            ` : ''}
          </div>
        </div>
    `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Render projects on script load
renderProjects();