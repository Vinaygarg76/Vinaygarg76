import React from "react";

import { Img, Text, Button, Line, Input } from "components";
import { CloseSVG } from "../../assets/images";

const FriendListPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group10392_2.svg"
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
        <div className="flex flex-col items-center justify-start max-w-[1268px] mb-[308px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
              <div className="flex md:flex-1 flex-row items-start justify-between md:mt-0 mt-3 pt-1 w-[21%] md:w-full">
                <div className="flex flex-col gap-[19px] items-center justify-start w-auto">
                  <Text
                    className="font-medium text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    All Friends
                  </Text>
                  <Line className="bg-blue_A700 h-0.5 w-full" />
                </div>
                <Text
                  className="font-medium mt-[3px] text-bluegray_400 text-left w-auto"
                  variant="body2"
                >
                  Recently Added
                </Text>
              </div>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e)}
                wrapClassName="flex md:flex-1 w-2/5 md:w-full"
                className="font-medium p-0 placeholder:text-bluegray_200 text-base text-bluegray_200 text-left w-full"
                name="Group10337"
                placeholder="Search Friends"
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      className="mt-[17px] mb-[15px] cursor-pointer ml-[35px] mr-4"
                      onClick={() => setInputvalue("")}
                      fillColor="#bac1ce"
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  ) : (
                    <Img
                      src="images/img_search_blue_A200.svg"
                      className="mt-[17px] mb-[15px] cursor-pointer ml-[35px] mr-4"
                      alt="search"
                    />
                  )
                }
                shape="srcRoundedBorder8"
                size="mdSrc"
                variant="srcOutlineBluegray300"
              ></Input>
            </div>
            <div className="gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg"
                  />
                  <div className="flex sm:flex-1 flex-col items-center justify-start mb-[3px] ml-4 sm:ml-[0] sm:mt-0 mt-[7px] w-auto sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Rose J. Henry
                    </Text>
                    <Text
                      className="font-normal mt-1 not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      24 Mutual friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-6 sm:ml-[0] ml-[190px] sm:mt-0 my-[13px] w-6"
                    alt="user"
                  />
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_50X50.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg One"
                  />
                  <div className="flex sm:flex-1 flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0] w-auto sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Kai Caudle
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      12 Mutual friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-6 sm:ml-[0] ml-[194px] w-6"
                    alt="user One"
                  />
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_1.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Two"
                  />
                  <div className="flex sm:flex-1 flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0] w-auto sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Carmelo Rousseau
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      14 Mutual friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-6 ml-36 sm:ml-[0] w-6"
                    alt="user Two"
                  />
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_2.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Three"
                  />
                  <div className="flex sm:flex-1 flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0] w-auto sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Ali Comer
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      10 Mutual friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-6 ml-48 sm:ml-[0] w-6"
                    alt="user Three"
                  />
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_3.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Four"
                  />
                  <div className="flex sm:flex-1 flex-col items-start justify-start mb-[3px] ml-4 sm:ml-[0] sm:mt-0 mt-1.5 w-auto sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Jacklyn Kovach
                    </Text>
                    <Text
                      className="font-normal mt-1 not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      09 Mutual friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-6 sm:ml-[0] ml-[170px] sm:mt-0 my-[13px] w-6"
                    alt="user Four"
                  />
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_4.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Five"
                  />
                  <div className="flex sm:flex-1 flex-col items-start justify-start mb-[3px] ml-4 sm:ml-[0] sm:mt-0 mt-[7px] w-auto sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Landon Mosby
                    </Text>
                    <Text
                      className="font-normal mt-1 not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      05 Mutual friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-6 sm:ml-[0] ml-[179px] sm:mt-0 my-[13px] w-6"
                    alt="user Five"
                  />
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_5.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Six"
                  />
                  <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start ml-4 sm:ml-[0] w-auto sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Man Marin
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      31 Mutual friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-6 sm:ml-[0] ml-[194px] w-6"
                    alt="user Six"
                  />
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_6.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Seven"
                  />
                  <div className="flex sm:flex-1 flex-col gap-[9px] items-center justify-start ml-4 sm:ml-[0] w-auto sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Benito Nickel
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      50 Mutual friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-6 sm:ml-[0] ml-[189px] w-6"
                    alt="user Seven"
                  />
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_7.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Eight"
                  />
                  <div className="flex sm:flex-1 flex-col items-start justify-start mb-[3px] ml-4 sm:ml-[0] sm:mt-0 mt-1.5 w-auto sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Angelyn Weiner
                    </Text>
                    <Text
                      className="font-normal mt-1 not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      35 Mutual friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-6 sm:ml-[0] ml-[169px] sm:mt-0 my-[13px] w-6"
                    alt="user Eight"
                  />
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Nine"
                  />
                  <div className="flex sm:flex-1 flex-col items-center justify-start mb-[3px] ml-4 sm:ml-[0] sm:mt-0 mt-[7px] w-auto sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Rose J. Henry
                    </Text>
                    <Text
                      className="font-normal mt-1 not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      24 Mutual friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-6 sm:ml-[0] ml-[190px] sm:mt-0 my-[13px] w-6"
                    alt="user Nine"
                  />
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_50X50.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Ten"
                  />
                  <div className="flex sm:flex-1 flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0] w-auto sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Kai Caudle
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      12 Mutual friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-6 sm:ml-[0] ml-[194px] w-6"
                    alt="user Ten"
                  />
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_1.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Eleven"
                  />
                  <div className="flex sm:flex-1 flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0] w-auto sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Carmelo Rousseau
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      14 Mutual friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-6 ml-36 sm:ml-[0] w-6"
                    alt="user Eleven"
                  />
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_2.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Twelve"
                  />
                  <div className="flex sm:flex-1 flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0] w-auto sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Ali Comer
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      10 Mutual friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-6 ml-48 sm:ml-[0] w-6"
                    alt="user Twelve"
                  />
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_3.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Thirteen"
                  />
                  <div className="flex sm:flex-1 flex-col items-start justify-start mb-[3px] ml-4 sm:ml-[0] sm:mt-0 mt-1.5 w-auto sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Jacklyn Kovach
                    </Text>
                    <Text
                      className="font-normal mt-1 not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      09 Mutual friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-6 sm:ml-[0] ml-[170px] sm:mt-0 my-[13px] w-6"
                    alt="user Thirteen"
                  />
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_4.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Fourteen"
                  />
                  <div className="flex sm:flex-1 flex-col items-start justify-start mb-[3px] ml-4 sm:ml-[0] sm:mt-0 mt-[7px] w-auto sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Landon Mosby
                    </Text>
                    <Text
                      className="font-normal mt-1 not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      05 Mutual friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-6 sm:ml-[0] ml-[179px] sm:mt-0 my-[13px] w-6"
                    alt="user Fourteen"
                  />
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_5.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Fifteen"
                  />
                  <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start ml-4 sm:ml-[0] w-auto sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Man Marin
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      31 Mutual friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-6 sm:ml-[0] ml-[194px] w-6"
                    alt="user Fifteen"
                  />
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_6.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Sixteen"
                  />
                  <div className="flex sm:flex-1 flex-col gap-[9px] items-center justify-start ml-4 sm:ml-[0] w-auto sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Benito Nickel
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      50 Mutual friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-6 sm:ml-[0] ml-[189px] w-6"
                    alt="user Sixteen"
                  />
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_7.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Seventeen"
                  />
                  <div className="flex sm:flex-1 flex-col items-start justify-start mb-[3px] ml-4 sm:ml-[0] sm:mt-0 mt-1.5 w-auto sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Angelyn Weiner
                    </Text>
                    <Text
                      className="font-normal mt-1 not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      35 Mutual friends
                    </Text>
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-6 sm:ml-[0] ml-[169px] sm:mt-0 my-[13px] w-6"
                    alt="user Seventeen"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendListPage;
