import React from "react";

interface CheckmarkCircleIconProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  strokeColor: string;
  onToggle: () => void; // Função para alternar o estado.
}

const CheckmarkCircleIcon: React.FC<CheckmarkCircleIconProps> = ({
  width = "24",
  height = "24",
  strokeColor,
  onToggle,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    {...props}
    className="cursor-pointer"
    onClick={onToggle} // Evento associado
  >
    <path
      d="M18.756,8.048c.193.197.191.514-.006.708l-5.325,5.244c-.686.671-1.568,1.007-2.45,1.007-.873,0-1.747-.329-2.43-.988l-2.296-2.264c-.196-.194-.198-.51-.005-.707.196-.197.512-.199.708-.005l2.292,2.26c.974.941,2.505.937,3.48-.018l5.324-5.243c.195-.193.513-.191.707.005Zm5.244,3.952c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Z"
      stroke={strokeColor} // Cor condicional
      fill="none"
    />
  </svg>
);

export default CheckmarkCircleIcon;
