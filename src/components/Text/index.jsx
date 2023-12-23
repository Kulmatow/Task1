import React from "react";

const sizeClasses = {
  txtGilroyMedium14WhiteA700cc: "font-gilroy font-medium",
  txtGilroyBold19: "font-bold font-gilroy",
  txtGilroyRegular1244Black90033: "font-gilroy font-normal",
  txtGilroyBold14: "font-bold font-gilroy",
  txtGilroyRegular12Blue800: "font-gilroy font-normal",
  txtGilroyMedium13Gray50001: "font-gilroy font-medium",
  txtGilroySemibold25: "font-gilroy font-semibold",
  txtGilroyMedium15WhiteA700: "font-gilroy font-medium",
  txtGilroyRegular12Black90033: "font-gilroy font-normal",
  txtGilroyMedium1244: "font-gilroy font-medium",
  txtGilroyBold241: "font-bold font-gilroy",
  txtGilroyRegular12Blue70002: "font-gilroy font-normal",
  txtGilroyMedium6: "font-gilroy font-medium",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroySemibold16: "font-gilroy font-semibold",
  txtGilroyRegular12: "font-gilroy font-normal",
  txtGilroyMedium14Gray90001: "font-gilroy font-medium",
  txtGilroyMedium15: "font-gilroy font-medium",
  txtGilroyBold20: "font-bold font-gilroy",
  txtGilroyMedium12: "font-gilroy font-medium",
  txtGilroySemibold14: "font-gilroy font-semibold",
  txtGilroyMedium13: "font-gilroy font-medium",
  txtGilroyRegular10: "font-gilroy font-normal",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtGilroyRegular15: "font-gilroy font-normal",
  txtGilroyRegular12Gray600: "font-gilroy font-normal",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtGilroyRegular1244: "font-gilroy font-normal",
  txtGilroyMedium1492: "font-gilroy font-medium",
  txtGilroyMedium14WhiteA7007f: "font-gilroy font-medium",
  txtGilroyRegular1446: "font-gilroy font-normal",
  txtGilroyBold19RedA70001: "font-bold font-gilroy",
  txtGilroyMedium12Green300: "font-gilroy font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
