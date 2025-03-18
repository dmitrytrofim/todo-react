interface IBtnItem {
 children: React.ReactNode;
 id: string;
 handler: (id: string) => void;
}

function BtnItem({ children, id, handler }: IBtnItem) {
 return (
  <button onClick={() => handler(id)} className="h-[22px] cursor-pointer">
   {children}
  </button>
 );
}

export default BtnItem;
