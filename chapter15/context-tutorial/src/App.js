import './App.css';
import ColorBox from './component/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './component/SelectColors';

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
