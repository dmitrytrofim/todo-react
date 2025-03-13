import { IButtonPanel } from '@/core/types/store';

function ButtonPanel({ handlerAddTodo }: IButtonPanel) {
 return (
  <button
   onClick={handlerAddTodo}
   className="border cursor-pointer p-[5px_10px]"
  >
   Добавить
  </button>
 );
}

export default ButtonPanel;
