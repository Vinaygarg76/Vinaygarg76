import React from "react";

import { Img, Text, Button, Line } from "components";
import { useNavigate } from "react-router-dom";

const BroadcastMessagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-gilroy sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <aside className="flex flex-col md:hidden justify-start md:px-5 w-[350px]">
          <div className="bg-gray_55 border border-bluegray_100 border-solid flex flex-col gap-8 items-center justify-start p-6 sm:px-5 w-full">
            <Img
              src="images/img_group10509.svg"
              className="h-9 w-[54%]"
              alt="Group10509"
            />
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="flex flex-row gap-2 items-start justify-start pr-1 py-1 w-[98%] md:w-full">
                <Img
                  src="images/img_arrowleft_bluegray_900.svg"
                  className="common-pointer h-8 w-8"
                  onClick={() => navigate(-1)}
                  alt="arrowleft"
                />
                <div className="flex flex-col gap-[15px] items-start justify-start my-0.5 w-auto">
                  <Text
                    className="font-semibold text-black_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    New Broadcast
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_900 text-left w-auto"
                    variant="body2"
                  >
                    2 of 256 selected
                  </Text>
                </div>
              </div>
              <Text
                className="font-medium leading-[26.00px] text-bluegray_400 text-center w-full"
                variant="body2"
              >
                +91 1234567890 in their address book will receive your broadcast
                message
              </Text>
              <div className="md:h-[788px] h-[795px] relative w-full">
                <div className="absolute flex flex-col gap-4 h-max inset-[0] items-start justify-center m-auto w-full">
                  <div className="flex flex-row items-end justify-start w-full">
                    <Img
                      src="images/img_profileimglarg.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg"
                    />
                    <div className="flex flex-col gap-[7px] items-start justify-start mb-[3px] ml-4 mt-1.5 w-auto">
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
                        Available
                      </Text>
                    </div>
                    <Img
                      src="images/img_checkmark_1.svg"
                      className="h-6 ml-28 my-[13px] w-6"
                      alt="checkmark"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start w-full">
                    <Img
                      src="images/img_profileimglarg_50X50.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg One"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start ml-4 mt-[3px] w-auto">
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
                        Available
                      </Text>
                    </div>
                    <Img
                      src="images/img_checkmark_1.svg"
                      className="h-6 ml-[131px] mt-4 w-6"
                      alt="checkmark One"
                    />
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start rounded-[25.5px] w-[46%] md:w-full">
                    <Img
                      src="images/img_profileimglarg_2.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Two"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-auto">
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
                        Available
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start rounded-[25.5px] w-[61%] md:w-full">
                    <Img
                      src="images/img_profileimglarg_3.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Three"
                    />
                    <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
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
                        Available
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-end justify-start rounded-[25.5px] w-[58%] md:w-full">
                    <Img
                      src="images/img_profileimglarg_4.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Four"
                    />
                    <div className="flex flex-col gap-[7px] items-start justify-start my-1 w-auto">
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
                        Available
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start rounded-[25.5px] w-[48%] md:w-full">
                    <Img
                      src="images/img_profileimglarg_5.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Five"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-auto">
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
                        Available
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start rounded-[25.5px] w-[54%] md:w-full">
                    <Img
                      src="images/img_profileimglarg_6.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Six"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-auto">
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
                        Available
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start rounded-[25.5px] w-[61%] md:w-full">
                    <Img
                      src="images/img_profileimglarg_7.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Seven"
                    />
                    <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
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
                        Available
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start rounded-[25.5px] w-[52%] md:w-full">
                    <Img
                      src="images/img_profileimglarg_72X72.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Eight"
                    />
                    <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
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
                        Available
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start rounded-[25.5px] w-[68%] md:w-full">
                    <Img
                      src="images/img_profileimglarg_1.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Nine"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-auto">
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
                        Available
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start rounded-[25.5px] w-[68%] md:w-full">
                    <Img
                      src="images/img_profileimglarg_1.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Ten"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-auto">
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
                        Available
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start rounded-[25.5px] w-[68%] md:w-full">
                    <Img
                      src="images/img_profileimglarg_1.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="ProfileImgLarg Eleven"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-auto">
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
                        Available
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="absolute bottom-[0] flex h-10 items-center justify-center right-[0] rounded-[50%] w-10"
                  size="mdIcn"
                  variant="icbFillBlueA700"
                >
                  <Img
                    src="images/img_checkmark.svg"
                    className=""
                    alt="checkmark Two"
                  />
                </Button>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start pl-[3px] py-[3px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[21px] w-[95%] md:w-full">
              <Img
                src="images/img_profileimglarg.png"
                className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                alt="ProfileImgLarg Twelve"
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
            <Line className="bg-bluegray_100 h-px mt-6 w-full" />
            <div className="flex flex-col items-start justify-start my-[29px] w-[95%] md:w-full">
              <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[3px] w-[23%] md:w-full">
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
              <div className="flex flex-col gap-2 items-end justify-start md:ml-[0] ml-[646px] mt-[30px] w-[37%] md:w-full">
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
              <div className="flex flex-col gap-3 items-start justify-start mt-[30px] w-[31%] md:w-full">
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
              <div className="flex flex-col gap-[9px] items-end justify-start md:ml-[0] ml-[459px] mt-[30px] w-[56%] md:w-full">
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
              <div className="flex md:flex-col flex-row gap-2 items-center justify-between md:ml-[0] ml-[3px] mt-[145px] w-full">
                <div className="bg-white_A700 border border-bluegray_100 border-solid flex md:flex-1 flex-col items-center justify-start p-3 rounded-md w-auto md:w-full">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default BroadcastMessagePage;
