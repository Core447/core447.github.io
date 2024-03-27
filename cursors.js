const cursorTag = document.querySelector('div.cursors');
const ball = cursorTag.querySelector('div');

let aimY = 0;
let aimX = 0;
let currentX = 0;
let currentY = 0;
let speed = 0.3;

const animate = function () {
    // Only update and animate the cursor if it's not fully transparent
    if (ball.style.opacity !== '0') {
        currentX += (aimX - currentX) * speed;
        currentY += (aimY - currentY) * speed;

        ball.style.left = currentX + 'px';
        ball.style.top = currentY + 'px';
    }
    
    requestAnimationFrame(animate);
}

// Start the animation
animate();

document.addEventListener("mousemove", function(event) {
    aimX = event.pageX;
    aimY = event.pageY;
});

document.addEventListener("touchstart", function(event) {
    // Fade in the cursor when touch starts
    ball.style.opacity = '1';
    aimX = event.touches[0].pageX;
    aimY = event.touches[0].pageY;
});

document.addEventListener("touchmove", function(event) {
    // Move the cursor during touch move
    aimX = event.touches[0].pageX;
    aimY = event.touches[0].pageY;
});

document.addEventListener("touchend", function(event) {
    // Fade out the cursor when touch ends
    ball.style.opacity = '0';
});