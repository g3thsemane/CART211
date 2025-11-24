document.addEventListener("mousemove", (event) => {
    const eyes = document.querySelector(".eyes");
    const pupil = document.getElementById("pupils");

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const eyesRect = eyes.getBoundingClientRect();
    const eyesX = eyesRect.left + eyesRect.width / 2;
    const eyesY = eyesRect.top + eyesRect.height / 2;
    const angle = Math.atan2(mouseY - eyesY, mouseX - eyesX);
    const distance = Math.min(eyesRect.width / 4, eyesRect.height / 4);

    const pupilX = Math.cos(angle) * distance;
    const pupilY = Math.sin(angle) * distance;

    pupil.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
});

document.addEventListener("mousemove", (event) => {
    const eyes1 = document.querySelector(".eyes1");
    const pupil1 = document.getElementById("pupils1");

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const eyes1Rect = eyes1.getBoundingClientRect();
    const eyes1X = eyes1Rect.left + eyes1Rect.width / 2;
    const eyes1Y = eyes1Rect.top + eyes1Rect.height / 2;
    const angle = Math.atan2(mouseY - eyes1Y, mouseX - eyes1X);
    const distance = Math.min(eyes1Rect.width / 4, eyes1Rect.height / 4);

    const pupilX = Math.cos(angle) * distance;
    const pupilY = Math.sin(angle) * distance;

    pupil1.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
});