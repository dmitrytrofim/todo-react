import { IButtonPanel } from '@/core/types/store';

function ButtonPanel({ children, handler, block }: IButtonPanel) {
 return (
  <button
   onClick={handler}
   className={`text-[white] bg-[black] rounded-[5px] cursor-pointer p-[5px_10px] ${
    block && 'bg-[gray] pointer-events-none'
   }`}
  >
   {children}
  </button>
 );
}

export default ButtonPanel;
