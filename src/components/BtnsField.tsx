function BtnsField({ handler, value, text }: any) {
 return (
  <button
   onClick={handler}
   className={`border-[2px] rounded-[5px] p-[5px] ${
    value ? 'bg-[#9DA1AA] border-[#9DA1AA] text-[#fff] pointer-events-none' : ''
   }`}
   type="button"
  >
   {text}
  </button>
 );
}

export default BtnsField;
