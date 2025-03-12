function TheWrapper({
 children,
 cls = '',
}: {
 children: React.ReactNode;
 cls?: string;
}) {
 return (
  <div
   className={`relative min-h-dvh grid grid-cols-[minmax(300px,_1fr)] grid-rows-[auto_1fr_auto] overflow-hidden ${cls}`}
  >
   {children}
  </div>
 );
}

export default TheWrapper;
