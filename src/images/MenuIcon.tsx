import React from 'react';

interface MenuIconProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
}

const MenuIcon: React.FC<MenuIconProps> = ({ width = "24", height = "24", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    width={width}
    height={height}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

export default MenuIcon;
