import React from "react";

import { Img, Line, Text, Slider, List } from "components";

const AnalyticsPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray_50 flex sm:flex-col md:flex-col flex-row font-gilroy gap-[31px] items-start mx-auto sm:pr-5 pr-[30px] w-full">
        <aside className="flex flex-col md:hidden justify-start md:px-5 w-[300px]">
          <div className="bg-gray_55 flex flex-col justify-start p-6 sm:px-5 w-full">
            <Img
              src="images/img_group10392_7.svg"
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
        <div className="flex flex-1 flex-col gap-8 items-end justify-start md:mt-0 mt-8 md:px-5 w-full">
          <div className="overflow-x-auto w-full">
            <Slider
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 2 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              activeSlideCSS="scale-[1.00]"
              ref={sliderRef}
              className="w-full"
              items={[...Array(6)].map(() => (
                <React.Fragment key={Math.random()}>
                  <header className="flex items-center justify-center mx-2.5">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                      <div className="header-row ">
                        <Text
                          className="font-semibold text-bluegray_900 text-left w-auto"
                          as="h4"
                          variant="h4"
                        >
                          Dashboard
                        </Text>
                        <div className="mobile-menu">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                      <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col font-opensans h-14 sm:hidden items-end justify-start md:ml-[0] ml-[797px] p-2 rounded-[50%] w-14">
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
                      <div className="border border-blue_A701 border-solid flex flex-col h-14 sm:hidden items-center justify-start ml-6 md:ml-[0] px-1 rounded-[50%] w-14">
                        <Img
                          src="images/img_profileimglarg.png"
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          alt="ProfileImgLarg"
                        />
                      </div>
                    </div>
                  </header>
                </React.Fragment>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return <div className="" />;
                }
                return <div className="" role="button" tabIndex={0} />;
              }}
            />
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
              <div className="bg-white_A700 border border-bluegray_100 border-solid flex md:flex-1 flex-col gap-[21px] items-center justify-end p-[21px] sm:px-5 rounded-md w-[64%] md:w-full">
                <div className="flex flex-row sm:gap-10 items-start justify-between mt-[3px] w-full">
                  <div className="flex flex-col gap-[7px] items-start justify-start mt-1.5 w-[32%]">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Spend Analysis
                    </Text>
                    <div className="flex flex-row items-start justify-evenly w-full">
                      <Img
                        src="images/img_arrowgrowthou.svg"
                        className="h-4 mb-[3px] w-4"
                        alt="arrowgrowthOu"
                      />
                      <Text
                        className="font-normal mt-0.5 not-italic text-black_900 text-left w-auto"
                        variant="body4"
                      ></Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[13px] items-center justify-between w-[16%]">
                    <Text
                      className="font-semibold text-bluegray_600 text-left w-auto"
                      variant="body4"
                    >
                      This Week
                    </Text>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="cursor-pointer h-5 w-5"
                      onClick={() => sliderRef.current?.slidePrev?.()}
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                  <div className="flex flex-col items-start justify-end py-[3px] w-full">
                    <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-between w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        25k
                      </Text>
                      <Line className="bg-bluegray_50 h-px sm:mt-0 my-1.5 w-[96%]" />
                    </div>
                    <div className="h-[183px] md:h-[216px] sm:h-[230px] mt-4 relative w-full">
                      <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-between w-full">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-auto"
                              variant="body4"
                            >
                              20k
                            </Text>
                            <Line className="bg-bluegray_50 h-px sm:mt-0 my-1.5 w-[96%]" />
                          </div>
                          <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-between mt-[26px] w-full">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-auto"
                              variant="body4"
                            >
                              15k
                            </Text>
                            <Line className="bg-bluegray_50 h-px sm:mt-0 my-1.5 w-[96%]" />
                          </div>
                          <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-between mt-[25px] w-full">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-auto"
                              variant="body4"
                            >
                              10k
                            </Text>
                            <Line className="bg-bluegray_50 h-px sm:mt-0 my-1.5 w-[96%]" />
                          </div>
                          <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between mt-[26px] w-[99%] md:w-full">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-auto"
                              variant="body4"
                            >
                              5k
                            </Text>
                            <Line className="bg-bluegray_50 h-px md:mt-0 my-1.5 w-[97%]" />
                          </div>
                          <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between mt-[25px] w-[99%] md:w-full">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-auto"
                              variant="body4"
                            >
                              0k
                            </Text>
                            <Line className="bg-bluegray_50 h-px md:mt-0 my-1.5 w-[97%]" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute md:h-[155px] h-[173px] right-[2%] top-[0] w-[91%] sm:w-full">
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[155px] inset-x-[0] items-end justify-start mx-auto p-[52px] md:px-10 sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_group9960.png')",
                          }}
                        >
                          <div className="bg-white_A700 border border-blue_A700 border-solid h-2 mb-[43px] mr-[131px] rounded-[50%] w-2"></div>
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-[68px] items-center justify-start p-3 right-[26%] top-[0] w-[68px]"
                          style={{
                            backgroundImage: "url('images/img_group10405.svg')",
                          }}
                        >
                          <Text
                            className="font-medium mb-1.5 mt-0.5 text-left text-white_A700 w-auto"
                            variant="body5"
                          >
                            $2311.655 May
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[30px] mt-[18px] w-[96%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        Mon
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[74px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        Tue
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[74px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        Wed
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[71px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        Thu
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[73px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        Fri
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[74px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        Sat
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[70px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        Sun
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 border border-bluegray_100 border-solid flex md:flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-lg w-[35%] md:w-full">
                <div className="flex flex-row items-start justify-between mt-0.5 w-[99%] md:w-full">
                  <Text
                    className="font-semibold mt-[5px] text-bluegray_900 text-left w-auto"
                    variant="body2"
                  >
                    Expense Tracking
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-between mb-[5px] w-[31%]">
                    <Text
                      className="font-semibold text-bluegray_600 text-left w-auto"
                      variant="body4"
                    >
                      This Month
                    </Text>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="cursor-pointer h-5 w-5"
                      onClick={() => sliderRef.current?.slideNext?.()}
                      alt="arrowdown One"
                    />
                  </div>
                </div>
                <div className="md:h-[193px] h-[200px] mt-[35px] relative w-[200px]">
                  <div className="absolute md:h-[130px] h-[200px] inset-y-[0] my-auto right-[0] w-[90%]">
                    <div className="absolute md:h-[130px] h-[200px] inset-y-[0] my-auto right-[0] w-[73%]">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-[100px] items-start justify-start p-[19px] right-[3%] top-[0] w-auto"
                        style={{
                          backgroundImage: "url('images/img_group10418.svg')",
                        }}
                      >
                        <Text
                          className="font-semibold mb-4 mt-[29px] text-left text-white_A700 w-auto"
                          variant="body2"
                        >
                          24%
                        </Text>
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[130px] inset-x-[0] items-center justify-center mx-auto p-[49px] md:px-10 sm:px-5 w-[130px]"
                        style={{
                          backgroundImage: "url('images/img_group10417.svg')",
                        }}
                      >
                        <Text
                          className="font-semibold my-2 text-left text-white_A700 w-auto"
                          variant="body2"
                        >
                          36%
                        </Text>
                      </div>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[2%] flex flex-col h-[95px] items-center justify-end left-[0] p-[25px] sm:px-5 w-auto"
                      style={{
                        backgroundImage: "url('images/img_group10416.svg')",
                      }}
                    >
                      <Text
                        className="font-semibold mb-1.5 mt-5 text-left text-white_A700 w-auto"
                        variant="body2"
                      >
                        12%
                      </Text>
                    </div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-[158px] items-center justify-start left-[0] p-[35px] sm:px-5 top-[0] w-auto"
                    style={{
                      backgroundImage: "url('images/img_group10419.svg')",
                    }}
                  >
                    <Text
                      className="font-semibold mb-[41px] mt-[31px] text-left text-white_A700 w-auto"
                      variant="body2"
                    >
                      28%
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-center justify-start mt-[13px] w-[93%] md:w-full">
                  <div className="flex flex-row items-center justify-between pr-[3px] pt-[3px] rounded-sm w-full">
                    <div className="flex flex-row gap-2 items-center justify-start rounded-sm w-[23%]">
                      <div className="bg-blue_900 h-2 my-0.5 rounded-sm w-[32%]"></div>
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        Travel
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-center mr-4 rounded-sm w-[27%]">
                      <div className="bg-blue_800 h-2 mb-[7px] rounded-sm w-[27%]"></div>
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        Sports
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between pr-1 pt-1 rounded-sm w-full">
                    <div className="flex flex-row gap-2 items-start justify-start rounded-sm w-[31%]">
                      <div className="bg-blue_A700 h-2 mb-[7px] rounded-sm w-[23%]"></div>
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        Shopping
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start rounded-sm w-[32%]">
                      <div className="bg-blue_A200 h-2 my-0.5 rounded-sm w-[23%]"></div>
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        Medicine
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col items-center justify-end p-[23px] sm:px-5 rounded-lg w-full">
              <div className="flex flex-row md:gap-10 items-end justify-between w-full">
                <div className="flex flex-col items-center justify-start mt-1.5 w-auto">
                  <Text
                    className="font-semibold text-bluegray_900 text-left w-auto"
                    variant="body2"
                  >
                    Income vs Spending Report
                  </Text>
                </div>
                <div className="flex flex-row gap-2 h-[22px] md:h-auto items-center justify-start mb-1 w-[71px]">
                  <Text
                    className="font-semibold text-bluegray_600 text-left w-auto"
                    variant="body4"
                  >
                    Yearly
                  </Text>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-5 w-5"
                    alt="arrowdown Two"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-10 rounded-[5px] w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-1 w-auto md:w-full">
                  <Text
                    className="font-normal not-italic text-bluegray_900 text-left w-auto"
                    variant="body4"
                  >
                    30K
                  </Text>
                  <Text
                    className="font-normal ml-0.5 md:ml-[0] mt-3.5 not-italic text-bluegray_900 text-left w-auto"
                    variant="body4"
                  >
                    25K
                  </Text>
                  <Text
                    className="font-normal mt-3.5 not-italic text-bluegray_900 text-left w-auto"
                    variant="body4"
                  >
                    20K
                  </Text>
                  <Text
                    className="font-normal ml-1 md:ml-[0] mt-3.5 not-italic text-bluegray_900 text-left w-auto"
                    variant="body4"
                  >
                    15K
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[3px] mt-3.5 not-italic text-bluegray_900 text-left w-auto"
                    variant="body4"
                  >
                    10K
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[9px] mt-3.5 not-italic text-bluegray_900 text-left w-auto"
                    variant="body4"
                  >
                    5K
                  </Text>
                  <Text
                    className="font-normal ml-2 md:ml-[0] mt-3.5 not-italic text-bluegray_900 text-left w-auto"
                    variant="body4"
                  >
                    0K
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start mb-[3px] md:ml-[0] ml-[15px] rounded-[5px] w-[6%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex flex-row items-end justify-evenly w-full">
                      <div className="bg-blue_A700 h-[187px] rounded-[5px] w-[49%]"></div>
                      <div className="bg-blue_200 h-[87px] mt-[100px] rounded-[5px] w-[49%]"></div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-left w-auto"
                      variant="body4"
                    >
                      Jan
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 mt-[25px] rounded-[5px] w-[6%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex flex-row items-end justify-evenly w-full">
                      <div className="bg-blue_A700 h-20 mt-[82px] rounded-[5px] w-[49%]"></div>
                      <div className="bg-blue_200 h-[162px] rounded-[5px] w-[49%]"></div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-left w-auto"
                      variant="body4"
                    >
                      Feb
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 mt-[11px] rounded-[5px] w-[6%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <div className="bg-blue_A700 h-44 rounded-[5px] w-[49%]"></div>
                      <div className="bg-blue_200 h-44 rounded-[5px] w-[49%]"></div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-left w-auto"
                      variant="body4"
                    >
                      Mar
                    </Text>
                  </div>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[30px] grid grid-cols-2 md:ml-[0] ml-[30px] md:mt-0 mt-[5px] w-[14%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-center justify-start rounded-[5px] w-full">
                    <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                      <div className="flex flex-row items-end justify-evenly w-full">
                        <div className="bg-blue_A700 h-[181px] rounded-[5px] w-[49%]"></div>
                        <div className="bg-blue_200 h-[84px] mt-[97px] rounded-[5px] w-[49%]"></div>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        Apr
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start rounded-[5px] w-full">
                    <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                      <div className="flex flex-row items-end justify-evenly w-full">
                        <div className="bg-blue_A700 h-[55px] mt-[127px] rounded-[5px] w-[49%]"></div>
                        <div className="bg-blue_200 h-[182px] rounded-[5px] w-[49%]"></div>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        May
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 mt-[33px] rounded-[5px] w-[6%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex flex-row items-end justify-evenly w-full">
                      <div className="bg-blue_A700 h-[118px] mt-9 rounded-[5px] w-[49%]"></div>
                      <div className="bg-blue_200 h-[154px] rounded-[5px] w-[49%]"></div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-left w-auto"
                      variant="body4"
                    >
                      Jun
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 mt-6 rounded-[5px] w-[6%] md:w-full">
                  <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                    <div className="flex flex-row items-end justify-evenly w-full">
                      <div className="bg-blue_A700 h-[163px] rounded-[5px] w-[49%]"></div>
                      <div className="bg-blue_200 h-[105px] mt-[58px] rounded-[5px] w-[49%]"></div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-left w-auto"
                      variant="body4"
                    >
                      Jul
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 mt-[83px] rounded-[5px] w-[6%] md:w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                    <div className="flex flex-row items-end justify-evenly w-full">
                      <div className="bg-blue_A700 h-[104px] rounded-[5px] w-[49%]"></div>
                      <div className="bg-blue_200 h-[79px] mt-[25px] rounded-[5px] w-[49%]"></div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-left w-auto"
                      variant="body4"
                    >
                      Aug
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 mt-[66px] rounded-[5px] w-[6%] md:w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                    <div className="flex flex-row items-end justify-evenly w-full">
                      <div className="bg-blue_A700 h-[121px] rounded-[5px] w-[49%]"></div>
                      <div className="bg-blue_200 h-[79px] mt-[42px] rounded-[5px] w-[49%]"></div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-left w-auto"
                      variant="body4"
                    >
                      Sep
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 mt-[33px] rounded-[5px] w-[6%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex flex-row items-end justify-evenly w-full">
                      <div className="bg-blue_A700 h-[154px] rounded-[5px] w-[49%]"></div>
                      <div className="bg-blue_200 h-[79px] mt-[75px] rounded-[5px] w-[49%]"></div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-left w-auto"
                      variant="body4"
                    >
                      Oct
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] md:mt-0 mt-[39px] rounded-[5px] w-[6%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex flex-row items-end justify-evenly w-full">
                      <div className="bg-blue_A700 h-[148px] rounded-[5px] w-[49%]"></div>
                      <div className="bg-blue_200 h-[141px] mt-[7px] rounded-[5px] w-[49%]"></div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-left w-auto"
                      variant="body4"
                    >
                      Nov
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start mb-[3px] md:ml-[0] ml-[29px] rounded-[5px] w-[6%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex flex-row items-end justify-evenly w-full">
                      <div className="bg-blue_A700 h-[187px] rounded-[5px] w-[49%]"></div>
                      <div className="bg-blue_200 h-[161px] mt-[26px] rounded-[5px] w-1/2"></div>
                    </div>
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body4"
                    >
                      Dec
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[35px] items-center justify-center mt-[22px] rounded-sm w-1/5 md:w-full">
                <div className="flex flex-row gap-2 items-center justify-start rounded-sm w-[38%]">
                  <div className="bg-blue_A700 h-2 my-0.5 rounded-sm w-[28%]"></div>
                  <Text
                    className="font-semibold text-bluegray_900 text-left w-auto"
                    variant="body4"
                  >
                    Income
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start mt-1 rounded-sm w-[45%]">
                  <div className="bg-blue_200 h-2 mb-[7px] rounded-sm w-[24%]"></div>
                  <Text
                    className="font-semibold text-bluegray_900 text-left w-auto"
                    variant="body4"
                  >
                    Spending
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

export default AnalyticsPage;
