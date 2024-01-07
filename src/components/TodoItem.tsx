function TodoItem({ id, text, completed }: any) {
 return (
  <div key={id} className="flex items-center gap-[7px]">
   <input className="shrink-0 cursor-pointer" type="checkbox" />
   <p
    className={`grow text-[20px] p-[10px] border-[1px] rounded-[5px] ${
     completed ? 'bg-[#B5B8B1]' : ''
    }`}
   >
    {text}
   </p>
   <div className="cursor-pointer">&#10008;</div>
  </div>
 );
}

export default TodoItem;
