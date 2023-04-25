import React from "react";

import { Img, Input, Text, List } from "components";
import { CloseSVG } from "../../assets/images";

const LiveFeedSchedulingPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy gap-[50px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                src="images/img_group10392_32.svg"
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
        <List
          className="flex-col gap-4 grid items-center md:px-5 w-[42%]"
          orientation="vertical"
        >
          <div className="bg-white_A700 flex flex-col items-start justify-start p-[30px] sm:px-5 shadow-bs1 w-full">
            <div className="flex flex-row gap-6 items-center justify-start md:pr-10 sm:pr-5 pr-[137px] w-[67%] md:w-full">
              <Img
                src="images/img_profileimglarg.png"
                className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                alt="ProfileImgLarg One"
              />
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="font-semibold text-bluegray_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Rose J. Henry
                </Text>
                <Text
                  className="font-normal mt-0.5 not-italic text-bluegray_400 text-left w-auto"
                  variant="body2"
                >
                  7 May at 19:18
                </Text>
              </div>
            </div>
            <Text
              className="font-semibold mt-[33px] text-blue_A700 text-left w-auto"
              as="h5"
              variant="h5"
            >
              Lorem ipsum
            </Text>
            <Text
              className="font-medium leading-[32.00px] mt-2 text-bluegray_900 text-left w-full"
              as="h6"
              variant="h6"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
              ultrices nam vel congue non morbi enim gravida. Ut tempor accumsan
              elit neque, est neque non quam. Pellentesque at semper diam sit.
              Arcu, senectus dolor ac e
            </Text>
          </div>
          <div className="bg-white_A700 flex flex-col items-start justify-start p-[30px] sm:px-5 shadow-bs1 w-full">
            <div className="flex flex-row gap-6 items-center justify-start md:pr-10 sm:pr-5 pr-[137px] w-[67%] md:w-full">
              <Img
                src="images/img_profileimglarg.png"
                className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                alt="ProfileImgLarg Two"
              />
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="font-semibold text-bluegray_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Rose J. Henry
                </Text>
                <Text
                  className="font-normal mt-0.5 not-italic text-bluegray_400 text-left w-auto"
                  variant="body2"
                >
                  7 May at 19:18
                </Text>
              </div>
            </div>
            <Text
              className="font-semibold mt-[33px] text-blue_A700 text-left w-auto"
              as="h5"
              variant="h5"
            >
              Lorem ipsum
            </Text>
            <Text
              className="font-medium leading-[32.00px] mt-2 text-bluegray_900 text-left w-full"
              as="h6"
              variant="h6"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
              ultrices nam vel congue non morbi enim gravida. Ut tempor accumsan
              elit neque, est neque non quam. Pellentesque at semper diam sit.
              Arcu, senectus dolor ac e
            </Text>
          </div>
          <div className="bg-white_A700 flex flex-col items-start justify-start p-[30px] sm:px-5 shadow-bs1 w-full">
            <div className="flex flex-row gap-6 items-center justify-start md:pr-10 sm:pr-5 pr-[137px] w-[67%] md:w-full">
              <Img
                src="images/img_profileimglarg.png"
                className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                alt="ProfileImgLarg Three"
              />
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="font-semibold text-bluegray_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Rose J. Henry
                </Text>
                <Text
                  className="font-normal mt-0.5 not-italic text-bluegray_400 text-left w-auto"
                  variant="body2"
                >
                  7 May at 19:18
                </Text>
              </div>
            </div>
            <Text
              className="font-semibold mt-[33px] text-blue_A700 text-left w-auto"
              as="h5"
              variant="h5"
            >
              Lorem ipsum
            </Text>
            <Text
              className="font-medium leading-[32.00px] mt-2 text-bluegray_900 text-left w-full"
              as="h6"
              variant="h6"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
              ultrices nam vel congue non morbi enim gravida. Ut tempor accumsan
              elit neque, est neque non quam. Pellentesque at semper diam sit.
              Arcu, senectus dolor ac e
            </Text>
          </div>
        </List>
      </div>
    </>
  );
};

export default LiveFeedSchedulingPage;
