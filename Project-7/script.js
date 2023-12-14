const colorBox = document.getElementById('color-box');
const colorPicker = document.getElementById('color-picker');
const hueInput = document.getElementById('hue');
const saturationInput = document.getElementById('saturation');
const valueInput = document.getElementById('value');

function updateColor() {
  const hue = hueInput.value;
  const saturation = saturationInput.value;
  const value = valueInput.value;
  const selectedColor = `hsl(${hue}, ${saturation}%, ${value}%)`;
  colorBox.style.backgroundColor = selectedColor;
}

colorPicker.addEventListener('input', () => {
  colorBox.style.backgroundColor = colorPicker.value;
});

hueInput.addEventListener('input', updateColor);
saturationInput.addEventListener('input', updateColor);
valueInput.addEventListener('input', updateColor);

// Initialize color picker with default values
updateColor();
