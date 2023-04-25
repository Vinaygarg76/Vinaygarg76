import React from "react";

import { Img, Input, Text, Button } from "components";
import { CloseSVG } from "../../assets/images";

const RepostPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                src="images/img_group10392_37.svg"
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
                  className="font-medium sm:mt-0 mt-1 text-gray_903 text-left w-auto"
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
        <div className="flex flex-col items-center justify-end md:px-5 w-[42%] md:w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <div className="bg-white_A700 flex flex-col items-center justify-end p-6 sm:px-5 shadow-bs1 w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-1.5 w-[98%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-6 items-end justify-between w-[84%] sm:w-full">
                  <Img
                    src="images/img_profileimglarg_48X48.png"
                    className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                    alt="ProfileImgLarg One"
                  />
                  <div className="h-16 md:h-[72px] sm:mt-0 mt-2 relative w-[79%] sm:w-full">
                    <Text
                      className="font-semibold leading-[32.00px] m-auto text-bluegray_900 text-left w-full"
                      as="h6"
                      variant="h6"
                    ></Text>
                    <Text
                      className="absolute bottom-[0] font-normal left-1/4 not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      7 May at 19:18
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_user.svg"
                  className="h-6 sm:mt-0 mt-3 w-6"
                  alt="user"
                />
              </div>
              <Img
                src="images/img_group106521.png"
                className="h-[410px] sm:h-auto mt-6 object-cover w-[98%] md:w-full"
                alt="Group106521"
              />
              <div className="bg-gray_50 border border-bluegray_100 border-solid flex flex-col items-center justify-start mt-3 p-[5px] w-[98%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[97%] md:w-full">
                  <Img
                    src="images/img_thumbsup.svg"
                    className="h-6 sm:mt-0 mt-1 w-6"
                    alt="thumbsup"
                  />
                  <Img
                    src="images/img_volume.svg"
                    className="h-6 ml-6 sm:ml-[0] sm:mt-0 mt-1 w-6"
                    alt="volume"
                  />
                  <Img
                    src="images/img_reply.svg"
                    className="h-6 ml-6 sm:ml-[0] sm:mt-0 mt-1 w-6"
                    alt="reply"
                  />
                  <Button
                    className="cursor-pointer font-medium min-w-[68px] sm:ml-[0] ml-[326px] text-base text-center text-white_A700 w-auto"
                    shape="RoundedBorder6"
                    size="xl"
                    variant="FillBlueA700"
                  >
                    Repost
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start mt-3 w-auto md:w-full">
                <Text
                  className="font-medium text-bluegray_400 text-left w-auto"
                  variant="body4"
                >
                  109 Likes
                </Text>
                <Text
                  className="font-medium leading-[22.00px] text-bluegray_400 text-left"
                  variant="body4"
                ></Text>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col gap-6 items-center justify-end pt-[30px] sm:px-5 px-[30px] shadow-bs1 w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <div className="flex sm:flex-1 flex-row gap-6 items-center justify-start md:pr-10 sm:pr-5 pr-[137px] w-auto sm:w-full">
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
                <Img
                  src="images/img_user.svg"
                  className="h-6 sm:mt-0 mt-3 w-6"
                  alt="user One"
                />
              </div>
              <Text
                className="font-medium leading-[32.00px] text-bluegray_900 text-left w-full"
                as="h6"
                variant="h6"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                ultrices nam vel congue non morbi enim gravida. Ut tempor
                accumsan elit neque, est neque non quam. Pellentesque at semper
                diam sit. Arcu, senectus dolor ac e
              </Text>
              <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                <div className="flex flex-row items-center justify-between w-[85%] md:w-full">
                  <Text
                    className="font-medium text-bluegray_400 text-left w-auto"
                    variant="body4"
                  >
                    109 Likes
                  </Text>
                  <Text
                    className="font-medium text-bluegray_400 text-left w-auto"
                    variant="body4"
                  >
                    03 Comment
                  </Text>
                  <Text
                    className="font-medium text-bluegray_400 text-center w-auto"
                    variant="body4"
                  >
                    2 Share
                  </Text>
                </div>
                <div className="border border-bluegray_100 border-solid flex flex-row items-center justify-between p-2 w-full">
                  <div className="flex flex-row gap-2 items-center justify-center ml-[37px] w-[11%]">
                    <Img
                      src="images/img_thumbsup_24X24.svg"
                      className="h-6 w-6"
                      alt="thumbsup One"
                    />
                    <Text
                      className="font-medium text-blue_A700 text-left w-auto"
                      variant="body5"
                    >
                      Like
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center w-[17%]">
                    <Img
                      src="images/img_volume.svg"
                      className="h-6 w-6"
                      alt="volume One"
                    />
                    <Text
                      className="font-medium text-bluegray_400 text-left w-auto"
                      variant="body5"
                    >
                      Comment
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center mr-[23px] w-[13%]">
                    <Img
                      src="images/img_reply.svg"
                      className="h-6 w-6"
                      alt="reply One"
                    />
                    <Text
                      className="font-medium text-bluegray_400 text-left w-auto"
                      variant="body5"
                    >
                      Share
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepostPage;
