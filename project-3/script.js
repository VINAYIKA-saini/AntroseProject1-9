function changeColor(color,colorName) {
  const inbox = document.getElementById('inbox');
    inbox.style.backgroundColor = color;
     inbox.innerHTML = `<div>${colorName}</div><div>${color}</div>`;

  // Play click sound
  const clickSound = document.getElementById('clickSound');
  clickSound.currentTime = 0; // Reset audio to start
  clickSound.play();
}
