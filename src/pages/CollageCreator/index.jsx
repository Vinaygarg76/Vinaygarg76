import React from "react";

import { Img, Text, Button } from "components";

const CollageCreatorPage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy items-center justify-end mx-auto p-[25px] sm:px-5 w-full">
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-7xl mt-2.5 mx-auto md:px-5 w-full">
          <header className="flex items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
              <div className="header-row my-[7px]">
                <Img
                  src="images/img_group10392_11.svg"
                  className="h-[35px]"
                  alt="Group10392"
                />
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-col flex-row gap-6 sm:hidden items-start justify-center md:ml-[0] ml-[285px] w-[30%] md:w-full">
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
              <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[225px] rounded-md w-[18%] md:w-full">
                <Text
                  className="font-medium text-gray_903 text-left w-auto"
                  variant="body2"
                >
                  Sign in
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[148px] text-base text-center text-white_A700 w-auto"
                  shape="RoundedBorder6"
                  size="3xl"
                  variant="FillBlueA700"
                >
                  Sign up for free
                </Button>
              </div>
            </div>
          </header>
          <div className="flex md:flex-col flex-row gap-5 items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[76%] md:w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-[99%] md:w-full">
                <div className="flex flex-row sm:gap-10 items-end justify-between rounded-md w-full">
                  <Text
                    className="font-semibold mt-[11px] text-bluegray_900 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Collage
                  </Text>
                  <Button
                    className="cursor-pointer font-medium min-w-[73px] text-base text-center text-white_A700 w-auto"
                    shape="RoundedBorder6"
                    size="5xl"
                    variant="FillBlueA700"
                  >
                    Save
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-4 rounded-md shadow-bs4 w-full">
                  <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                    <Img
                      src="images/img_rectangle12.png"
                      className="md:flex-1 h-[557px] sm:h-auto object-cover rounded-[5px] w-auto md:w-full"
                      alt="Rectangle1302"
                    />
                    <div className="flex md:flex-1 flex-col gap-4 items-center justify-start w-auto md:w-full">
                      <Img
                        src="images/img_rectangle14.png"
                        className="h-[175px] md:h-auto object-cover rounded-[5px] w-full"
                        alt="Rectangle1303"
                      />
                      <Img
                        src="images/img_rectangle13.png"
                        className="h-[175px] md:h-auto object-cover rounded-[5px] w-full"
                        alt="Rectangle1344"
                      />
                      <Img
                        src="images/img_rectangle1345.png"
                        className="h-[175px] md:h-auto object-cover rounded-[5px] w-full"
                        alt="Rectangle1345"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-[7px] w-full">
                <div className="flex flex-col items-center justify-start self-stretch w-auto">
                  <Text
                    className="font-medium text-black_900 text-left w-auto"
                    variant="body1"
                  >
                    Choose Collage Frame
                  </Text>
                </div>
                <Img
                  src="images/img_group10199.svg"
                  className="h-[200px] mt-1 rounded-md w-full"
                  alt="Group10199"
                />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-4 items-start justify-start md:mt-0 mt-[7px] w-[23%] md:w-full">
              <Text
                className="font-medium text-black_900 text-left w-auto"
                variant="body1"
              >
                Images
              </Text>
              <div className="bg-white_A700 flex flex-col items-center justify-start p-4 rounded-md shadow-bs4 w-full">
                <Img
                  src="images/img_rectangle12.png"
                  className="h-40 md:h-auto object-cover rounded-[5px] w-full"
                  alt="Rectangle1353"
                />
                <Img
                  src="images/img_rectangle14.png"
                  className="h-40 md:h-auto mt-6 object-cover rounded-[5px] w-full"
                  alt="Rectangle1354"
                />
                <Img
                  src="images/img_rectangle13.png"
                  className="h-40 md:h-auto mt-6 object-cover rounded-[5px] w-full"
                  alt="Rectangle1355"
                />
                <Img
                  src="images/img_rectangle1345.png"
                  className="h-40 md:h-auto mt-6 object-cover rounded-[5px] w-full"
                  alt="Rectangle1356"
                />
                <Button
                  className="cursor-pointer font-medium mt-4 text-base text-blue_A700 text-center w-[260px]"
                  shape="RoundedBorder6"
                  size="5xl"
                  variant="OutlineBlueA700_1"
                >
                  Add Image
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollageCreatorPage;
