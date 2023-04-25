import React from "react";

import { Img, Text, Button, Line } from "components";

const GIFsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-gilroy sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <aside className="flex flex-col md:hidden justify-start md:px-5 w-[350px]">
          <div className="bg-gray_55 border border-bluegray_100 border-solid flex flex-col gap-[35px] items-center justify-end p-2.5 w-full">
            <Img
              src="images/img_group10392_21.svg"
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
        <div className="flex-1 sm:h-[1078px] h-[1081px] md:h-[1302px] md:px-5 relative w-full">
          <div className="absolute bg-white_A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-6 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[11px] w-[99%] md:w-full">
              <Img
                src="images/img_profileimglarg.png"
                className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                alt="ProfileImgLarg Thirteen"
              />
              <div className="flex flex-col gap-[9px] items-start justify-start ml-4 md:ml-[0] pt-[5px] w-[11%] md:w-full">
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
                className="h-6 md:ml-[0] ml-[824px] md:mt-0 mt-3.5 w-6"
                alt="overflowmenu"
              />
            </div>
            <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[11px] mt-[54px] w-[23%] md:w-full">
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
            <div className="flex flex-col gap-3 items-start justify-start ml-2 md:ml-[0] mt-[30px] w-[30%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-14 items-center justify-start p-3 w-full"
                style={{ backgroundImage: "url('images/img_group9972.svg')" }}
              >
                <div className="flex flex-row gap-4 items-center justify-start w-[89%] md:w-full">
                  <Img
                    src="images/img_playsolid_blue_A700.svg"
                    className="h-8 w-8"
                    alt="playSolid"
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
            <Text
              className="font-normal md:ml-[0] ml-[500px] mt-9 not-italic text-bluegray_400 text-left w-auto"
              variant="body2"
            >
              Today
            </Text>
            <div className="flex flex-col gap-[9px] items-end justify-start md:ml-[0] ml-[467px] mt-[30px] w-[55%] md:w-full">
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
                  alt="airplane"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 items-end justify-start md:ml-[0] ml-[654px] mt-[30px] w-[37%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[372px] items-center justify-start p-2 w-full"
                style={{ backgroundImage: "url('images/img_group10282.svg')" }}
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[106px] h-[356px] items-center justify-end p-4 rounded-[5px] w-[356px]"
                  style={{
                    backgroundImage: "url('images/img_rectangle12.png')",
                  }}
                >
                  <Button
                    className="flex h-14 items-center justify-center mt-[134px] rotate-[180deg] rounded-[50%] w-14"
                    size="lgIcn"
                    variant="icbGradientBlack90066Black90066"
                  >
                    <Img
                      src="images/img_volume_56X56.svg"
                      className="h-[33px]"
                      alt="volume"
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
                  alt="airplane One"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-2 items-center justify-start mb-2 md:ml-[0] ml-[11px] mt-[89px] w-[99%] md:w-full">
              <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col items-center justify-start p-3 rounded-md w-[95%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Img
                    src="images/img_user_24X24.svg"
                    className="h-6 w-6"
                    alt="user"
                  />
                  <Text
                    className="font-medium ml-4 md:ml-[0] md:mt-0 mt-1.5 text-bluegray_400 text-left w-auto"
                    variant="body4"
                  >
                    Your message....
                  </Text>
                  <Img
                    src="images/img_plus.svg"
                    className="h-6 md:ml-[0] ml-[733px] w-6"
                    alt="plus"
                  />
                  <Img
                    src="images/img_microphone.svg"
                    className="h-6 ml-4 md:ml-[0] w-6"
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
          <Line className="absolute bg-bluegray_100 h-px inset-x-[0] mx-auto top-[9%] w-full" />
        </div>
      </div>
    </>
  );
};

export default GIFsPage;
