const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 64 * 16;
canvas.height = 64 * 9;

const player = new Player();

function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    player.draw();
    player.update();
}

animate();
