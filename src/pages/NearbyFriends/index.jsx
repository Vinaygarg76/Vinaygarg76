import React from "react";

import { Img, Text, Input } from "components";
import { CloseSVG } from "../../assets/images";

const NearbyFriendsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-2.5">
              <Img
                src="images/img_group_6.svg"
                className="h-[35px]"
                alt="Group"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-6 sm:hidden items-start justify-start md:ml-[0] ml-[270px] self-stretch w-auto">
              <div className="flex flex-row gap-1 items-center justify-start self-stretch w-auto">
                <Text
                  className="font-medium text-gray_903 text-left w-auto"
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
              <div className="flex flex-row gap-1 items-center justify-start self-stretch w-auto">
                <Text
                  className="font-medium text-gray_903 text-left w-auto"
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
                className="font-medium text-gray_903 text-left w-auto"
                variant="body2"
              >
                Request a demo
              </Text>
            </div>
            <Img
              src="images/img_profileimglarg.png"
              className="h-14 md:h-auto sm:hidden md:ml-[0] ml-[385px] rounded-[50%] w-14"
              alt="ProfileImgLarg"
            />
          </div>
        </header>
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1268px] mb-[216px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <Img
              src="images/img_arrowleft_bluegray_900.svg"
              className="h-6 w-6"
              alt="arrowleft"
            />
            <Text
              className="font-semibold ml-6 md:ml-[0] text-bluegray_900 text-left w-auto"
              as="h5"
              variant="h5"
            >
              Nearby Friends
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e)}
              wrapClassName="flex md:flex-1 md:ml-[0] ml-[558px] w-2/5 md:w-full"
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
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:gap-5 gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg One"
                  />
                  <div className="flex sm:flex-1 flex-col items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[7px] w-2/5 sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Rose J. Henry
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between mt-1 w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        New York
                      </Text>
                      <div className="bg-bluegray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[117px] sm:mt-0 my-[17px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_50X50.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Two"
                  />
                  <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-2/5 sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Kai Caudle
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        New York
                      </Text>
                      <div className="bg-bluegray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[117px] sm:mt-0 my-[17px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_1.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Three"
                  />
                  <div className="flex sm:flex-1 flex-col gap-2.5 items-center justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-[41%] sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Carmelo Rousseau
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-[97%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        New York
                      </Text>
                      <div className="bg-bluegray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold ml-28 sm:ml-[0] sm:mt-0 my-[17px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_2.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Four"
                  />
                  <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-2/5 sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Ali Comer
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        New York
                      </Text>
                      <div className="bg-bluegray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[117px] sm:mt-0 my-[17px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_3.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Five"
                  />
                  <div className="flex sm:flex-1 flex-col items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-1.5 w-2/5 sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Jacklyn Kovach
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between mt-1 w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        New York
                      </Text>
                      <div className="bg-bluegray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[117px] sm:mt-0 my-[17px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_4.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Six"
                  />
                  <div className="flex sm:flex-1 flex-col items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[7px] w-2/5 sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Landon Mosby
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between mt-1 w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        New York
                      </Text>
                      <div className="bg-bluegray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[117px] sm:mt-0 my-[17px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_5.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Seven"
                  />
                  <div className="flex sm:flex-1 flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-2/5 sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Man Marin
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        New York
                      </Text>
                      <div className="bg-bluegray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[117px] sm:mt-0 my-[17px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_6.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Eight"
                  />
                  <div className="flex sm:flex-1 flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-2/5 sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Benito Nickel
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        New York
                      </Text>
                      <div className="bg-bluegray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[117px] sm:mt-0 my-[17px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_7.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Nine"
                  />
                  <div className="flex sm:flex-1 flex-col items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-1.5 w-2/5 sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Angelyn Weiner
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between mt-1 w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        New York
                      </Text>
                      <div className="bg-bluegray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[117px] sm:mt-0 my-[17px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Ten"
                  />
                  <div className="flex sm:flex-1 flex-col items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[7px] w-2/5 sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Rose J. Henry
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between mt-1 w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        New York
                      </Text>
                      <div className="bg-bluegray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[117px] sm:mt-0 my-[17px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_50X50.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Eleven"
                  />
                  <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-2/5 sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Kai Caudle
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        New York
                      </Text>
                      <div className="bg-bluegray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[117px] sm:mt-0 my-[17px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_1.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Twelve"
                  />
                  <div className="flex sm:flex-1 flex-col gap-2.5 items-center justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-[41%] sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Carmelo Rousseau
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-[97%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        New York
                      </Text>
                      <div className="bg-bluegray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold ml-28 sm:ml-[0] sm:mt-0 my-[17px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_2.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Thirteen"
                  />
                  <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-2/5 sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Ali Comer
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        New York
                      </Text>
                      <div className="bg-bluegray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[117px] sm:mt-0 my-[17px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_3.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Fourteen"
                  />
                  <div className="flex sm:flex-1 flex-col items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-1.5 w-2/5 sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Jacklyn Kovach
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between mt-1 w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        New York
                      </Text>
                      <div className="bg-bluegray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[117px] sm:mt-0 my-[17px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_4.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Fifteen"
                  />
                  <div className="flex sm:flex-1 flex-col items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[7px] w-2/5 sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Landon Mosby
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between mt-1 w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        New York
                      </Text>
                      <div className="bg-bluegray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[117px] sm:mt-0 my-[17px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_5.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Sixteen"
                  />
                  <div className="flex sm:flex-1 flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-2/5 sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Man Marin
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        New York
                      </Text>
                      <div className="bg-bluegray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[117px] sm:mt-0 my-[17px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_6.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Seventeen"
                  />
                  <div className="flex sm:flex-1 flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-[5px] w-2/5 sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Benito Nickel
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        New York
                      </Text>
                      <div className="bg-bluegray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[117px] sm:mt-0 my-[17px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-center justify-start p-2.5 rounded-md w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_profileimglarg_7.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Eighteen"
                  />
                  <div className="flex sm:flex-1 flex-col items-start justify-start ml-4 sm:ml-[0] sm:mt-0 mt-1.5 w-2/5 sm:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Angelyn Weiner
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between mt-1 w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        New York
                      </Text>
                      <div className="bg-bluegray_400 h-1 mb-[9px] mt-1 rounded-[50%] w-1"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        20 min ago
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold sm:ml-[0] ml-[117px] sm:mt-0 my-[17px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    INVITE
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NearbyFriendsPage;