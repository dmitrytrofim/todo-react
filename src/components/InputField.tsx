function InputField({ area, addTodo, areaReset }: any) {
 return (
  <div className="mb-[20px]">
   <textarea
    ref={area}
    className="flex w-full h-[100px] text-[20px] outline-none border-[1px] rounded-[5px] p-[10px] mb-[20px] resize-none"
   ></textarea>
   <div className="flex items-center justify-center gap-[30px]">
    <button
     onClick={addTodo}
     className="border-[2px] rounded-[5px] p-[5px]"
     type="button"
    >
     Добавить
    </button>
    <button
     onClick={areaReset}
     className="border-[2px] rounded-[5px] p-[5px]"
     type="button"
    >
     Очистить
    </button>
   </div>
  </div>
 );
}

export default InputField;
