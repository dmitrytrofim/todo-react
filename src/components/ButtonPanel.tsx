import { IButtonPanel } from '~/modules';
import useStore from '~/store/todos';

function ButtonPanel({
 text,
 blockForField,
 blockForList,
 onClick,
}: IButtonPanel) {
 const listStore = useStore((state) => state.list);
 const fieldStore = useStore((state) => state.textField);

 const classBlock = ' bg-[gray] pointer-events-none';
 const clsBlockForField = blockForField && !fieldStore ? classBlock : '';
 const clsBlockForList =
  blockForList && listStore.length === 0 ? classBlock : '';

 return (
  <button
   onClick={onClick}
   className={
    'text-[#fff] bg-[#000] rounded-[10px] p-[4px_8px]' +
    clsBlockForField +
    clsBlockForList
   }
   type="button"
  >
   {text}
  </button>
 );
}

export default ButtonPanel;
