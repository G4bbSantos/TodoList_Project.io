import React from 'react';

interface EditCircleIconProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  onEditTx: () => void;
}

const EditCircleIcon: React.FC<EditCircleIconProps> = ({ width = "24", height = "24", onEditTx, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    className="hover:fill-slate-300"
    onClick={onEditTx}
    {...props}
  >
    <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm2.244-17.184l-6.926,6.926c-.851.85-1.318,1.98-1.318,3.183v1.575c0,.276.224.5.5.5h1.575c1.202,0,2.333-.468,3.183-1.318l6.926-6.926c.526-.526.816-1.226.816-1.97s-.29-1.443-.816-1.97c-1.053-1.053-2.887-1.053-3.939,0Zm-3.693,10.158c-.661.661-1.54,1.025-2.476,1.025h-1.075v-1.075c0-.936.364-1.814,1.025-2.476l5.108-5.108,2.525,2.525-5.108,5.108Zm6.926-6.926l-1.11,1.11-2.525-2.525,1.11-1.11c.676-.676,1.85-.676,2.525,0,.338.338.523.786.523,1.263s-.186.925-.523,1.263Z"/>
  </svg>
);

export default EditCircleIcon;