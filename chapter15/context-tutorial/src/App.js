import './App.css';
import ColorBox from './component/ColorBox';
import ColorContext from './contexts/color';

function App() {
  return (
    <ColorContext.Provider value={{ color: 'red' }}>
      <div>
        <ColorBox></ColorBox>
      </div>
    </ColorContext.Provider>
  );
}

export default App;
