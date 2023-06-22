import type { ComponentProps, ElementType } from "react";


type OwnProps<E extends ElementType> = {
  as?: E;
};

type Props<E extends ElementType> = OwnProps<E> & ComponentProps<E>;

function Button<E extends ElementType = "button">({
  children,
  as,
  ...props
}: Props<E>) {
  const Component = as || "button";
  let defaultProps = {};

  if (as === "button") {
    defaultProps = {
      type: "button",
    };
  }

  const allProps = { ...defaultProps, ...props } as const;

  return (
    <Component
      {...allProps}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      {children}
    </Component>
  );
}

export default Button;
