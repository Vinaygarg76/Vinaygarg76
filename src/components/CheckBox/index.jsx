import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = { FillBlueA700: "bg-blue_A700" };
const shapes = { RoundedBorder2: "rounded-[2.5px]" };
const sizes = { sm: "pt-[3px]" };

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      errors = [],
      shape,
      variant,
      size,
      id = "checkbox_id",
      onChange,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(shape && shapes[shape]) || ""} ${
              (size && sizes[size]) || ""
            } ${(variant && variants[variant]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder2"]),
  variant: PropTypes.oneOf(["FillBlueA700"]),
  size: PropTypes.oneOf(["sm"]),
};

CheckBox.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  shape: "",
  variant: "",
  size: "",
};

export { CheckBox };
