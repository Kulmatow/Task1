import React from "react";

import { Img, Text } from "components";

const Columnten = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="ml-0.5 md:ml-[0] text-black-900 text-sm"
          size="txtGilroyMedium14"
        >
          {props?.text1}
        </Text>
        <Text
          className="ml-0.5 md:ml-[0] mt-[3px] text-gray-600 text-xs"
          size="txtGilroyRegular12Gray600"
        >
          {props?.text2}
        </Text>
        <Img
          className="h-[92px] md:h-auto md:ml-[0] ml-[33px] mt-[34px] object-cover rounded-[10px] w-4/5 sm:w-full"
          src="images/img_rectangle39467.png"
          alt="rectangle39467"
        />
      </div>
    </>
  );
};

Columnten.defaultProps = { text1: "Ванны", text2: "3000 товаров" };

export default Columnten;
