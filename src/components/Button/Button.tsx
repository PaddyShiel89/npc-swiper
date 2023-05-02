import React from "react";
import styles from "./Button.module.scss";

/* -------------------------------------------------------------------------- */
/*                            Base button component                           */
/* -------------------------------------------------------------------------- */

const Button = ({ type = "button", ...props }: ButtonProps) => {
  return <button className={styles.base} {...props} />;
};

export default Button;

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
