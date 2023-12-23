import React from "react";

import { Button, Img, Line, Text } from "components";

const Rowgroup = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[30px] md:ml-[0] ml-[85px]"
          src="images/img_group.svg"
          alt="group"
        />
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[138px] md:ml-[0] ml-[52px] rounded-[20px]"
          leftIcon={
            <Img
              className="mt-[5px] mb-1 mr-[15px]"
              src="images/img_megaphone.svg"
              alt="megaphone"
            />
          }
          color="black_900_19"
          size="md"
          variant="fill"
        >
          <div className="!text-white-A700 font-gilroy font-medium text-[15px] text-left">
            {props?.buttontext}
          </div>
        </Button>
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[22px] p-[9px] rounded-[20px] shadow-bs w-[48%] md:w-full">
          <Img
            className="h-[18px] ml-1 md:ml-[0] w-[18px]"
            src="images/img_rewind.svg"
            alt="rewind"
          />
          <Text
            className="md:ml-[0] ml-[9px] text-[13px] text-gray-500"
            size="txtGilroyMedium13"
          >
            {props?.searchtext}
          </Text>
          <Text
            className="md:ml-[0] ml-[533px] text-[13px] text-gray-500_01"
            size="txtGilroyMedium13Gray50001"
          >
            {props?.productcounttext}
          </Text>
        </div>
        <div className="flex flex-row gap-[9px] items-start justify-center md:ml-[0] ml-[22px] w-[12%] md:w-full">
          <div className="h-[26px] relative w-[77%]">
            <Text
              className="mb-[-3.54px] ml-auto text-[10px] text-white-A700 z-[1]"
              size="txtGilroyRegular10"
            >
              {props?.welcometext}
            </Text>
            <Text
              className="mt-auto mx-auto text-sm text-white-A700"
              size="txtGilroySemibold14"
            >
              {props?.logintext}
            </Text>
          </div>
          <Button
            className="border border-gray-400 border-solid flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
            shape="circle"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            <Img className="h-[17px]" src="images/img_lock.svg" alt="lock" />
          </Button>
        </div>
        <Line className="bg-white-A700_33 h-[30px] md:h-px mb-[3px] ml-2.5 md:ml-[0] md:mt-0 mt-[7px] md:w-full w-px" />
        <div className="md:h-[30px] h-[35px] md:ml-[0] ml-[9px] relative w-[3%] md:w-full">
          <Button
            className="absolute bottom-[0] flex h-[30px] inset-x-[0] items-center justify-center mx-auto rounded-[50%] w-[30px]"
            shape="circle"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            <Img src="images/img_cart.svg" alt="cart" />
          </Button>
          <Text
            className="absolute bg-red-700 flex h-3 items-center justify-center right-[0] rounded-[50%] text-[6px] text-center text-white-A700 top-[0] w-3"
            size="txtGilroyMedium6"
          >
            {props?.cartitemcounttext}
          </Text>
        </div>
      </div>
    </>
  );
};

Rowgroup.defaultProps = {
  buttontext: "Каталог",
  searchtext: "Поиск",
  productcounttext: "42903 товаров",
  logintext: "Вход/Регистрация",
  welcometext: "Добро пожаловать",
  cartitemcounttext: "2",
};

export default Rowgroup;
