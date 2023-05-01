import React from "react";
import styles from "./Button.module.scss";

const Button: React.FC = ({ ...props }: ButtonProps) => {
  return <button className={styles.base} {...props} />;
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
