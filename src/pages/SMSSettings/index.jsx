import React from "react";

import { Img, Text, Switch, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const SMSSettingsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-gilroy sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <aside className="flex flex-col md:hidden justify-start md:px-5 w-[350px]">
          <div className="bg-gray_51 border border-bluegray_100 border-solid flex flex-col gap-[23px] items-center justify-center p-6 sm:px-5 w-full">
            <Img
              src="images/img_group_8.svg"
              className="h-[35px] mt-[18px] w-[54%]"
              alt="Group"
            />
            <div className="flex flex-col items-start justify-start mb-[502px] w-full">
              <div className="flex flex-row gap-4 items-end justify-start w-[81%] md:w-full">
                <Img
                  src="images/img_arrowleft_bluegray_900.svg"
                  className="common-pointer h-8 mb-[3px] w-8"
                  onClick={() => navigate(-1)}
                  alt="arrowleft"
                />
                <Text
                  className="font-semibold mt-1.5 text-bluegray_900 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Message Settings
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-center justify-start mt-6 pt-0.5 w-full">
                <div className="flex flex-row items-end justify-between w-full">
                  <Text
                    className="font-semibold mt-[5px] text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    iMessage
                  </Text>
                  <Switch value={true} className="mb-0.5 w-auto" />
                </div>
                <Text
                  className="font-medium leading-[22.00px] text-blue_A700 text-left w-full"
                  variant="body4"
                >
                  iMeassages can be sent between iPhone, iPad, iPod Touch and
                  Mac. Learn More...
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-center justify-start mt-4 pt-0.5 w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="font-semibold mt-[5px] text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    Lorem Ipsum
                  </Text>
                  <Img
                    src="images/img_arrowright_black_900.svg"
                    className="h-6 mb-0.5 w-6"
                    alt="arrowright"
                  />
                </div>
                <Text
                  className="font-medium leading-[22.00px] text-bluegray_400 text-left w-full"
                  variant="body4"
                >
                  Allow your iPhone text messages to also be sent and received
                  on other devices signed into your iMessage account
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-center justify-start mt-4 pt-0.5 w-full">
                <div className="flex flex-row items-end justify-between w-full">
                  <Text
                    className="font-semibold mt-[5px] text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    Send Read Receipts
                  </Text>
                  <Switch value={false} className="mb-0.5 w-auto" />
                </div>
                <Text
                  className="font-medium leading-[22.00px] text-bluegray_400 text-left w-full"
                  variant="body4"
                >
                  Allow others to be notified when you have read their message
                </Text>
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-start mt-4 pt-0.5 w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="font-semibold text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    Send as SMS
                  </Text>
                  <Switch value={false} className="w-auto" />
                </div>
                <Text
                  className="font-medium leading-[22.00px] text-bluegray_400 text-left w-full"
                  variant="body4"
                >
                  Send as SMS when iMessages is unavailable. Carrier messaging
                  rates may apply.
                </Text>
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
                alt="ProfileImgLarg"
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
                    className="font-normal mt-1.5 not-italic text-bluegray_400 text-left w-auto"
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

export default SMSSettingsPage;
