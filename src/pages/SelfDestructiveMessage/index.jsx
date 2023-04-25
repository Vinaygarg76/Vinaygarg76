import React from "react";

import { Img, Text, Line } from "components";

const SelfDestructiveMessagePage = () => {
  return (
    <>
      <div className="bg-gray_51 flex sm:flex-col md:flex-col flex-row font-gilroy sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <aside className="flex flex-col md:hidden justify-start md:px-5 w-[350px]">
          <div className="bg-gray_51 border border-bluegray_100 border-solid flex flex-col items-center justify-end py-[9px] w-full">
            <Img
              src="images/img_group_7.svg"
              className="h-[35px] mt-[15px] w-[47%]"
              alt="Group"
            />
            <div className="flex flex-row items-start justify-start mt-[47px] w-[87%] md:w-full">
              <div className="border border-blue_A700 border-solid flex flex-col h-14 items-center justify-start p-0.5 rounded-[50%] w-14">
                <Img
                  src="images/img_profileimglarg.png"
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  alt="ProfileImgLarg"
                />
              </div>
              <div className="flex flex-col items-start justify-start ml-3 mt-[9px] w-auto">
                <Text
                  className="font-semibold text-bluegray_900 text-left w-auto"
                  variant="body2"
                >
                  My Status
                </Text>
                <Text
                  className="font-normal mt-1 not-italic text-bluegray_400 text-left w-auto"
                  variant="body4"
                >
                  194 views
                </Text>
              </div>
              <Text
                className="font-normal ml-[102px] mt-2.5 not-italic text-bluegray_400 text-left w-auto"
                variant="body4"
              >
                10:05 am
              </Text>
            </div>
            <Line className="bg-bluegray_100 h-px mt-[30px] w-full" />
            <div className="flex flex-col gap-4 items-center justify-start mt-[29px] w-[87%] md:w-full">
              <div className="flex flex-row items-end justify-start w-full">
                <div className="border border-blue_A700 border-solid flex flex-col h-14 items-center justify-start p-[3px] rounded-[50%] w-14">
                  <Img
                    src="images/img_profileimglarg_8.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg One"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start mb-0.5 ml-3 mt-[9px] w-auto">
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
                  className="font-normal mb-8 ml-[50px] mt-[9px] not-italic text-bluegray_400 text-left w-auto"
                  variant="body4"
                >
                  10:05 am
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start w-full">
                <div className="border border-blue_A700 border-solid flex flex-col h-14 items-center justify-start p-[3px] rounded-[50%] w-14">
                  <Img
                    src="images/img_profileimglarg_50X50.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Two"
                  />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start ml-3 w-auto">
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
                <Text
                  className="font-normal ml-[94px] not-italic text-bluegray_400 text-left w-auto"
                  variant="body4"
                >
                  10:05 am
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start w-full">
                <div className="border border-blue_A700 border-solid flex flex-col h-14 items-center justify-start p-[3px] rounded-[50%] w-14">
                  <Img
                    src="images/img_profileimglarg_2.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Three"
                  />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start ml-3 w-auto">
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
                <Text
                  className="font-normal ml-[103px] not-italic text-bluegray_400 text-left w-auto"
                  variant="body4"
                >
                  10:05 am
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start w-full">
                <div className="border border-blue_A700 border-solid flex flex-col h-14 items-center justify-start p-[3px] rounded-[50%] w-14">
                  <Img
                    src="images/img_profileimglarg_3.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Four"
                  />
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start ml-3 w-auto">
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
                <Text
                  className="font-normal ml-[60px] not-italic text-bluegray_400 text-left w-auto"
                  variant="body4"
                >
                  10:05 am
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start w-full">
                <div className="border border-blue_A700 border-solid flex flex-col h-14 items-center justify-start p-[3px] rounded-[50%] w-14">
                  <Img
                    src="images/img_profileimglarg_4.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Five"
                  />
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start ml-3 w-auto">
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
                <Text
                  className="font-normal ml-[67px] not-italic text-bluegray_400 text-left w-auto"
                  variant="body4"
                >
                  10:05 am
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start w-full">
                <div className="border border-blue_A700 border-solid flex flex-col h-14 items-center justify-start p-[3px] rounded-[50%] w-14">
                  <Img
                    src="images/img_profileimglarg_5.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Six"
                  />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start ml-3 w-auto">
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
                <Text
                  className="font-normal ml-[98px] not-italic text-bluegray_400 text-left w-auto"
                  variant="body4"
                >
                  10:05 am
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start w-full">
                <div className="border border-blue_A700 border-solid flex flex-col h-14 items-center justify-start p-[3px] rounded-[50%] w-14">
                  <Img
                    src="images/img_profileimglarg_6.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Seven"
                  />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start ml-3 w-auto">
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
                <Text
                  className="font-normal ml-20 not-italic text-bluegray_400 text-left w-auto"
                  variant="body4"
                >
                  10:05 am
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start w-full">
                <div className="border border-blue_A700 border-solid flex flex-col h-14 items-center justify-start p-[3px] rounded-[50%] w-14">
                  <Img
                    src="images/img_profileimglarg_7.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Eight"
                  />
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start ml-3 w-auto">
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
                <Text
                  className="font-normal ml-[59px] not-italic text-bluegray_400 text-left w-auto"
                  variant="body4"
                >
                  10:05 am
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start w-full">
                <div className="border border-blue_A700 border-solid flex flex-col h-14 items-center justify-start p-[3px] rounded-[50%] w-14">
                  <Img
                    src="images/img_profileimglarg_72X72.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Nine"
                  />
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start ml-3 w-auto">
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
                <Text
                  className="font-normal ml-[87px] not-italic text-bluegray_400 text-left w-auto"
                  variant="body4"
                >
                  10:05 am
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start w-full">
                <div className="border border-blue_A700 border-solid flex flex-col h-14 items-center justify-start p-[3px] rounded-[50%] w-14">
                  <Img
                    src="images/img_profileimglarg_1.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Ten"
                  />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start ml-3 w-auto">
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
                <Text
                  className="font-normal ml-[37px] not-italic text-bluegray_400 text-left w-auto"
                  variant="body4"
                >
                  10:05 am
                </Text>
              </div>
              <div className="flex flex-row items-end justify-start w-full">
                <div className="border border-blue_A700 border-solid flex flex-col h-14 items-center justify-start p-[3px] rounded-[50%] w-14">
                  <Img
                    src="images/img_profileimglarg_8.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Eleven"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start mb-[3px] ml-3 mt-2 w-auto">
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
                  className="font-normal mb-[33px] ml-[50px] mt-2 not-italic text-bluegray_400 text-left w-auto"
                  variant="body4"
                >
                  10:05 am
                </Text>
              </div>
              <div className="flex flex-row items-end justify-start w-full">
                <div className="border border-blue_A700 border-solid flex flex-col h-14 items-center justify-start p-[3px] rounded-[50%] w-14">
                  <Img
                    src="images/img_profileimglarg_8.png"
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    alt="ProfileImgLarg Twelve"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start mb-0.5 ml-3 mt-2 w-auto">
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
                  className="font-normal mb-[33px] ml-[50px] mt-2 not-italic text-bluegray_400 text-left w-auto"
                  variant="body4"
                >
                  10:05 am
                </Text>
              </div>
            </div>
          </div>
        </aside>
        <div className="bg-white_A700 flex flex-1 flex-col gap-[38px] items-center justify-center p-[306px] md:px-5 w-full">
          <div className="border-[3px] border-bluegray_200 border-dashed h-[119px] mt-[83px] rounded-[50%] w-[119px]"></div>
          <Text
            className="font-medium mb-[206px] text-bluegray_400 text-left w-auto"
            variant="body1"
          >
            Tap on Contact to view self destructive message
          </Text>
        </div>
      </div>
    </>
  );
};

export default SelfDestructiveMessagePage;
