import React from 'react';

export function Wrapper({ children }: { children: React.ReactNode }) {
 return (
  <div className="font-inter font-400 text-16 leading-[1.2] text-t-black bg-b-white relative grid min-h-screen grid-cols-[minmax(300px,_1fr)] grid-rows-[auto,_1fr,_auto] overflow-hidden">
   {children}
  </div>
 );
}

interface ContainerProps {
 children: React.ReactNode;
 width: string;
 padding: string;
 margin: string;
}

export function Container({
 children,
 width,
 padding,
 margin,
}: ContainerProps) {
 return (
  <div className={`w-full ${width} mx-auto ${padding} ${margin}`}>
   {children}
  </div>
 );
}

Container.defaultProps = {
 width: 'max-w-[800px]',
 padding: 'px-[10px]',
 margin: '',
};
