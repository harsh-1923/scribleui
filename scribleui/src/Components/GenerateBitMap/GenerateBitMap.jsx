import React from "react";
import "./GenerateBitMap.css";

const GenerateBitMap = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [bitmap, setBitmap] = React.useState(null);
  const fileInputRef = React.useRef(null);

  const handleFileInputChange = (event) => {
    console.log("Clicked");
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setBitmap(null); // Clear previous bitmap if any
    }
  };

  const generateBitmap = () => {
    if (!selectedImage) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Resize the image to 240x240
        const aspectRatio = img.width / img.height;
        let newWidth, newHeight;
        if (aspectRatio >= 1) {
          newWidth = 240;
          newHeight = 240 / aspectRatio;
        } else {
          newWidth = 240 * aspectRatio;
          newHeight = 240;
        }

        canvas.width = 240;
        canvas.height = 240;
        ctx.drawImage(img, 0, 0, newWidth, newHeight, 0, 0, 240, 240);

        const imageData = ctx.getImageData(0, 0, 240, 240).data;
        const bitmapData = createBitmap(imageData, 240, 240);
        setBitmap(bitmapData);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(selectedImage);
  };

  const createBitmap = (imageData, width, height) => {
    const bitmapArray = [];

    for (let y = 0; y < height; y++) {
      const row = [];
      for (let x = 0; x < width; x++) {
        // Extract pixel data (RGBA) and convert to 0 or 1 (black or white)
        const pixelIndex = (y * width + x) * 4;
        const grayscaleValue =
          (imageData[pixelIndex] +
            imageData[pixelIndex + 1] +
            imageData[pixelIndex + 2]) /
          3;
        row.push(grayscaleValue > 127 ? 1 : 0); // Thresholding
      }
      bitmapArray.push(row);
    }

    return bitmapArray;
  };

  return (
    <div className="generate-bitmap-wrap">
      <input type="file" ref={fileInputRef} onChange={handleFileInputChange} />
      {/* <button onClick={() => fileInputRef.current.click()}>Choose Image</button> */}
      {selectedImage && (
        <div>
          <h2>Selected Image:</h2>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            width="200"
          />
          <button onClick={generateBitmap}>Generate Bitmap</button>
        </div>
      )}
      {bitmap && (
        <div>
          <h2>Bitmap Representation:</h2>
          <pre>{JSON.stringify(bitmap, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default GenerateBitMap;
