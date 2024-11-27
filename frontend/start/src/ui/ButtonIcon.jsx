import React from "react";

const btnType = {
  primary:
    "bg-primary-100 text-primary-700 hover:bg-primary-900 hover:text-white",
  secondary:
    "bg-secondary-200  text-secondary-500 hover:bg-secondary-500 hover:text-secondary-0",
  outline:
    "border border-secondary-200 text-secondary-500 hover:bg-secondary-200",
  red: "bg-red-100  text-red-500 hover:bg-red-500 hover:text-white",
  danger: "border border-red-100 text-red-500",
};

const ButtonIcon = ({ children, onClick, className, variant, ...rest }) => {
  return (
    <button onClick={onClick} className={`${className} ${btnType[variant]}`}>
      {children}
    </button>
  );
};

export default ButtonIcon;
