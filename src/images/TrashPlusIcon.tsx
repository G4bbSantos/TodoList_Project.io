import React from 'react';

interface TrashIconProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  onAddTrash: () => void;
}

const TrashIcon: React.FC<TrashIconProps> = ({ width = "24", height = "24", onAddTrash, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    className="hover:fill-slate-300"
    {...props}
    onClick={onAddTrash}
  >
    <path d="m21.5,4h-4.028c-.25-2.247-2.16-4-4.472-4h-2c-2.312,0-4.223,1.753-4.472,4H2.5c-.276,0-.5.224-.5.5s.224.5.5.5h1.499l-.025,14.5c0,2.481,2.019,4.5,4.5,4.5h7c2.481,0,4.5-2.019,4.5-4.499l.025-14.501h1.501c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM11,1h2c1.76,0,3.221,1.306,3.464,3H7.536c.243-1.694,1.704-3,3.464-3Zm7.974,18.5c0,1.93-1.57,3.5-3.5,3.5h-7c-1.93,0-3.5-1.57-3.5-3.499l.025-14.501h14l-.025,14.5Zm-2.974-5.5c0,.276-.224.5-.5.5h-3v3c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-3h-3c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h3v-3c0-.276.224-.5.5-.5s.5.224.5.5v3h3c.276,0,.5.224.5.5Z"/>
  </svg>
);

export default TrashIcon;
