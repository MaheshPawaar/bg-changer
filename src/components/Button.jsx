import { useSetRecoilState } from 'recoil';
import '../index.css';
import { backgroundColorAtom } from '../store/color';

function Button({ color }) {
  const setBackgroundColor = useSetRecoilState(backgroundColorAtom);
  return (
    <div>
      <button
        className={color}
        onClick={() => {
          if (color === 'Default') {
            setBackgroundColor('white');
          } else {
            setBackgroundColor(color);
          }
        }}
      >
        {color}
      </button>
    </div>
  );
}

export default Button;
