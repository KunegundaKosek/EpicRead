import { ComponentPropsWithoutRef, type ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type BaseProps = {
  children: ReactNode;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  BaseProps & { to?: never };
type LinkButtonProps = LinkProps & BaseProps & { to: string };

function isRouterLink(
  props: ButtonProps | LinkButtonProps
): props is LinkButtonProps {
  return "to" in props;
}

const Button = (props: ButtonProps | LinkButtonProps) => {
  if (isRouterLink(props)) {
    const { children, ...otherProps } = props;
    return (
      <Link {...otherProps}>
        {children}
      </Link>
    );
  }

  const { children, ...otherProps } = props;
  return (
    <button {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
