import React, { useState } from 'react';
import axios from 'axios';

const PixelCanvas = () => {
  const [canvas, setCanvas] = useState(createInitialCanvas());
  const [selectedColor, setSelectedColor] = useState('black'); // Default color

  // Function to create an initial canvas state
  function createInitialCanvas() {
    // Initialize a 10x10 canvas
    return Array(10).fill().map(() => Array(10).fill('white'));
  }

  // Function to handle pixel click
  const handlePixelClick = (rowIndex, colIndex) => {
    // Create a copy of the current canvas state
    const newCanvas = canvas.map(row => [...row]);

    // Update the color of the clicked pixel
    newCanvas[rowIndex][colIndex] = selectedColor;

    // Update the canvas state
    setCanvas(newCanvas);
  };


  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post('http://localhost:3001/save', { canvas });
      console.log('Save response:', response.data);
    } catch (error) {
      console.error('Error saving canvas:', error);
    }
  };

  return (
    <div>
      <input type="color" value={selectedColor} onChange={handleColorChange} />
      <button onClick={handleSave}>Save</button>

      <div style={{ marginTop: '10px' }}>
        {canvas.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((color, colIndex) => (
              <div
                key={colIndex}
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: color,
                  border: '1px solid black'
                }}
                onClick={() => handlePixelClick(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PixelCanvas;
