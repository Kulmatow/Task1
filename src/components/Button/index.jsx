import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[16px]" };
const variants = {
  fill: {
    blue_700_03: "bg-blue-700_03",
    black_900_19: "bg-black-900_19",
    white_A700: "bg-white-A700 text-green-600",
    light_blue_900: "bg-light_blue-900 text-white-A700",
    gray_50_02: "bg-gray-50_02",
    white_A700_7f: "bg-white-A700_7f",
    gray_100: "bg-gray-100",
    gray_100_01: "bg-gray-100_01",
  },
};
const sizes = { xs: "p-[3px]", sm: "p-[7px]", md: "p-2.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
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
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "blue_700_03",
    "black_900_19",
    "white_A700",
    "light_blue_900",
    "gray_50_02",
    "white_A700_7f",
    "gray_100",
    "gray_100_01",
  ]),
};

export { Button };
