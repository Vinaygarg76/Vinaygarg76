import React from "react";

import { Img, Input, Text, Button, Line, List } from "components";
import { CloseSVG } from "../../assets/images";

const HashtagsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                src="images/img_group10392_26.svg"
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
        <div className="flex flex-col items-start justify-end max-w-[944px] mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-7 items-start justify-start mr-auto w-[35%] md:w-full">
            <Img
              src="images/img_ellipse46.png"
              className="h-[188px] md:h-auto rounded-[50%] w-[188px]"
              alt="EllipseFortySix"
            />
            <div className="flex flex-col items-start justify-start mt-7 rounded-md w-[34%]">
              <Text
                className="font-semibold text-bluegray_900 text-left w-auto"
                as="h4"
                variant="h4"
              >
                #nature
              </Text>
              <Text
                className="font-semibold mt-8 text-bluegray_900 text-left w-auto"
                variant="body1"
              ></Text>
              <Button
                className="cursor-pointer font-medium min-w-[108px] mt-6 text-center text-sm text-white_A700 w-auto"
                shape="RoundedBorder6"
                size="xl"
                variant="FillBlueA700"
              >
                Follow
              </Button>
            </div>
          </div>
          <div className="flex mt-[61px] pt-1 relative w-full">
            <div className="flex flex-col gap-[18px] items-center justify-start mt-auto w-[5%]">
              <Text
                className="font-medium text-blue_A700 text-left w-auto"
                variant="body2"
              >
                Top
              </Text>
              <Line className="bg-blue_A700 h-0.5 w-full" />
            </div>
            <Text
              className="font-medium ml-[undefinedpx] text-bluegray_400 text-left w-auto z-[1]"
              variant="body2"
            >
              Recent
            </Text>
            <Line className="bg-bluegray_100 h-px ml-[-47px] mr-auto mt-auto w-full z-[1]" />
          </div>
          <List
            className="flex-col gap-6 grid items-center mt-[23px] w-full"
            orientation="vertical"
          >
            <div className="flex-1 gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
              <Img
                src="images/img_rectangle10_296X296.png"
                className="h-[296px] md:h-auto object-cover w-[296px]"
                alt="RectangleTen"
              />
              <Img
                src="images/img_rectangle11_296X296.png"
                className="h-[296px] md:h-auto object-cover w-[296px]"
                alt="RectangleEleven"
              />
              <Img
                src="images/img_rectangle13_296X296.png"
                className="h-[296px] md:h-auto object-cover w-[296px]"
                alt="RectangleThirteen"
              />
            </div>
            <div className="flex-1 gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
              <Img
                src="images/img_rectangle14_296X296.png"
                className="h-[296px] md:h-auto object-cover w-[296px]"
                alt="RectangleFourteen"
              />
              <Img
                src="images/img_rectangle15.png"
                className="h-[296px] md:h-auto object-cover w-[296px]"
                alt="RectangleFifteen"
              />
              <Img
                src="images/img_rectangle16.png"
                className="h-[296px] md:h-auto object-cover w-[296px]"
                alt="RectangleSixteen"
              />
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default HashtagsPage;
