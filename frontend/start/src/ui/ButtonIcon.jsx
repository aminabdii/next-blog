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
    <button
      className={`
    flex justify-center items-center p-1 rounded-md gap-x-1 text-xs lg:text-sm 
    [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-inherit
    transition-all duration-300 ease-out
    ${className}
    ${btnType[variant]}
    
    `}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
