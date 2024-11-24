const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 64 * 16;
canvas.height = 64 * 9;

const player = new Player();

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
}

function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    player.velocity.x = 0
    if (keys.d.pressed) {
        player.velocity.x = 5;
    } else if (keys.a.pressed) {
        player.velocity.x = -5;
    }

    player.draw();
    player.update();
}

animate();

