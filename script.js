let lastX = 0, lastY = 0, lastZ = 0;
const threshold = 15; // 움직임의 민감도
const colorBox = document.querySelector('.color-box');

function getRandomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}

function handleMotion(event) {
  const { x, y, z } = event.acceleration || { x: 0, y: 0, z: 0 };

  if (x !== null && y !== null && z !== null) {
    const deltaX = Math.abs(x - lastX);
    const deltaY = Math.abs(y - lastY);
    const deltaZ = Math.abs(z - lastZ);

    if (deltaX > threshold || deltaY > threshold || deltaZ > threshold) {
      colorBox.style.backgroundColor = getRandomColor();
    }

    lastX = x;
    lastY = y;
    lastZ = z;
  }
}

if (window.DeviceMotionEvent) {
  window.addEventListener('devicemotion', handleMotion);
} else {
  alert('Device Motion is not supported on this device.');
}
