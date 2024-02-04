import { RecoilRoot, useRecoilValue } from 'recoil';
import './App.css';
import Button from './components/Button';
import { backgroundColorAtom } from './store/color';

function App() {
  return (
    <RecoilRoot>
      <BackgroundChanger />
    </RecoilRoot>
  );
}

function BackgroundChanger() {
  const backgroundColor = useRecoilValue(backgroundColorAtom);

  const colors = [
    'Red',
    'Yellow',
    'Black',
    'Purple',
    'Green',
    'Blue',
    'Default',
  ];

  return (
    <div>
      <div className="container" style={{ backgroundColor: backgroundColor }}>
        <div className="bar">
          {colors.map((color) => (
            <Button color={color} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
