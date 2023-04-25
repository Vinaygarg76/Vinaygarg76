import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder6: "rounded-md",
  RoundedBorder3: "rounded-[3px]",
  RoundedBorder10: "rounded-[10px]",
  CircleBorder23: "rounded-[23px]",
  CustomBorderBL10:
    "rounded-bl-[10px] rounded-br-[10px] rounded-tl-none rounded-tr-[10px]",
  icbRoundedBorder6: "rounded-md",
  icbCircleBorder10: "rounded-[10px]",
  icbCircleBorder20: "rounded-[20px]",
  icbCircleBorder28: "rounded-[28px]",
};
const variants = {
  FillBlueA700: "bg-blue_A700 text-white_A700",
  OutlineBluegray402: "bg-white_A700 border border-bluegray_402 border-solid",
  FillBluegray100: "bg-bluegray_100 text-bluegray_402",
  FillBlue50: "bg-blue_50 text-gray_902",
  GradientBlack90066Black90066: "bg-gradient  text-white_A700",
  FillIndigo50: "bg-indigo_50 text-black_900",
  OutlineBlueA700:
    "bg-white_A700 border border-blue_A700 border-solid text-blue_A700",
  FillBlack902: "bg-black_902 text-white_A700",
  OutlineBlueA700_1: "border border-blue_A700 border-solid text-blue_A700",
  OutlineBluegray100:
    "bg-white_A700 border border-bluegray_100 border-solid text-bluegray_402",
  OutlineBlueA700_2:
    "bg-blue_51 border border-blue_A700 border-solid text-blue_A700",
  OutlineBluegray300:
    "border border-bluegray_300 border-solid text-bluegray_300",
  FillBlack90099: "bg-black_900_99 text-white_A700",
  icbOutlineBluegray100:
    "bg-white_A700 border border-bluegray_100 border-solid",
  icbFillBlack900: "bg-black_900",
  icbFillRed400: "bg-red_400",
  icbFillBlueA201: "bg-blue_A201",
  icbFillBlueA700: "bg-blue_A700",
  icbGradientBlack90066Black90066: "bg-gradient ",
  icbFillBlue500: "bg-blue_500",
  icbFillGray500: "bg-gray_500",
};
const sizes = {
  sm: "p-1.5",
  md: "pr-1 py-2",
  lg: "pr-2 py-2",
  xl: "px-2 py-[9px]",
  "2xl": "px-2.5 py-[13px]",
  "3xl": "p-3.5",
  "4xl": "pr-2.5 py-[15px]",
  "5xl": "p-[17px]",
  smIcn: "p-1",
  mdIcn: "p-2",
  lgIcn: "p-3",
  xlIcn: "p-[15px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "RoundedBorder3",
    "RoundedBorder10",
    "CircleBorder23",
    "CustomBorderBL10",
    "icbRoundedBorder6",
    "icbCircleBorder10",
    "icbCircleBorder20",
    "icbCircleBorder28",
  ]),
  variant: PropTypes.oneOf([
    "FillBlueA700",
    "OutlineBluegray402",
    "FillBluegray100",
    "FillBlue50",
    "GradientBlack90066Black90066",
    "FillIndigo50",
    "OutlineBlueA700",
    "FillBlack902",
    "OutlineBlueA700_1",
    "OutlineBluegray100",
    "OutlineBlueA700_2",
    "OutlineBluegray300",
    "FillBlack90099",
    "icbOutlineBluegray100",
    "icbFillBlack900",
    "icbFillRed400",
    "icbFillBlueA201",
    "icbFillBlueA700",
    "icbGradientBlack90066Black90066",
    "icbFillBlue500",
    "icbFillGray500",
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
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
  ]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
