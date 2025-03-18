function ItemTodo({
 text,
 id,
 removeTodo,
}: {
 text: string;
 id: string;
 removeTodo: (id: string) => void;
}) {
 return (
  <li className="flex items-center gap-[10px] rounded-[5px] border px-[5px]">
   <button className="h-[22px] cursor-pointer">&#10004;</button>
   <input
    className="w-full h-full py-[5px]"
    type="text"
    readOnly
    value={text}
   />
   <button onClick={() => removeTodo(id)} className="h-[22px] cursor-pointer">
    &#10008;
   </button>
  </li>
 );
}

export default ItemTodo;
