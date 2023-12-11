function calculateVolume() {
    const lengthInput = document.getElementById("length");
    const widthInput = document.getElementById("width");
    const heightInput = document.getElementById("height");
    const resultParagraph = document.getElementById("result");
    const volumeValue = document.getElementById("volumeValue");
  
    const length = parseFloat(lengthInput.value);
    const width = parseFloat(widthInput.value);
    const height = parseFloat(heightInput.value);
  
    if (!isNaN(length) && !isNaN(width) && !isNaN(height) && length > 0 && width > 0 && height > 0) {
      const volume = length * width * height;
      volumeValue.textContent = volume.toFixed(2);
      resultParagraph.style.display = "block";
    } else {
      resultParagraph.textContent = "Invalid input. Please enter valid positive numbers.";
      resultParagraph.style.display = "block";
    }
  }
  