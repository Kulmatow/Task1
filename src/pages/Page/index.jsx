import React from "react";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import Columnten from "components/Columnten";
import Rowgroup from "components/Rowgroup";

const Page = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);
  const sliderRef2 = React.useRef(null);
  const [sliderState2, setsliderState2] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:h-[406px] h-[70px] justify-end md:px-5 relative w-full">
            <Line className="h-px mb-1.5 ml-[85px] mt-auto rounded-[1px] shadow-bs1 w-[29%]" />
            <Rowgroup className="absolute bg-blue-700 flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-center justify-center m-auto p-[15px] w-full" />
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[1242px] mt-5 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-1.5 items-center justify-start w-[5%] md:w-full">
              <Img
                className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                src="images/img_photo1.png"
                alt="photoOne"
              />
              <Text
                className="text-black-900 text-center text-xs"
                size="txtGilroyRegular12"
              >
                Скидки
              </Text>
            </div>
            <div className="flex flex-col gap-[7px] h-[81px] md:h-auto items-center justify-start w-[60px]">
              <Img
                className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                src="images/img_photo2.png"
                alt="photoTwo"
              />
              <Text
                className="text-black-900 text-center text-xs w-auto"
                size="txtGilroyRegular12"
              >
                Акции
              </Text>
            </div>
            <div className="flex flex-col gap-[7px] h-[81px] md:h-auto items-center justify-start w-[72px]">
              <Img
                className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                src="images/img_photo3.png"
                alt="photoThree"
              />
              <Text
                className="text-black-900 text-center text-xs w-auto"
                size="txtGilroyRegular12"
              >
                Распродажа
              </Text>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[30px] grid grid-cols-2 w-[13%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[7px] h-[81px] md:h-auto items-center justify-start w-[60px]">
                <Img
                  className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                  src="images/img_photo4.png"
                  alt="photoFour"
                />
                <Text
                  className="text-black-900 text-center text-xs w-auto"
                  size="txtGilroyRegular12"
                >
                  Подарки
                </Text>
              </div>
              <div className="flex flex-col gap-[7px] items-center justify-start w-auto">
                <Img
                  className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                  src="images/img_photo5.png"
                  alt="photoFive"
                />
                <Text
                  className="text-black-900 text-center text-xs w-auto"
                  size="txtGilroyRegular12"
                >
                  Подарки
                </Text>
              </div>
            </List>
            <Img
              className="h-20 w-[60px]"
              src="images/img_close.svg"
              alt="close"
            />
            <Img
              className="h-20 w-[60px]"
              src="images/img_close.svg"
              alt="close_One"
            />
            <Img
              className="h-20 w-[60px]"
              src="images/img_close.svg"
              alt="close_Two"
            />
            <Img
              className="h-20 w-[60px]"
              src="images/img_close.svg"
              alt="close_Three"
            />
            <Img
              className="h-20 w-[60px]"
              src="images/img_close.svg"
              alt="close_Four"
            />
            <Img
              className="h-20 w-[60px]"
              src="images/img_close.svg"
              alt="close_Five"
            />
            <Img
              className="h-20 w-[60px]"
              src="images/img_close.svg"
              alt="close_Six"
            />
            <Img
              className="h-20 w-[60px]"
              src="images/img_close.svg"
              alt="close_Seven"
            />
            <Img
              className="h-20 w-[60px]"
              src="images/img_close.svg"
              alt="close_Eight"
            />
          </div>
          <Text
            className="mt-12 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
            size="txtGilroySemibold25"
          >
            Категории
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1238px] mt-[17px] mx-auto md:px-5 w-full">
            <Columnten className="bg-white-A700 flex flex-col h-[170px] items-start justify-end pl-2 pt-2 rounded-[10px] w-[170px]" />
            <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-end ml-2 md:ml-[0] pl-2 pt-2 rounded-[10px] w-[169px] md:w-full">
              <Text
                className="ml-0.5 md:ml-[0] text-black-900 text-sm"
                size="txtGilroyMedium14"
              >
                Смесители
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] text-gray-600 text-xs"
                size="txtGilroyRegular12Gray600"
              >
                3000 товаров
              </Text>
              <Img
                className="h-[107px] md:h-auto md:ml-[0] ml-[47px] mt-[21px] object-cover rounded-[10px] w-[71%] sm:w-full"
                src="images/img_rectangle39467_107x113.png"
                alt="rectangle39467_One"
              />
            </div>
            <div className="bg-white-A700 flex flex-col h-[170px] items-start justify-start ml-2 md:ml-[0] p-[9px] rounded-[10px] w-[170px]">
              <Text className="text-black-900 text-sm" size="txtGilroyMedium14">
                Вытяжки для кухни
              </Text>
              <Text
                className="text-gray-600 text-xs"
                size="txtGilroyRegular12Gray600"
              >
                3000 товаров
              </Text>
              <Img
                className="h-[73px] md:h-auto mb-3 ml-1 md:ml-[0] mt-[30px] object-cover rounded-[10px] w-[94%] sm:w-full"
                src="images/img_rectangle39467_73x142.png"
                alt="rectangle39467_Two"
              />
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col gap-[13px] justify-end ml-2 md:ml-[0] pt-[9px] rounded-[10px] w-[169px] md:w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] mr-[50px]">
                <Text
                  className="text-black-900 text-sm"
                  size="txtGilroyMedium14"
                >
                  Кухонные мойки
                </Text>
                <Text
                  className="text-gray-600 text-xs"
                  size="txtGilroyRegular12Gray600"
                >
                  3000 товаров
                </Text>
              </div>
              <Img
                className="h-[114px] md:h-auto object-cover rounded-[10px] w-full"
                src="images/img_rectangle39467_114x168.png"
                alt="rectangle39467_Three"
              />
            </div>
            <div className="bg-white-A700 flex flex-col gap-4 h-[170px] justify-start ml-2 md:ml-[0] p-0.5 rounded-[10px] w-[170px]">
              <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] mt-[7px]">
                <Text
                  className="text-black-900 text-sm"
                  size="txtGilroyMedium14"
                >
                  Другие
                </Text>
                <Text
                  className="text-gray-600 text-xs"
                  size="txtGilroyRegular12Gray600"
                >
                  3000 товаров
                </Text>
              </div>
              <Img
                className="h-[106px] md:h-auto mb-[3px] mr-1.5 object-cover rounded-[10px] w-[97%] sm:w-full"
                src="images/img_.png"
                alt="Fifteen"
              />
            </div>
            <div className="bg-white-A700 md:h-[141px] h-[170px] ml-2 md:ml-[0] p-[5px] relative rounded-[10px] w-[170px]">
              <div className="absolute flex flex-col items-center justify-start left-[6%] top-[5%] w-[47%]">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtGilroyMedium14"
                  >
                    Унитазы
                  </Text>
                  <Text
                    className="mt-[3px] text-gray-600 text-xs"
                    size="txtGilroyRegular12Gray600"
                  >
                    3000 товаров
                  </Text>
                </div>
              </div>
              <Img
                className="absolute bottom-[3%] h-[141px] object-cover right-[3%] rounded-[10px] w-3/4"
                src="images/img__141x126.png"
                alt="Seventeen"
              />
            </div>
            <div className="bg-white-A700 flex flex-col h-[170px] items-start justify-start ml-2 md:ml-[0] p-[9px] rounded-[10px] w-[170px]">
              <Text className="text-black-900 text-sm" size="txtGilroyMedium14">
                Вытяжки для кухни
              </Text>
              <Text
                className="text-gray-600 text-xs"
                size="txtGilroyRegular12Gray600"
              >
                3000 товаров
              </Text>
              <Img
                className="h-[74px] md:h-auto mb-[13px] ml-1 md:ml-[0] mt-[29px] object-cover rounded-[10px] w-[94%] sm:w-full"
                src="images/img_rectangle39467_73x142.png"
                alt="rectangle39467_Four"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-2 items-center justify-start max-w-[1238px] mt-2 mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col gap-3.5 justify-end pt-2 rounded-[10px] w-[170px] md:w-full">
              <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] mr-[72px]">
                <Text
                  className="text-black-900 text-sm"
                  size="txtGilroyMedium14"
                >
                  Умывальники
                </Text>
                <Text
                  className="text-gray-600 text-xs"
                  size="txtGilroyRegular12Gray600"
                >
                  3000 товаров
                </Text>
              </div>
              <Img
                className="h-[113px] md:h-auto object-cover rounded-[10px] w-full"
                src="images/img_rectangle39463.png"
                alt="rectangle39463"
              />
            </div>
            <div className="bg-white-A700 flex flex-col h-[170px] items-start justify-end pt-2.5 px-2.5 rounded-[10px] w-[170px]">
              <Text className="text-black-900 text-sm" size="txtGilroyMedium14">
                Полотенцесушители
              </Text>
              <Text
                className="text-gray-600 text-xs"
                size="txtGilroyRegular12Gray600"
              >
                3000 товаров
              </Text>
              <Img
                className="h-[110px] md:h-auto ml-6 md:ml-[0] mt-4 object-cover rounded-[10px] w-[83%] sm:w-full"
                src="images/img_rectangle39462.png"
                alt="rectangle39462"
              />
            </div>
            <div className="bg-white-A700 flex flex-col h-[170px] items-start justify-end pl-1 py-1 rounded-[10px] w-[170px]">
              <Text
                className="ml-1.5 md:ml-[0] mt-1.5 text-black-900 text-sm"
                size="txtGilroyMedium14"
              >
                Водонагреватели
              </Text>
              <div className="md:h-[125px] h-[136px] ml-1.5 md:ml-[0] relative w-[96%]">
                <Text
                  className="absolute left-[0] text-gray-600 text-xs top-[0]"
                  size="txtGilroyRegular12Gray600"
                >
                  3000 товаров
                </Text>
                <Img
                  className="absolute bottom-[0] h-[125px] object-cover right-[0] rounded-[10px] w-[72%]"
                  src="images/img__125x113.png"
                  alt="TwentyTwo"
                />
              </div>
            </div>
            <div className="bg-white-A700 md:h-[156px] h-[170px] pt-[5px] px-[5px] relative rounded-[10px] w-[170px]">
              <div className="absolute flex flex-col items-center justify-start left-[6%] top-[5%] w-[47%]">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtGilroyMedium14"
                  >
                    Душевые
                  </Text>
                  <Text
                    className="text-gray-600 text-xs"
                    size="txtGilroyRegular12Gray600"
                  >
                    3000 товаров
                  </Text>
                </div>
              </div>
              <Img
                className="absolute bottom-[0] h-[156px] object-cover right-[3%] rounded-[10px] w-[87%]"
                src="images/img__156x147.png"
                alt="TwentyFour"
              />
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-2 grid grid-cols-2 w-[29%] md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-col items-start justify-end pt-2 px-2 rounded-[10px] w-full">
                <Text
                  className="text-black-900 text-sm"
                  size="txtGilroyMedium14"
                >
                  Водонагреватели
                </Text>
                <Text
                  className="text-gray-600 text-xs"
                  size="txtGilroyRegular12Gray600"
                >
                  3000 товаров
                </Text>
                <Img
                  className="h-[118px] md:h-auto mt-[7px] object-cover rounded-[10px] w-[99%] sm:w-full"
                  src="images/img__118x151.png"
                  alt="TwentySix"
                />
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-end pt-2 px-2 rounded-[10px] w-full">
                <Text
                  className="text-black-900 text-sm"
                  size="txtGilroyMedium14"
                >
                  Водонагреватели
                </Text>
                <Text
                  className="text-gray-600 text-xs"
                  size="txtGilroyRegular12Gray600"
                >
                  3000 товаров
                </Text>
                <Img
                  className="h-[118px] md:h-auto mt-[7px] object-cover rounded-[10px] w-[99%] sm:w-full"
                  src="images/img__118x151.png"
                  alt="TwentyEight"
                />
              </div>
            </List>
            <div className="bg-white-A700 flex flex-col h-[170px] items-start justify-end pt-2.5 px-2.5 rounded-[10px] w-[170px]">
              <Text className="text-black-900 text-sm" size="txtGilroyMedium14">
                Полотенцесушители
              </Text>
              <Text
                className="text-gray-600 text-xs"
                size="txtGilroyRegular12Gray600"
              >
                3000 товаров
              </Text>
              <Img
                className="h-[110px] md:h-auto ml-6 md:ml-[0] mt-4 object-cover rounded-[10px] w-[83%] sm:w-full"
                src="images/img_rectangle39462.png"
                alt="rectangle39462_One"
              />
            </div>
          </div>
          <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1252px] mt-[50px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtGilroySemibold25"
            >
              Хиты продаж
            </Text>
            <div className="flex flex-col items-center justify-end p-[9px]">
              <Text
                className="text-base text-blue-700_01"
                size="txtGilroySemibold16"
              >
                перейти в каталог
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1370px] mt-3.5 mx-auto md:px-5 w-full">
            {/* <Img
              className="h-10 md:mt-0 mt-[135px] rounded-[10px] w-10"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            /> */}
            <List
              className="md:flex-1 sm:flex-col flex-row gap-2.5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 md:ml-[0] ml-[25px] w-[91%] md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-solid border-white-A700 hover:cursor-pointer flex flex-col items-start justify-start p-3 rounded-lg hover:shadow-bs2 hover:w-full w-full">
                <div className="h-[149px] relative w-full">
                  <Img
                    className="h-[149px] m-auto object-cover rounded-[9px] w-full"
                    src="images/img__149x175.png"
                    alt="ThirtyTwo"
                  />
                  <Button
                    className="absolute flex h-6 items-center justify-center right-[6%] rounded top-[7%] w-6"
                    color="white_A700_7f"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_favorite.svg"
                      alt="favorite"
                    />
                  </Button>
                </div>
                <Text
                  className="mt-[9px] text-gray-900_01 text-sm tracking-[0.28px] w-full"
                  size="txtGilroyMedium14Gray90001"
                >
                  Держатель для лейки BOOU PG605
                </Text>
                <Text
                  className="mt-[5px] text-[19px] text-black-900"
                  size="txtGilroyBold19"
                >
                  1294 с
                </Text>
                <Text
                  className="mt-[3px] text-green-400 text-xs"
                  size="txtGilroyMedium12"
                >
                  В наличии
                </Text>
                <div className="flex flex-row gap-[4.15px] items-center justify-start mt-1 w-auto">
                  <div className="bg-blue-700_02 h-[5px] rounded-sm w-[5px]"></div>
                  <Text
                    className="text-blue-700_02 text-xs w-auto"
                    size="txtGilroyRegular12Blue70002"
                  >
                    Комплект
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-center justify-between mt-[7px] w-full">
                  <Button
                    className="flex h-[33px] items-center justify-center w-[33px]"
                    shape="round"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_minus.svg"
                      alt="minus"
                    />
                  </Button>
                  <div className="flex flex-col h-[33px] md:h-auto items-center justify-start py-[9px] w-[73px]">
                    <Text
                      className="text-[15px] text-black-900 text-center w-[25px]"
                      size="txtGilroyMedium15"
                    >
                      999
                    </Text>
                  </div>
                  <Button
                    className="flex h-[33px] items-center justify-center w-[33px]"
                    shape="round"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img className="h-6" src="images/img_plus.svg" alt="plus" />
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-solid border-white-A700 hover:cursor-pointer flex flex-col items-start justify-end pt-3 px-3 rounded-lg hover:shadow-bs2 shadow-bs2 hover:w-full w-full">
                <div className="h-[149px] relative w-full">
                  <Img
                    className="h-[149px] m-auto object-cover rounded-[9px] w-full"
                    src="images/img__149x175.png"
                    alt="ThirtySix"
                  />
                  <Img
                    className="absolute h-6 right-[5%] rounded top-[5%] w-6"
                    src="images/img_favorite_white_a700.svg"
                    alt="favorite"
                  />
                </div>
                <Text
                  className="mt-2 text-gray-900_01 text-sm tracking-[0.28px] w-full"
                  size="txtGilroyMedium14Gray90001"
                >
                  Держатель для лейки BOOU PG605{" "}
                </Text>
                <Text
                  className="mt-[22px] text-[19px] text-black-900"
                  size="txtGilroyBold19"
                >
                  1294 с
                </Text>
                <Text
                  className="mt-0.5 text-[12.44px] text-green-300"
                  size="txtGilroyMedium1244"
                >
                  В наличии
                </Text>
                <div className="flex flex-row gap-[4.15px] items-center justify-start mt-[5px] w-auto">
                  <div className="bg-blue-700_02 h-[5px] rounded-sm w-[5px]"></div>
                  <Text
                    className="text-[12.44px] text-blue-700_02 w-auto"
                    size="txtGilroyRegular1244"
                  >
                    Комплект
                  </Text>
                </div>
                <div className="flex flex-col mt-[7px] relative w-full">
                  <div className="flex flex-row items-center justify-between mx-auto pr-[3px] w-full">
                    <Button
                      className="flex h-[33px] items-center justify-center w-[33px]"
                      shape="round"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_minus.svg"
                        alt="minus"
                      />
                    </Button>
                    <div className="flex flex-col h-[33px] md:h-auto items-center justify-start py-[9px] w-[73px]">
                      <Text
                        className="text-[14.92px] text-black-900 text-center w-2.5"
                        size="txtGilroyMedium1492"
                      >
                        0
                      </Text>
                    </div>
                    <Button
                      className="flex h-[33px] items-center justify-center w-[33px]"
                      shape="round"
                      color="blue_700_03"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-[25px]"
                        src="images/img_plus_white_a700.svg"
                        alt="plus"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start ml-auto mr-1.5 mt-[-7px] w-[14%] z-[1]"></div>
                </div>
              </div>
              <div className="bg-white-A700 border border-solid border-white-A700 hover:cursor-pointer flex flex-col items-start justify-end p-[11px] rounded-lg hover:shadow-bs2 hover:w-full w-full">
                <div className="h-[149px] relative w-[99%]">
                  <Img
                    className="h-[149px] m-auto object-cover rounded-[9px] w-full"
                    src="images/img__149x175.png"
                    alt="ThirtyNine"
                  />
                  <Button
                    className="absolute flex h-6 items-center justify-center right-[5%] rounded top-[5%] w-6"
                    color="white_A700_7f"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_favorite.svg"
                      alt="favorite"
                    />
                  </Button>
                </div>
                <Text
                  className="mt-2 text-gray-900_01 text-sm tracking-[0.28px]"
                  size="txtGilroyMedium14Gray90001"
                >
                  Держатель для лейки{" "}
                </Text>
                <Text
                  className="mt-[39px] text-[19px] text-black-900"
                  size="txtGilroyBold19"
                >
                  1294 с
                </Text>
                <Text
                  className="mt-0.5 text-[12.44px] text-green-300"
                  size="txtGilroyMedium1244"
                >
                  В наличии
                </Text>
                <div className="flex flex-row gap-[4.15px] items-center justify-start mt-[5px] w-auto">
                  <div className="bg-blue-700_02 h-[5px] rounded-sm w-[5px]"></div>
                  <Text
                    className="text-[12.44px] text-blue-700_02 w-auto"
                    size="txtGilroyRegular1244"
                  >
                    Комплект
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[7px] pr-[3px] w-[99%] md:w-full">
                  <Button
                    className="flex h-[33px] items-center justify-center w-[33px]"
                    shape="round"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_minus.svg"
                      alt="minus"
                    />
                  </Button>
                  <div className="flex flex-col h-[33px] md:h-auto items-center justify-start py-[9px] w-[73px]">
                    <Text
                      className="text-[14.92px] text-black-900 text-center w-[5px]"
                      size="txtGilroyMedium1492"
                    >
                      1
                    </Text>
                  </div>
                  <Button
                    className="flex h-[33px] items-center justify-center w-[33px]"
                    shape="round"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-[25px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-solid border-white-A700 hover:cursor-pointer flex flex-col items-start justify-end p-[11px] rounded-lg hover:shadow-bs2 hover:w-full w-full">
                <div className="h-[149px] relative w-[99%]">
                  <Img
                    className="h-[149px] m-auto object-cover rounded-[9px] w-full"
                    src="images/img__149x175.png"
                    alt="FortyTwo"
                  />
                  <Button
                    className="absolute flex h-6 items-center justify-center right-[5%] rounded top-[5%] w-6"
                    color="white_A700_7f"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_favorite.svg"
                      alt="favorite"
                    />
                  </Button>
                </div>
                <Text
                  className="mt-2 text-gray-900_01 text-sm tracking-[0.28px] w-[99%] sm:w-full"
                  size="txtGilroyMedium14Gray90001"
                >
                  Держатель для лейки BOOU PG605{" "}
                </Text>
                <Text
                  className="mt-[22px] text-[19px] text-black-900"
                  size="txtGilroyBold19"
                >
                  1294 с
                </Text>
                <Text
                  className="mt-0.5 text-[12.44px] text-green-300"
                  size="txtGilroyMedium1244"
                >
                  В наличии
                </Text>
                <div className="flex flex-row gap-[4.15px] items-center justify-start mt-[5px] w-auto">
                  <div className="bg-blue-700_02 h-[5px] rounded-sm w-[5px]"></div>
                  <Text
                    className="text-[12.44px] text-blue-700_02 w-auto"
                    size="txtGilroyRegular1244"
                  >
                    Комплект
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[7px] pr-[3px] w-[99%] md:w-full">
                  <Button
                    className="flex h-[33px] items-center justify-center w-[33px]"
                    shape="round"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_minus.svg"
                      alt="minus"
                    />
                  </Button>
                  <div className="flex flex-col h-[33px] md:h-auto items-center justify-start py-[9px] w-[73px]">
                    <Text
                      className="text-[14.92px] text-black-900 text-center w-[5px]"
                      size="txtGilroyMedium1492"
                    >
                      1
                    </Text>
                  </div>
                  <Button
                    className="flex h-[33px] items-center justify-center w-[33px]"
                    shape="round"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-[25px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-solid border-white-A700 hover:cursor-pointer flex flex-col items-start justify-end p-[11px] rounded-lg hover:shadow-bs2 hover:w-full w-full">
                <div className="h-[149px] relative w-[99%]">
                  <Img
                    className="h-[149px] m-auto object-cover rounded-[9px] w-full"
                    src="images/img__149x175.png"
                    alt="FortyFive"
                  />
                  <Button
                    className="absolute flex h-6 items-center justify-center right-[5%] rounded top-[5%] w-6"
                    color="white_A700_7f"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_favorite.svg"
                      alt="favorite"
                    />
                  </Button>
                </div>
                <Text
                  className="mt-2 text-gray-900_01 text-sm tracking-[0.28px] w-[99%] sm:w-full"
                  size="txtGilroyMedium14Gray90001"
                >
                  Держатель для лейки BOOU PG605{" "}
                </Text>
                <Text
                  className="mt-[22px] text-[19px] text-black-900"
                  size="txtGilroyBold19"
                >
                  1294 с
                </Text>
                <Text
                  className="mt-0.5 text-[12.44px] text-green-300"
                  size="txtGilroyMedium1244"
                >
                  В наличии
                </Text>
                <div className="flex flex-row gap-[4.15px] items-center justify-start mt-[5px] w-auto">
                  <div className="bg-black-900_33 h-[5px] rounded-sm w-[5px]"></div>
                  <Text
                    className="text-[12.44px] text-black-900_33 w-auto"
                    size="txtGilroyRegular1244Black90033"
                  >
                    Комплект
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[7px] pr-[3px] w-[99%] md:w-full">
                  <Button
                    className="flex h-[33px] items-center justify-center w-[33px]"
                    shape="round"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_minus.svg"
                      alt="minus"
                    />
                  </Button>
                  <div className="flex flex-col h-[33px] md:h-auto items-center justify-start py-[9px] w-[73px]">
                    <Text
                      className="text-[14.92px] text-black-900 text-center w-[5px]"
                      size="txtGilroyMedium1492"
                    >
                      1
                    </Text>
                  </div>
                  <Button
                    className="flex h-[33px] items-center justify-center w-[33px]"
                    shape="round"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-[25px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-solid border-white-A700 hover:cursor-pointer flex flex-col items-start justify-end p-[11px] rounded-lg hover:shadow-bs2 hover:w-full w-full">
                <div className="h-[149px] relative w-[99%]">
                  <Img
                    className="h-[149px] m-auto object-cover rounded-[9px] w-full"
                    src="images/img__149x175.png"
                    alt="FortyEight"
                  />
                  <Button
                    className="absolute flex h-6 items-center justify-center right-[5%] rounded top-[5%] w-6"
                    color="white_A700_7f"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_favorite.svg"
                      alt="favorite"
                    />
                  </Button>
                </div>
                <Text
                  className="mt-2 text-gray-900_01 text-sm tracking-[0.28px] w-[99%] sm:w-full"
                  size="txtGilroyMedium14Gray90001"
                >
                  Держатель для лейки BOOU PG605{" "}
                </Text>
                <Text
                  className="mt-[22px] text-[19px] text-black-900"
                  size="txtGilroyBold19"
                >
                  1294 с
                </Text>
                <Text
                  className="mt-0.5 text-[12.44px] text-green-300"
                  size="txtGilroyMedium1244"
                >
                  В наличии
                </Text>
                <div className="flex flex-row gap-[4.15px] items-center justify-start mt-[5px] w-auto">
                  <div className="bg-blue-700_02 h-[5px] rounded-sm w-[5px]"></div>
                  <Text
                    className="text-[12.44px] text-blue-700_02 w-auto"
                    size="txtGilroyRegular1244"
                  >
                    Комплект
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[7px] pr-[3px] w-[99%] md:w-full">
                  <Button
                    className="flex h-[33px] items-center justify-center w-[33px]"
                    shape="round"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_minus.svg"
                      alt="minus"
                    />
                  </Button>
                  <div className="flex flex-col h-[33px] md:h-auto items-center justify-start py-[9px] w-[73px]">
                    <Text
                      className="text-[14.92px] text-black-900 text-center w-[5px]"
                      size="txtGilroyMedium1492"
                    >
                      1
                    </Text>
                  </div>
                  <Button
                    className="flex h-[33px] items-center justify-center w-[33px]"
                    shape="round"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-[25px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </Button>
                </div>
              </div>
            </List>
          </div>
          <PagerIndicator
            className="flex gap-[5px] h-[3px] items-start justify-start mt-[26px] w-[49px]"
            count={3}
            activeCss="inline-block cursor-pointer h-[3px] bg-light_blue-900 w-[33px] rounded-[1px]"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[1px] h-[3px] bg-light_blue-900 w-[3px]"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
          <div className="flex flex-row md:gap-10 items-end justify-between max-w-[1240px] mt-[18px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtGilroySemibold25"
            >
              Новости
            </Text>
            <Text
              className="mb-[3px] mt-[7px] text-base text-blue-700_01"
              size="txtGilroySemibold16"
            >
              все
            </Text>
          </div>
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 2 },
              1050: { items: 3 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            activeSlideCSS="scale-[1.00]"
            ref={sliderRef}
            className="max-w-[1370px] mt-5 mx-auto md:px-5 w-full"
            items={[...Array(9)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex flex-col h-[180px] md:h-auto items-center justify-start max-w-[1240px] mx-2.5">
                  <div className="flex md:flex-col flex-row gap-[17px] items-center justify-between w-full">
                    <List
                      className="sm:flex-col flex-row gap-[17px] grid md:grid-cols-1 grid-cols-2"
                      orientation="horizontal"
                    >
                      <div className="bg-gray-50_01 flex flex-row items-start justify-between sm:ml-[0] rounded-[11px] w-full">
                        <div className="md:h-[140px] h-[143px] mt-9 relative w-[41%]">
                          <div className="absolute bg-light_blue-50 bottom-[0] h-[82px] left-[0] rounded-[47px] w-[59%]"></div>
                          <div className="absolute flex flex-col gap-[22.13px] items-start justify-start right-[0] top-[0] w-auto">
                            <div className="flex flex-col gap-[5.53px] items-start justify-start w-auto">
                              {/* <Text
                                className="sm:text-[20.1px] md:text-[22.1px] text-[24.1px] text-black-900 w-auto"
                                size="txtGilroyBold241"
                              >
                                -50%
                              </Text>
                              <Text
                                className="text-[14.46px] text-black-900 w-auto"
                                size="txtGilroyRegular1446"
                              >
                                На кухонную мебель{" "}
                              </Text> */}
                            </div>
                            {/* <Button
                              className="cursor-pointer leading-[normal] min-w-[109px] rounded-[11px] text-[11.25px] text-center"
                              color="light_blue_900"
                              size="sm"
                              variant="fill"
                            >
                              Подробнее
                            </Button> */}
                          </div>
                        </div>
                        <div className="h-36 mb-[35px] relative w-[47%]">
                          <Img
                            className="absolute bottom-[0] h-[109px] left-[0]"
                            src="/public/images/illustration@2x.png"
                            alt="illustration"
                          />
                          <div className="absolute bg-light_blue-50 h-[46px] right-[0] rounded-[49px] top-[0] w-[53%]"></div>
                        </div>
                      </div>
                      <div className="bg-gray-50_01 flex flex-row items-start justify-between sm:ml-[0] rounded-[11px] w-full">
                        <div className="md:h-[140px] h-[143px] mt-9 relative w-[41%]">
                          <div className="absolute bg-light_blue-50 bottom-[0] h-[82px] left-[0] rounded-[47px] w-[59%]"></div>
                          <div className="absolute flex flex-col gap-[22.13px] items-start justify-start right-[0] top-[0] w-auto">
                            <div className="flex flex-col gap-[5.53px] items-start justify-start w-auto">
                              <Text
                                className="sm:text-[20.1px] md:text-[22.1px] text-[24.1px] text-black-900 w-auto"
                                size="txtGilroyBold241"
                              >
                                -50%
                              </Text>
                              <Text
                                className="text-[14.46px] text-black-900 w-auto"
                                size="txtGilroyRegular1446"
                              >
                                На кухонную мебель{" "}
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[109px] rounded-[11px] text-[11.25px] text-center"
                              color="light_blue_900"
                              size="sm"
                              variant="fill"
                            >
                              Подробнее
                            </Button>
                          </div>
                        </div>
                        <div className="h-36 mb-[35px] relative w-[47%]">
                          <Img
                            className="absolute bottom-[0] h-[109px] left-[0]"
                            src="images/img_illustration.svg"
                            alt="illustration"
                          />
                          <div className="absolute bg-light_blue-50 h-[46px] right-[0] rounded-[49px] top-[0] w-[53%]"></div>
                        </div>
                      </div>
                    </List>
                    <div className="bg-gray-50_01 h-[180px] rounded-[11px] w-[33%]"></div>
                  </div>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer h-[3px] bg-light_blue-900 w-[33px] rounded-[1px]" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-[1px] h-[3px] bg-light_blue-900 w-[3px]"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <PagerIndicator
            className="flex gap-[5px] h-[3px] items-start justify-start mt-[26px] w-[49px]"
            count={3}
            activeCss="inline-block cursor-pointer h-[3px] bg-light_blue-900 w-[33px] rounded-[1px]"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[1px] h-[3px] bg-light_blue-900 w-[3px]"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1240px] mt-[21px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-center"
              size="txtGilroySemibold25"
            >
              Аукционные товары
            </Text>
            <Text
              className="text-base text-blue-700_01"
              size="txtGilroySemibold16"
            >
              перейти в каталог
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1370px] mt-[17px] mx-auto md:px-5 w-full">
            <div className="md:h-[341px] h-[350px] md:ml-[0] ml-[25px] relative w-[91%] md:w-full">
              <Text
                className="absolute bottom-[0] right-[0] text-base text-blue-700_01"
                size="txtGilroySemibold16"
              >
                все
              </Text>
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState1}
                responsive={{
                  0: { items: 1 },
                  550: { items: 3 },
                  1050: { items: 6 },
                }}
                onSlideChanged={(e) => {
                  setsliderState1(e?.item);
                }}
                ref={sliderRef1}
                className="absolute flex gap-2.5 inset-[0] m-auto w-auto"
                items={[...Array(18)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col items-center justify-start mx-2.5 p-3 rounded-lg">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="h-[149px] relative w-full">
                          <Img
                            className="h-[149px] m-auto object-cover rounded-[9px] w-full"
                            src="images/img__149x175.png"
                            alt="FiftyEight"
                          />
                          <Button
                            className="absolute flex h-6 items-center justify-center right-[6%] rounded top-[7%] w-6"
                            color="white_A700_7f"
                            size="xs"
                            variant="fill"
                          >
                            <Img src="images/img_favorite.svg" alt="favorite" />
                          </Button>
                        </div>
                        {/* <Text
                          className="mt-3 text-gray-900_01 text-sm tracking-[0.28px] w-full"
                          size="txtGilroyMedium14Gray90001"
                        >
                          Держатель для лейки BOOU PG605
                        </Text> */}
                        <div className="flex flex-row gap-2.5 items-center justify-start mt-0.5 w-3/5 md:w-full">
                          <Text
                            className="text-[19px]"
                            size="txtGilroyBold19RedA70001"
                          >
                            1294 с
                          </Text>
                          <Text
                            className="line-through text-gray-600_01 text-sm"
                            size="txtGilroyBold14"
                          >
                            1294 с
                          </Text>
                        </div>
                        <Text
                          className="mt-[3px] text-green-300 text-xs"
                          size="txtGilroyMedium12Green300"
                        >
                          В наличии
                        </Text>
                        <div className="flex flex-row gap-[4.13px] items-center justify-start mt-1 w-auto">
                          <div className="bg-blue-700_02 h-[5px] rounded-sm w-[5px]"></div>
                          <Text
                            className="text-blue-700_02 text-xs w-auto"
                            size="txtGilroyRegular12Blue70002"
                          >
                            Комплект
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[42px] items-center justify-start mt-[7px] w-auto">
                          <Button
                            className="flex h-[33px] items-center justify-center w-[33px]"
                            shape="round"
                            color="gray_100_01"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_plus.svg"
                              alt="plus"
                            />
                          </Button>
                          <Text
                            className="text-[15px] text-black-900 text-center w-auto"
                            size="txtGilroyMedium15"
                          >
                            999
                          </Text>
                          <Button
                            className="flex h-[33px] items-center justify-center w-[33px]"
                            shape="round"
                            color="gray_100_01"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_minus.svg"
                              alt="minus"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer h-[3px] bg-light_blue-900 w-[33px] rounded-[1px]" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-[1px] h-[3px] bg-light_blue-900 w-[3px]"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
            </div>
          </div>
          <PagerIndicator
            className="flex gap-[5px] h-[3px] items-start justify-start mt-4 w-[49px]"
            count={3}
            activeCss="inline-block cursor-pointer h-[3px] bg-light_blue-900 w-[33px] rounded-[1px]"
            activeIndex={sliderState1}
            inactiveCss="inline-block cursor-pointer rounded-[1px] h-[3px] bg-light_blue-900 w-[3px]"
            sliderRef={sliderRef1}
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
          <div className="h-[31px] md:h-[52px] mt-[21px] md:px-5 relative w-[16%]">
            <Text
              className="m-auto sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtGilroySemibold25"
            ></Text>
            <Text
              className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-max"
              size="txtGilroySemibold25"
            >
              Адреса магазинов
            </Text>
          </div>
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState2}
            responsive={{
              0: { items: 1 },
              550: { items: 2 },
              1050: { items: 3 },
            }}
            onSlideChanged={(e) => {
              setsliderState2(e?.item);
            }}
            ref={sliderRef2}
            className="flex gap-2.5 max-w-[1244px] mt-[17px] mx-auto md:px-5 w-full"
            items={[...Array(9)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="bg-white-A700 flex flex-col items-center justify-start mx-2.5 p-[13px] rounded-[10px]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row items-end justify-between ml-0.5 md:ml-[0] w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Button
                          className="flex h-[42px] items-center justify-center w-[42px]"
                          shape="circle"
                          color="gray_50_02"
                          size="md"
                          variant="fill"
                        >
                          <Img src="images/img_thumbsup.svg" alt="thumbsup" />
                        </Button>
                        <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                          <Text
                            className="text-black-900 text-lg w-auto"
                            size="txtGilroyMedium18"
                          >
                            Iskender home
                          </Text>
                          <Text
                            className="text-blue-800 text-xs underline w-auto"
                            size="txtGilroyRegular12Blue800"
                          >
                            открыть в карте
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-gray-300_01 h-px ml-0.5 md:ml-[0] mt-[11px] w-full" />
                    <div className="flex flex-row items-start justify-start mt-[19px] w-[87%] md:w-full">
                      <Img
                        className="h-[17px] w-[17px]"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <Text
                        className="ml-[5px] text-black-900 text-sm"
                        size="txtGilroyRegular14"
                      >
                        <>
                          Кыргызстан, г. Бишкек
                          <br />
                          ул. Турусбекова A167
                        </>
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-5 w-full">
                      <Img
                        className="h-[17px] w-[17px]"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                      <Text
                        className="sm:ml-[0] ml-[5px] text-black-900 text-sm"
                        size="txtGilroyRegular14"
                      >
                        08:00 - 22:00
                      </Text>
                      <Img
                        className="h-[18px] sm:ml-[0] ml-[133px] w-[17px]"
                        src="images/img_call.svg"
                        alt="call"
                      />
                      <Text
                        className="sm:ml-[0] ml-[5px] text-black-900 text-sm"
                        size="txtGilroyRegular14"
                      >
                        +996 500 345 345
                      </Text>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer h-[3px] bg-light_blue-900 w-[33px] rounded-[1px]" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-[1px] h-[3px] bg-light_blue-900 w-[3px]"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <PagerIndicator
            className="flex gap-[5px] h-[3px] items-start justify-start mt-7 w-[49px]"
            count={3}
            activeCss="inline-block cursor-pointer h-[3px] bg-light_blue-900 w-[33px] rounded-[1px]"
            activeIndex={sliderState2}
            inactiveCss="inline-block cursor-pointer rounded-[1px] h-[3px] bg-light_blue-900 w-[3px]"
            sliderRef={sliderRef2}
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
          <footer className="bg-gradient  flex font-poppins items-center justify-center mt-[35px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mb-[30px] mt-[72px] mx-auto w-[87%]">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-1/4 md:w-full">
                    <Img
                      className="h-[51px]"
                      src="images/img_group.svg"
                      alt="logo"
                    />
                    <Text
                      className="leading-[150.00%] mt-[42px] text-sm text-white-A700 w-[76%] sm:w-full"
                      size="txtPoppinsRegular14"
                    >
                      Первый отечественный бренд Iskender на рынке сантехники от
                      компании ОсОО «Стройдом.кг»
                    </Text>
                    <div className="flex flex-row gap-[19px] items-center justify-between mt-[72px] w-full">
                      <Img
                        className="h-[46px]"
                        src="images/img_group480964072.svg"
                        alt="group480964072"
                      />
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[46px] items-center justify-end p-[9px]"
                        style={{
                          backgroundImage: "url('images/img_group7071.svg')",
                        }}
                      >
                        <Img
                          className="h-[26px]"
                          src="images/img_logosgoogleplay.svg"
                          alt="logosgoogleplay"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-gilroy gap-10 items-start justify-start md:ml-[0] ml-[184px] md:mt-0 mt-[7px] w-auto">
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtGilroyBold20"
                    >
                      Адреса
                    </Text>
                    <div className="flex flex-col gap-5 items-start justify-start w-auto">
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <Text
                          className="text-[15px] text-gray-300_02 w-auto"
                          size="txtGilroyRegular15"
                        >
                          ЭлитСтрой
                        </Text>
                        <Text
                          className="text-[15px] text-white-A700 w-auto"
                          size="txtGilroyMedium15WhiteA700"
                        >
                          ул. Ден-Сяопина 18/1
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <Text
                          className="text-[15px] text-gray-300_02 w-auto"
                          size="txtGilroyRegular15"
                        >
                          Баткен
                        </Text>
                        <Text
                          className="text-[15px] text-white-A700 w-auto"
                          size="txtGilroyMedium15WhiteA700"
                        >
                          ул. Льва-Толстого 19
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <Text
                          className="text-[15px] text-gray-300_02 w-auto"
                          size="txtGilroyRegular15"
                        >
                          ТааТан
                        </Text>
                        <Text
                          className="text-[15px] text-white-A700 w-auto"
                          size="txtGilroyMedium15WhiteA700"
                        >
                          ул. Лермонтова 6
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-gilroy gap-10 items-start justify-start md:ml-[0] ml-[155px] md:mt-0 mt-2.5 w-auto">
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtGilroyBold20"
                    >
                      Компания
                    </Text>
                    <ul className="flex flex-col gap-[15px] items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-sm text-white-A700_cc"
                        >
                          <Text size="txtGilroyMedium14WhiteA700cc">
                            Каталог
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-sm text-white-A700_cc"
                        >
                          <Text size="txtGilroyMedium14WhiteA700cc">
                            Избранное
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-sm text-white-A700_cc"
                        >
                          <Text size="txtGilroyMedium14WhiteA700cc">
                            Личный кабинет
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col font-gilroy gap-10 items-start justify-start md:ml-[0] ml-[167px] md:mt-0 mt-2.5 w-auto">
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtGilroyBold20"
                    >
                      Контакты
                    </Text>
                    <div className="flex flex-col gap-5 items-start justify-start w-auto">
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <Text
                          className="text-[15px] text-gray-300_02 w-auto"
                          size="txtGilroyRegular15"
                        >
                          Email:
                        </Text>
                        <Text
                          className="text-[15px] text-white-A700 w-auto"
                          size="txtGilroyMedium15WhiteA700"
                        >
                          iskender.kg@gmail.com
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                        <Text
                          className="text-[15px] text-gray-300_02 w-auto"
                          size="txtGilroyRegular15"
                        >
                          Телефон:
                        </Text>
                        <Text
                          className="leading-[160.00%] text-[15px] text-white-A700"
                          size="txtGilroyMedium15WhiteA700"
                        >
                          <>
                            +996 (500) 000-104
                            <br />
                            +996 (997) 000-104
                            <br />
                            +996 (222) 000-104
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[125px] rounded-[14px]"
                        leftIcon={
                          <Img
                            className="h-[17px] mb-px mr-[13px]"
                            src="images/img_volume.svg"
                            alt="volume"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-semibold leading-[normal] text-left text-sm">
                          WhatsApp
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <Line className="bg-white-A700_1e h-px mt-[105px] w-full" />
                <div className="flex sm:flex-col flex-row font-gilroy md:gap-10 items-start justify-between mt-[30px] w-full">
                  <Text
                    className="sm:mt-0 mt-1 text-sm text-white-A700_7f"
                    size="txtGilroyMedium14WhiteA7007f"
                  >
                    <span className="text-white-A700_7f font-gilroy text-left font-medium">
                      © 2023 Iskender.kg - О
                    </span>
                    <span className="text-white-A700_7f font-gilroy text-left font-normal">
                      течественный бренд сантехники
                    </span>
                  </Text>
                  <div className="flex flex-row gap-[15px] items-start justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_socialiconslogoinstagram.svg"
                      alt="socialiconslogo"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_socialiconslogofacebook.svg"
                      alt="socialiconslogo_One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Page;
