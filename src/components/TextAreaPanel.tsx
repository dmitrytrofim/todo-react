interface ITextPanel {
 inputText: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
 handlerAddTodo: (event: React.KeyboardEvent) => void;
 field: React.Ref<HTMLTextAreaElement>;
 textArea: string;
}

function TextAreaPanel({
 inputText,
 handlerAddTodo,
 field,
 textArea,
}: ITextPanel) {
 return (
  <textarea
   onInput={inputText}
   onKeyDown={handlerAddTodo}
   rows={2}
   ref={field}
   value={textArea}
   className="w-full border rounded-[10px] p-[5px_10px]"
  ></textarea>
 );
}

export default TextAreaPanel;
