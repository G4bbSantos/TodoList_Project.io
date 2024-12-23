import React from 'react';

interface ArrowCircleIconProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
}

const ArrowCircleIcon: React.FC<ArrowCircleIconProps> = ({ width = "24", height = "24",...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    {...props}
    className="hover:fill-slate-300"
  >
    <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm5.465-12.135l-5.465-5v5.635H6v1h6v5.768l5.463-4.999c.341-.306,.537-.744,.537-1.202s-.195-.895-.535-1.201Zm-.673,1.663l-3.792,3.469v-7.862l3.792,3.469,.003,.003c.132,.119,.205,.281,.205,.458s-.073,.339-.208,.461Z"/>
  </svg>
);

export default ArrowCircleIcon;