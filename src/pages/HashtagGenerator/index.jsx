import React from "react";

import { Img, Input, Text, Button, List } from "components";
import { CloseSVG } from "../../assets/images";

const HashtagGeneratorPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                src="images/img_group10392_25.svg"
                className="h-[35px] w-[13%]"
                alt="Group10392"
              />
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e)}
                wrapClassName="flex md:ml-[0] ml-[60px] md:mt-0 my-0.5 w-2/5 md:w-full"
                className="font-medium p-0 placeholder:text-bluegray_200 text-base text-bluegray_200 text-left w-full"
                name="Group10270"
                placeholder="Search"
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      className="mt-4 mb-[15px] cursor-pointer ml-[35px] mr-4"
                      onClick={() => setInputvalue("")}
                      fillColor="#bac1ce"
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  ) : (
                    <Img
                      src="images/img_search.svg"
                      className="mt-4 mb-[15px] cursor-pointer ml-[35px] mr-4"
                      alt="search"
                    />
                  )
                }
                shape="srcRoundedBorder8"
                size="mdSrc"
                variant="srcOutlineBluegray300"
              ></Input>
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-center md:ml-[0] ml-[61px] w-[30%] md:w-full">
                <div className="flex flex-row gap-[11px] items-start justify-between w-[27%] sm:w-full">
                  <Text
                    className="font-medium mt-[3px] text-gray_903 text-left w-auto"
                    variant="body2"
                  >
                    Products
                  </Text>
                  <Img
                    src="images/img_arrowdown_gray_902.svg"
                    className="h-6 w-6"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
                  <Text
                    className="font-medium mt-[3px] text-gray_903 text-left w-auto"
                    variant="body2"
                  >
                    Resouces
                  </Text>
                  <Img
                    src="images/img_arrowdown_gray_902.svg"
                    className="h-6 w-6"
                    alt="arrowdown One"
                  />
                </div>
                <Text
                  className="font-medium sm:mt-0 mt-[5px] text-gray_903 text-left w-auto"
                  variant="body2"
                >
                  Request a demo
                </Text>
              </div>
              <Img
                src="images/img_profileimglarg.png"
                className="h-14 md:h-auto md:ml-[0] ml-[61px] rounded-[50%] w-14"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div className="bg-white_A700 flex flex-col gap-4 items-end justify-end p-[30px] md:px-5 shadow-bs1 w-[42%] md:w-full">
          <div className="flex flex-row items-end justify-between mt-1 w-[65%] md:w-full">
            <Text
              className="font-semibold mt-[5px] text-bluegray_900 text-left w-auto"
              as="h5"
              variant="h5"
            >
              Description
            </Text>
            <Img
              src="images/img_checkmark_32X32.svg"
              className="h-8 mb-[3px] w-8"
              alt="checkmark"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <Img
              src="images/img_group106521.png"
              className="h-[410px] md:h-auto object-cover w-full"
              alt="Group106521"
            />
            <Text
              className="font-normal leading-[29.00px] mt-6 not-italic text-bluegray_900 text-left w-full"
              variant="body1"
            ></Text>
            <div className="flex flex-col items-center justify-start mt-6 rounded-[24px] w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
                  <Button
                    className="cursor-pointer font-normal min-w-[97px] not-italic text-blue_A700 text-center text-lg w-auto"
                    shape="CircleBorder23"
                    size="2xl"
                    variant="OutlineBlueA700_2"
                  >
                    #nature
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[134px] not-italic text-bluegray_402 text-center text-lg w-auto"
                    shape="CircleBorder23"
                    size="2xl"
                    variant="OutlineBluegray402"
                  >
                    #naturewalk
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[164px] not-italic text-bluegray_400 text-center text-lg w-auto"
                    shape="CircleBorder23"
                    size="2xl"
                    variant="OutlineBluegray402"
                  >
                    #naturesbeauty
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[121px] not-italic text-bluegray_400 text-center text-lg w-auto"
                    shape="CircleBorder23"
                    size="2xl"
                    variant="OutlineBluegray402"
                  >
                    #loveearth
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Button
                    className="cursor-pointer font-normal min-w-[205px] not-italic text-blue_A700 text-center text-lg w-auto"
                    shape="CircleBorder23"
                    size="2xl"
                    variant="OutlineBlueA700_2"
                  >
                    #naturephotography{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[168px] not-italic text-bluegray_400 text-center text-lg w-auto"
                    shape="CircleBorder23"
                    size="2xl"
                    variant="OutlineBluegray402"
                  >
                    #Photooftheday
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[139px] not-italic text-bluegray_400 text-center text-lg w-auto"
                    shape="CircleBorder23"
                    size="2xl"
                    variant="OutlineBluegray402"
                  >
                    #naturerocks
                  </Button>
                </div>
                <List
                  className="flex-col gap-4 grid w-[83%]"
                  orientation="vertical"
                >
                  <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-[94%] md:w-full">
                    <Button
                      className="cursor-pointer font-normal min-w-[116px] not-italic text-blue_A700 text-center text-lg w-auto"
                      shape="CircleBorder23"
                      size="2xl"
                      variant="OutlineBlueA700_2"
                    >
                      #natureza
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[144px] not-italic text-blue_A700 text-center text-lg w-auto"
                      shape="CircleBorder23"
                      size="2xl"
                      variant="OutlineBlueA700_2"
                    >
                      #naturelovers
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[139px] not-italic text-bluegray_400 text-center text-lg w-auto"
                      shape="CircleBorder23"
                      size="2xl"
                      variant="OutlineBluegray402"
                    >
                      #naturevibes
                    </Button>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
                    <Button
                      className="cursor-pointer font-normal min-w-[147px] not-italic text-blue_A700 text-center text-lg w-auto"
                      shape="CircleBorder23"
                      size="2xl"
                      variant="OutlineBlueA700_2"
                    >
                      #naturephoto
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[141px] not-italic text-bluegray_400 text-center text-lg w-auto"
                      shape="CircleBorder23"
                      size="2xl"
                      variant="OutlineBluegray402"
                    >
                      #natureheals
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[140px] not-italic text-blue_A700 text-center text-lg w-auto"
                      shape="CircleBorder23"
                      size="2xl"
                      variant="OutlineBlueA700_2"
                    >
                      #naturegram{" "}
                    </Button>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly mt-11 w-full">
              <div className="bg-white_A700 border border-bluegray_100 border-solid flex sm:flex-1 flex-row items-center justify-between p-3 rounded-md w-[91%] sm:w-full">
                <Text
                  className="font-normal not-italic text-bluegray_400 text-left w-auto"
                  variant="body2"
                >
                  #
                </Text>
                <Img
                  src="images/img_user_24X24.svg"
                  className="h-5 mr-0.5 my-0.5 w-5"
                  alt="user"
                />
              </div>
              <Button
                className="flex h-12 items-center justify-center w-12"
                shape="icbRoundedBorder6"
                size="lgIcn"
                variant="icbOutlineBluegray100"
              >
                <Img src="images/img_send.svg" className="h-5" alt="send" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HashtagGeneratorPage;
