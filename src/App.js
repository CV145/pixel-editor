import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PixelCanvas from './Components/PixelCanvas';



function App() {
  const [selectedTool, setSelectedTool] = useState(null);
  return (
    <div>
      <PixelCanvas/>
    </div>
  );
}

export default App;
