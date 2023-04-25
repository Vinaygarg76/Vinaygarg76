import React from "react";

const variantClasses = {
  h1: "font-semibold text-[9px]",
  h2: "text-4xl sm:text-[32px] md:text-[34px]",
  h3: "md:text-3xl sm:text-[28px] text-[32px]",
  h4: "sm:text-2xl md:text-[26px] text-[28px]",
  h5: "text-2xl md:text-[22px] sm:text-xl",
  h6: "text-xl",
  body1: "text-lg",
  body2: "text-base",
  body3: "font-medium text-[15px]",
  body4: "text-sm",
  body5: "text-xs",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
