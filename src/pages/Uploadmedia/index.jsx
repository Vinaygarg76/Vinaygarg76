import React from "react";

import { Img, Line, Text, Button, List } from "components";

const UploadmediaPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex sm:flex-col md:flex-col flex-row font-gilroy gap-7 items-start mx-auto md:pr-10 sm:pr-5 pr-[86px] w-full">
        <aside className="flex flex-col md:hidden justify-start w-[300px]">
          <div className="bg-gray_55 flex flex-col justify-start p-6 sm:px-5 w-full">
            <Img
              src="images/img_group10392_40.svg"
              className="h-[35px] md:ml-[0] ml-[43px] w-[65%]"
              alt="Group10392"
            />
            <div className="flex flex-col gap-[42px] justify-start mt-12 w-full">
              <div className="flex flex-row items-start justify-start w-[49%] md:w-full">
                <Line className="bg-blue_A700 h-6 w-0.5" />
                <Img
                  src="images/img_minimize.svg"
                  className="h-6 ml-1.5 w-6"
                  alt="minimize"
                />
                <Text
                  className="font-semibold ml-2 mt-[3px] text-blue_A700 text-left w-auto"
                  variant="body2"
                >
                  Dashboard
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] mr-[99px] w-[57%] md:w-full">
                <div className="flex flex-row gap-2 items-end justify-start w-[73%] md:w-full">
                  <Img
                    src="images/img_dollaraltsoli.svg"
                    className="h-6 w-6"
                    alt="dollaraltSoli"
                  />
                  <Text
                    className="font-semibold mt-[5px] text-bluegray_700 text-left w-auto"
                    variant="body2"
                  >
                    Payments
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start mt-[41px] w-full">
                  <Img
                    src="images/img_walletoutline.svg"
                    className="h-6 w-6"
                    alt="walletOutline"
                  />
                  <Text
                    className="font-semibold mt-[3px] text-bluegray_700 text-left w-auto"
                    variant="body2"
                  >
                    Wallet & Cards
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start mt-[42px] w-[89%] md:w-full">
                  <Img src="images/img_car.svg" className="h-6 w-6" alt="car" />
                  <Text
                    className="font-semibold mt-[3px] text-bluegray_700 text-left w-auto"
                    variant="body2"
                  >
                    Transactions
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start mt-[42px] w-[70%] md:w-full">
                  <Img
                    src="images/img_checkmark_24X24.svg"
                    className="h-6 w-6"
                    alt="checkmark"
                  />
                  <Text
                    className="font-semibold mt-1 text-bluegray_700 text-left w-auto"
                    variant="body2"
                  >
                    Analytics
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-end justify-start mt-[41px] w-[74%] md:w-full">
                  <Img
                    src="images/img_menu.svg"
                    className="h-6 w-6"
                    alt="menu"
                  />
                  <Text
                    className="font-semibold mt-[5px] text-bluegray_700 text-left w-auto"
                    variant="body2"
                  >
                    Messages
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start mt-[41px] w-[66%] md:w-full">
                  <Img
                    src="images/img_settings.svg"
                    className="h-6 w-6"
                    alt="settings"
                  />
                  <Text
                    className="font-semibold mt-[5px] text-bluegray_700 text-left w-auto"
                    variant="body2"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row font-opensans gap-2 items-end justify-start mb-6 ml-2 md:ml-[0] mt-[478px] w-[27%] md:w-full">
              <Img
                src="images/img_question.svg"
                className="h-6 w-6"
                alt="question"
              />
              <Text
                className="font-semibold mt-[5px] text-bluegray_700 text-left w-auto"
                variant="body2"
              >
                Help
              </Text>
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-8 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
            <Text
              className="font-semibold mb-[5px] md:mt-0 mt-4 text-bluegray_900 text-left w-auto"
              as="h4"
              variant="h4"
            >
              Upload Media
            </Text>
            <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[703px] p-2 rounded-[50%] w-14">
              <div className="md:h-9 h-[35px] mb-1 relative w-9">
                <Img
                  src="images/img_notification_32X32.svg"
                  className="absolute bottom-[0] h-8 left-[0] w-8"
                  alt="notification"
                />
                <Text
                  className="absolute bg-red_700 border border-bluegray_50 border-solid font-semibold h-[18px] pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-left text-white_A700 top-[0] w-[18px]"
                  variant="body5"
                >
                  2
                </Text>
              </div>
            </div>
            <div className="border border-blue_A701 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
              <Img
                src="images/img_profileimglarg.png"
                className="h-12 md:h-auto rounded-[50%] w-12"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
          <div className="bg-gray_51 flex flex-col items-center justify-start mt-[42px] outline-[2px] outline-blue_A700 outline-dashed p-10 sm:px-5 rounded-md w-full">
            <Img
              src="images/img_file_26X26.svg"
              className="h-[26px] w-[26px]"
              alt="file"
            />
            <Text
              className="font-medium mt-[17px] text-bluegray_600 text-left w-auto"
              variant="body1"
            >
              Add a File Here or
            </Text>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[96px] mt-[17px] w-auto"
              leftIcon={
                <Img
                  src="images/img_upload_16X16.svg"
                  className="ml-3 mr-2 my-[11px]"
                  alt="upload"
                />
              }
              shape="RoundedBorder6"
              size="lg"
              variant="OutlineBlueA700_1"
            >
              <div className="font-medium text-blue_A700 text-left text-sm">
                Upload
              </div>
            </Button>
          </div>
          <List
            className="flex-col gap-6 grid items-center mt-[23px] w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col items-center justify-start pt-0.5 w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <Img
                    src="images/img_file_24X24.svg"
                    className="h-6 w-6"
                    alt="file One"
                  />
                  <Text
                    className="font-semibold md:ml-[0] ml-[7px] text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    File Name
                  </Text>
                  <Img
                    src="images/img_close_2.svg"
                    className="h-6 md:ml-[0] ml-[884px] w-6"
                    alt="close"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-2.5 w-auto md:w-full">
                  <Text
                    className="font-medium text-bluegray_400 text-left w-auto"
                    variant="body4"
                  >
                    2.3MB of 9.0mb
                  </Text>
                </div>
                <Line className="bg-bluegray_50 h-1 mt-[7px] rounded-sm w-full" />
              </div>
              <div className="h-1 overflow-hidden relative w-full">
                <div className="w-full h-full absolute bg-undefined rounded-[2px]"></div>
                <div
                  className="h-full absolute bg-blue_A700  rounded-[2px]"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start pt-0.5 w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <Img
                    src="images/img_file_24X24.svg"
                    className="h-6 w-6"
                    alt="file Two"
                  />
                  <Text
                    className="font-semibold md:ml-[0] ml-[7px] text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    File Name
                  </Text>
                  <Img
                    src="images/img_close_2.svg"
                    className="h-6 md:ml-[0] ml-[884px] w-6"
                    alt="close One"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-2.5 w-auto md:w-full">
                  <Text
                    className="font-medium text-bluegray_400 text-left w-auto"
                    variant="body4"
                  >
                    2.3MB of 9.0mb
                  </Text>
                </div>
                <Line className="bg-bluegray_50 h-1 mt-[7px] rounded-sm w-full" />
              </div>
              <div className="h-1 overflow-hidden relative w-full">
                <div className="w-full h-full absolute bg-undefined rounded-[2px]"></div>
                <div
                  className="h-full absolute bg-blue_A700  rounded-[2px]"
                  style={{ width: "64%" }}
                ></div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start pt-0.5 w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <Img
                    src="images/img_file_24X24.svg"
                    className="h-6 w-6"
                    alt="file Three"
                  />
                  <Text
                    className="font-semibold md:ml-[0] ml-[7px] text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    File Name
                  </Text>
                  <Img
                    src="images/img_close_2.svg"
                    className="h-6 md:ml-[0] ml-[884px] w-6"
                    alt="close Two"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-2.5 w-auto md:w-full">
                  <Text
                    className="font-medium text-bluegray_400 text-left w-auto"
                    variant="body4"
                  >
                    2.3MB of 9.0mb
                  </Text>
                </div>
                <Line className="bg-bluegray_50 h-1 mt-[7px] rounded-sm w-full" />
              </div>
              <div className="h-1 overflow-hidden relative w-full">
                <div className="w-full h-full absolute bg-undefined rounded-[2px]"></div>
                <div
                  className="h-full absolute bg-blue_A700  rounded-[2px]"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start pt-0.5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  src="images/img_file_24X24.svg"
                  className="h-6 w-6"
                  alt="file Four"
                />
                <Text
                  className="font-semibold md:ml-[0] ml-[7px] text-bluegray_900 text-left w-auto"
                  variant="body1"
                >
                  File Name
                </Text>
                <Img
                  src="images/img_close_2.svg"
                  className="h-6 md:ml-[0] ml-[884px] w-6"
                  alt="close Three"
                />
              </div>
              <Text
                className="font-medium mt-2.5 text-bluegray_400 text-left w-auto"
                variant="body4"
              >
                2.3MB of 9.0mb
              </Text>
              <div className="h-1 mt-[7px] overflow-hidden relative w-full">
                <div className="w-full h-full absolute bg-undefined rounded-[2px]"></div>
                <div
                  className="h-full absolute bg-blue_A700  rounded-[2px]"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default UploadmediaPage;
