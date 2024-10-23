import React from "react";

import { Img, Text, Line, Button, Input } from "components";

const ConversationThreadingPage = () => {
  return (
    <>
      <div className="bg-white_A700 font-gilroy h-[1080px] mx-auto relative w-full">
        <div className="absolute md:h-[1079px] h-[1081px] sm:h-[1189px] inset-[0] justify-center m-auto md:px-5 w-full">
          <aside className="absolute flex flex-col md:hidden inset-y-[0] justify-start left-[0] my-auto w-1/4">
            <div className="bg-gray_55 border border-bluegray_100 border-solid flex flex-col gap-[35px] items-center justify-end p-2.5 w-full">
              <Img
                src="images/img_group10392_15.svg"
                className="h-[35px] mt-3.5 w-1/2"
                alt="Group10392"
              />
              <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                <Text
                  className="font-semibold text-black_900 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Message
                </Text>
                <div className="bg-white_A700 border border-bluegray_300 border-solid flex flex-row items-center justify-between mt-4 p-[15px] rounded-lg w-full">
                  <Text
                    className="font-medium text-bluegray_200 text-left w-auto"
                    variant="body2"
                  >
                    Search people or message
                  </Text>
                  <Img
                    src="images/img_search_blue_A200.svg"
                    className="h-5 mt-0.5 w-5"
                    alt="search"
                  />
                </div>
                <div className="flex flex-col gap-4 items-center justify-start mt-6 w-full">
                  <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                    <Img
                      src="images/img_profileimglarg_8.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start ml-4 mt-[5px] w-auto">
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-auto"
                        variant="body2"
                      >
                        Design Group
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        Angelyn Weiner: Ok
                      </Text>
                    </div>
                    <Text
                      className="font-normal ml-[53px] mt-[3px] not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      10:05 am
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                    <Img
                      src="images/img_profileimglarg.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg One"
                    />
                    <div className="flex flex-col gap-[9px] items-start justify-start ml-4 mt-[5px] w-auto">
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-auto"
                        variant="body2"
                      >
                        Rose J. Henry
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        Angelyn Weiner: Ok
                      </Text>
                    </div>
                    <Text
                      className="font-normal ml-[53px] mt-[3px] not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      10:05 am
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                    <Img
                      src="images/img_profileimglarg_50X50.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Two"
                    />
                    <div className="flex flex-col gap-3.5 items-start justify-start ml-4 mt-[3px] w-auto">
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-auto"
                        variant="body2"
                      >
                        Kai Caudle
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        Angelyn Weiner: Ok
                      </Text>
                    </div>
                    <Text
                      className="font-normal ml-[53px] mt-[3px] not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      10:05 am
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                    <Img
                      src="images/img_profileimglarg_2.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Three"
                    />
                    <div className="flex flex-col gap-3.5 items-start justify-start ml-4 mt-[3px] w-auto">
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-auto"
                        variant="body2"
                      >
                        Ali Comer
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        Angelyn Weiner: Ok
                      </Text>
                    </div>
                    <Text
                      className="font-normal ml-[53px] mt-[3px] not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      10:05 am
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                    <Img
                      src="images/img_profileimglarg_3.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Four"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start ml-4 mt-[5px] w-auto">
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-auto"
                        variant="body2"
                      >
                        Jacklyn Kovach
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        Angelyn Weiner: Ok
                      </Text>
                    </div>
                    <Text
                      className="font-normal ml-[53px] mt-[3px] not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      10:05 am
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                    <Img
                      src="images/img_profileimglarg_4.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Five"
                    />
                    <div className="flex flex-col gap-[9px] items-start justify-start ml-4 mt-[5px] w-auto">
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-auto"
                        variant="body2"
                      >
                        Landon Mosby
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        Angelyn Weiner: Ok
                      </Text>
                    </div>
                    <Text
                      className="font-normal ml-[53px] mt-[3px] not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      10:05 am
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                    <Img
                      src="images/img_profileimglarg_5.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Six"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start ml-4 mt-[3px] w-auto">
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-auto"
                        variant="body2"
                      >
                        Man Marin
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        Angelyn Weiner: Ok
                      </Text>
                    </div>
                    <Text
                      className="font-normal ml-[53px] mt-[3px] not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      10:05 am
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                    <Img
                      src="images/img_profileimglarg_6.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Seven"
                    />
                    <div className="flex flex-col gap-3.5 items-start justify-start ml-4 mt-[3px] w-auto">
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-auto"
                        variant="body2"
                      >
                        Benito Nickel
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        Angelyn Weiner: Ok
                      </Text>
                    </div>
                    <Text
                      className="font-normal ml-[53px] mt-[3px] not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      10:05 am
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                    <Img
                      src="images/img_profileimglarg_7.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Eight"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start ml-4 mt-[5px] w-auto">
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-auto"
                        variant="body2"
                      >
                        Angelyn Weiner
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        Angelyn Weiner: Ok
                      </Text>
                    </div>
                    <Text
                      className="font-normal ml-[53px] mt-[3px] not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      10:05 am
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                    <Img
                      src="images/img_profileimglarg_72X72.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Nine"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start ml-4 mt-[5px] w-auto">
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-auto"
                        variant="body2"
                      >
                        Anton Ligon
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        Angelyn Weiner: Ok
                      </Text>
                    </div>
                    <Text
                      className="font-normal ml-[53px] mt-[3px] not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      10:05 am
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                    <Img
                      src="images/img_profileimglarg_1.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Ten"
                    />
                    <div className="flex flex-col gap-[15px] items-start justify-start ml-4 mt-[3px] w-auto">
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-auto"
                        variant="body2"
                      >
                        Carmelo Rousseau
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        Angelyn Weiner: Ok
                      </Text>
                    </div>
                    <Text
                      className="font-normal ml-10 mt-[3px] not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      10:05 am
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                    <Img
                      src="images/img_profileimglarg_8.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Eleven"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start ml-4 mt-[5px] w-auto">
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-auto"
                        variant="body2"
                      >
                        Design Group
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        Angelyn Weiner: Ok
                      </Text>
                    </div>
                    <Text
                      className="font-normal ml-[53px] mt-[3px] not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      10:05 am
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start rounded-[25.5px] w-full">
                    <Img
                      src="images/img_profileimglarg_8.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Twelve"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start ml-4 mt-[5px] w-auto">
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-auto"
                        variant="body2"
                      >
                        Design Group
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        Angelyn Weiner: Ok
                      </Text>
                    </div>
                    <Text
                      className="font-normal ml-[53px] mt-[3px] not-italic text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      10:05 am
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="absolute bg-white_A700 flex flex-col h-full inset-y-[0] items-start justify-start my-auto p-[3px] right-[0] w-[76%]">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-8 md:ml-[0] mt-[21px] w-[41%] md:w-full">
              <Img
                src="images/img_profileimglarg.png"
                className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                alt="ProfileImgLarg Thirteen"
              />
              <div className="flex flex-col gap-[9px] items-start justify-start ml-4 sm:ml-[0] pt-[5px] w-[26%] sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="font-semibold text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    Rose J. Henry
                  </Text>
                </div>
                <Text
                  className="font-normal not-italic text-bluegray_300 text-left w-auto"
                  variant="body4"
                >
                  @rosie
                </Text>
              </div>
              <Img
                src="images/img_overflowmenu.svg"
                className="h-6 sm:ml-[0] ml-[242px] sm:mt-0 mt-3.5 w-6"
                alt="overflowmenu"
              />
            </div>
            <Line className="bg-bluegray_100 h-px mt-6 w-[66%]" />
            <div className="flex flex-col items-start justify-start mb-[47px] md:ml-[0] ml-[29px] mt-[29px] w-[63%] md:w-full">
              <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[3px] w-[35%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[46px] items-center justify-start p-3 w-full"
                  style={{ backgroundImage: "url('images/img_group9972.svg')" }}
                >
                  <Text
                    className="font-medium text-black_900 text-left w-auto"
                    variant="body1"
                  >
                    Hi Jake, how are you?
                  </Text>
                </div>
                <Text
                  className="font-normal not-italic text-bluegray_400 text-left w-auto"
                  variant="body4"
                >
                  Yesterday, 2:01pm
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-end justify-start md:ml-[0] ml-[296px] mt-[30px] w-[57%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[372px] items-center justify-start p-2 w-full"
                  style={{
                    backgroundImage: "url('images/img_group10282.svg')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[106px] h-[356px] items-center justify-end p-4 rounded-[5px] w-[356px]"
                    style={{
                      backgroundImage: "url('images/img_rectangle12.png')",
                    }}
                  >
                    <Button
                      className="flex h-14 items-center justify-center mt-[134px] rounded-[50%] w-14"
                      size="lgIcn"
                      variant="icbGradientBlack90066Black90066"
                    >
                      <Img
                        src="images/img_playsolid.svg"
                        className="h-8"
                        alt="playSolid"
                      />
                    </Button>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] mb-0.5 min-w-[70px] text-base text-center text-white_A700 w-auto"
                      shape="RoundedBorder3"
                      size="sm"
                      variant="GradientBlack90066Black90066"
                    >
                      01:54
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-end justify-end ml-auto w-[22%] md:w-full">
                  <Text
                    className="font-normal mb-0.5 mt-1.5 not-italic text-bluegray_400 text-left w-auto"
                    variant="body4"
                  >
                    2:01 pm
                  </Text>
                  <Img
                    src="images/img_airplane.svg"
                    className="h-6 w-6"
                    alt="airplane"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start mt-[30px] w-[47%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-14 items-center justify-start p-3 w-full"
                  style={{ backgroundImage: "url('images/img_group9972.svg')" }}
                >
                  <div className="flex flex-row gap-4 items-center justify-start w-[89%] md:w-full">
                    <Img
                      src="images/img_playsolid_blue_A700.svg"
                      className="h-8 w-8"
                      alt="playSolid One"
                    />
                    <div className="h-4 relative w-[59%]">
                      <div className="absolute h-1.5 inset-[0] justify-center m-auto overflow-hidden w-full">
                        <div className="w-full h-full absolute bg-bluegray_200 rounded-[3px]"></div>
                        <div
                          className="h-full absolute bg-blue_A700  rounded-[3px]"
                          style={{ width: "38%" }}
                        ></div>
                      </div>
                      <div className="absolute bg-white_A700 border-[3px] border-blue_A700 border-solid h-4 inset-y-[0] left-[32%] my-auto rounded-[50%] w-4"></div>
                    </div>
                    <Text
                      className="font-medium text-bluegray_400 text-left w-auto"
                      variant="body1"
                    >
                      01:54
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal not-italic text-bluegray_400 text-left w-auto"
                  variant="body4"
                >
                  3:02 pm
                </Text>
              </div>
              <div className="flex flex-col gap-[9px] items-end justify-start md:ml-[0] ml-[109px] mt-[30px] w-[84%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[46px] items-center justify-start p-3 w-full"
                  style={{ backgroundImage: "url('images/img_group9970.svg')" }}
                >
                  <Text
                    className="font-medium text-black_900 text-left w-auto"
                    variant="body1"
                  >
                    Great I will write later the exact time and place. See you
                    soon!
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-end ml-auto w-[13%] md:w-full">
                  <Text
                    className="font-normal mt-[3px] not-italic text-bluegray_400 text-left w-auto"
                    variant="body4"
                  >
                    3:02 pm
                  </Text>
                  <Img
                    src="images/img_airplane.svg"
                    className="h-4 mb-[3px] ml-1 w-4"
                    alt="airplane One"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-2 items-center justify-between md:ml-[0] ml-[3px] mt-[127px] w-[98%] md:w-full">
                <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col items-center justify-start p-3 rounded-md w-auto md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[99%] md:w-full">
                    <Img
                      src="images/img_user_24X24.svg"
                      className="h-6 w-6"
                      alt="user"
                    />
                    <Text
                      className="font-medium ml-4 sm:ml-[0] sm:mt-0 mt-1.5 text-bluegray_400 text-left w-auto"
                      variant="body4"
                    >
                      Your message....
                    </Text>
                    <Img
                      src="images/img_plus.svg"
                      className="h-6 sm:ml-[0] ml-[363px] w-6"
                      alt="plus"
                    />
                    <Img
                      src="images/img_microphone.svg"
                      className="h-6 ml-4 sm:ml-[0] w-6"
                      alt="microphone"
                    />
                  </div>
                </div>
                <Button
                  className="flex h-12 items-center justify-center w-12"
                  shape="icbRoundedBorder6"
                  size="lgIcn"
                  variant="icbOutlineBluegray100"
                >
                  <Img src="images/img_send.svg" className="h-6" alt="send" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white_A700 border border-bluegray_100 border-solid flex flex-col h-full inset-y-[0] items-start justify-start my-auto md:px-5 py-[38px] right-[0] w-[27%]">
          <div className="flex flex-row gap-4 items-center justify-start ml-6 md:ml-[0] w-[28%] md:w-full">
            <Img
              src="images/img_arrowleft_bluegray_900.svg"
              className="h-6 w-6"
              alt="arrowleft"
            />
            <Text
              className="font-semibold text-black_900 text-left w-auto"
              as="h6"
              variant="h6"
            >
              Thread
            </Text>
          </div>
          <Line className="bg-bluegray_100 h-px mt-[38px] w-full" />
          <div className="flex flex-col gap-4 items-start justify-start ml-6 md:ml-[0] mt-[34px] w-[88%] md:w-full">
            <div className="flex flex-row items-start justify-start w-[49%] md:w-full">
              <Img
                src="images/img_profileimglarg_4.png"
                className="h-8 md:h-auto rounded-[50%] w-8"
                alt="ProfileImgLarg Fourteen"
              />
              <div className="bg-indigo_50 flex flex-col gap-3 items-start justify-end ml-1 p-[13px] rounded-[10px] w-auto">
                <Text
                  className="font-bold ml-0.5 md:ml-[0] text-bluegray_900 text-left w-auto"
                  variant="body4"
                >
                  Landon Mosby
                </Text>
                <Text
                  className="font-normal ml-0.5 md:ml-[0] not-italic text-bluegray_400 text-left w-auto"
                  variant="body2"
                >
                  Nice Pic
                </Text>
              </div>
            </div>
            <div className="flex flex-row items-start justify-end ml-auto w-[45%] md:w-full">
              <div className="bg-blue_51 flex flex-col gap-4 items-start justify-start p-3 rounded-[10px] w-auto">
                <Text
                  className="font-bold md:ml-[0] ml-[3px] text-bluegray_900 text-left w-auto"
                  variant="body4"
                >
                  Man Marin
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[3px] not-italic text-bluegray_400 text-left w-auto"
                  variant="body2"
                >
                  Awesome...
                </Text>
              </div>
              <Img
                src="images/img_profileimglarg_5.png"
                className="h-8 md:h-auto ml-1 rounded-[50%] w-8"
                alt="ProfileImgLarg Fifteen"
              />
            </div>
            <div className="flex flex-row items-start justify-start w-[69%] md:w-full">
              <Img
                src="images/img_profileimglarg_7.png"
                className="h-8 md:h-auto rounded-[50%] w-8"
                alt="ProfileImgLarg Sixteen"
              />
              <div className="bg-indigo_50 flex flex-col gap-3.5 items-start justify-end ml-1 p-3 rounded-[10px] w-auto">
                <Text
                  className="font-bold md:ml-[0] ml-[3px] text-bluegray_900 text-left w-auto"
                  variant="body4"
                >
                  Angelyn Weiner
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[3px] not-italic text-bluegray_400 text-left w-auto"
                  variant="body2"
                >
                  That is a killer pictures
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[5px] items-center justify-start mb-[11px] ml-4 md:ml-[0] mt-[600px] w-[92%] md:w-full">
            <Input
              wrapClassName="flex w-[83%]"
              className="font-medium p-0 placeholder:text-bluegray_400 text-bluegray_400 text-left text-sm w-full"
              name="Group9684"
              placeholder="Write a comment..."
              suffix={
                <Img
                  src="images/img_user_24X24.svg"
                  className="ml-[35px] mr-3.5 my-3.5"
                  alt="user"
                />
              }
              shape="RoundedBorder6"
              size="3xl"
              variant="OutlineBluegray100"
            ></Input>
            <div className="bg-white_A700 border border-bluegray_100 border-solid h-12 md:h-5 p-3.5 relative rounded-md w-[16%]">
              <Img
                src="images/img_send.svg"
                className="absolute h-5 inset-[0] justify-center m-auto w-[41%]"
                alt="send One"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConversationThreadingPage;
