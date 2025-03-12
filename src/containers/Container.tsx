function Container({
 children,
 cls = 'max-w-[1200px]',
}: {
 children: React.ReactNode;
 cls?: string;
}) {
 return <div className={`w-full mx-auto px-[10px] ${cls}`}>{children}</div>;
}

export default Container;
