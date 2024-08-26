import ButtonPanel from './ButtonPanel';
import useStore from '~/store/todos';

function ControlPanel({ styleCls }: { styleCls?: string }) {
 const addTodoStore = useStore((state) => state.addTodo);
 const focusFieldStore = useStore((state) => state.focusField);
 const clearFieldStore = useStore((state) => state.clearField);
 const removeListStore = useStore((state) => state.removeList);

 const addTodo = () => {
  addTodoStore(Date.now());
  focusFieldStore();
 };

 const clearField = () => {
  clearFieldStore();
  focusFieldStore();
 };

 const removeList = () => {
  if (confirm('Вы уверены?')) removeListStore();
  clearFieldStore();
  focusFieldStore();
 };

 return (
  <div className={'flex items-center justify-center gap-[10px] ' + styleCls}>
   <ButtonPanel onClick={addTodo} blockForField text="Добавить" />
   <ButtonPanel onClick={clearField} blockForField text="Очистить" />
   <ButtonPanel onClick={removeList} blockForList text="Очистить список" />
  </div>
 );
}

export default ControlPanel;
