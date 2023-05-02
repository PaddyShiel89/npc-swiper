import React from "react";
import styles from "./Button.module.scss";

/* -------------------------------------------------------------------------- */
/*                            Base button component                           */
/* -------------------------------------------------------------------------- */

const Button = ({ label, type = "button", ...props }: ButtonProps) => {
  // If a `label` is provided, override the `children` prop and wrap the text in
  // a span.
  if (label) props.children = <span>{label}</span>;

  return <button className={styles.base} type={type} {...props} />;
};

export default Button;

// Children should not be provided along with a label
type ConditionalLabelButton =
  | {
      children?: React.ReactNode;
      label?: never;
    }
  | {
      children?: never;
      /** Provide simple text in place of `children`.  */
      label?: string;
    };

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ConditionalLabelButton;
