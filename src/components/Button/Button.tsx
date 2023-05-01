import React from "react";

const Button: React.FC = ({ ...props }: ButtonProps) => {
  return <button {...props} />;
};

export default Button;

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

Button.defaultProps = {
  type: "button",
};
