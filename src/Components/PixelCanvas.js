import React, { useState } from 'react';

const PixelCanvas = () => {
  const [canvas, setCanvas] = useState(createInitialCanvas());
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [isDrawing, setIsDrawing] = useState(false);

  function createInitialCanvas() {
    return Array(10).fill().map(() => Array(10).fill('white'));
  }

  const handlePixelClick = (rowIndex, colIndex) => {
    const newCanvas = canvas.map(row => [...row]);
    newCanvas[rowIndex][colIndex] = selectedColor;
    setCanvas(newCanvas);
  };

  const startDrawing = (rowIndex, colIndex) => {
    setIsDrawing(true);
    handlePixelClick(rowIndex, colIndex);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (rowIndex, colIndex) => {
    if (isDrawing) {
      handlePixelClick(rowIndex, colIndex);
    }
  };

  return (
    <div>
      <input type="color" value={selectedColor} onChange={e => setSelectedColor(e.target.value)} />
      <div style={{ marginTop: '10px' }} onMouseUp={stopDrawing}>
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
                onMouseDown={() => startDrawing(rowIndex, colIndex)}
                onMouseEnter={() => draw(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PixelCanvas;
