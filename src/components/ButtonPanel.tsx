import { IButtonPanel } from '@/core/types/store';

function ButtonPanel({ children, handler }: IButtonPanel) {
 return (
  <button onClick={handler} className="border cursor-pointer p-[5px_10px]">
   {children}
  </button>
 );
}

export default ButtonPanel;
