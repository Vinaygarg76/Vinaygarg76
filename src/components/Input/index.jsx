import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineBluegray100: "bg-white_A700 border border-bluegray_100 border-solid",
  FillBlack902: "bg-black_902",
  OutlineBluegray300: "bg-white_A700 border border-bluegray_300 border-solid",
  srcOutlineBluegray300:
    "bg-white_A700 border border-bluegray_300 border-solid",
};
const shapes = {
  RoundedBorder6: "rounded-md",
  CustomBorderTL12:
    "rounded-bl-none rounded-br-none rounded-tl-[12px] rounded-tr-[12px]",
  srcRoundedBorder8: "rounded-lg",
};
const sizes = {
  sm: "pl-3 py-[13px]",
  md: "pb-[9px] pl-[9px] pt-3.5",
  lg: "pb-[9px] pt-[15px] px-[9px]",
  xl: "pl-3 pr-[17px] py-[17px]",
  "2xl": "pl-3 py-[17px]",
  "3xl": "pl-4 py-4",
  "4xl": "pb-3 pt-[18px] px-3",
  "5xl": "pl-4 py-[18px]",
  "6xl": "pb-3 pr-3 pt-[19px]",
  smSrc: "pr-[13px] py-[13px]",
  mdSrc: "pl-[17px] py-[17px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,

      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "CustomBorderTL12",
    "srcRoundedBorder8",
  ]),
  variant: PropTypes.oneOf([
    "OutlineBluegray100",
    "FillBlack902",
    "OutlineBluegray300",
    "srcOutlineBluegray300",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "smSrc",
    "mdSrc",
  ]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
