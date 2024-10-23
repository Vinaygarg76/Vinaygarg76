import React from "react";

import { Img, Line, Text, Slider, List } from "components";

const UserAccountPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray_50 flex sm:flex-col md:flex-col flex-row font-gilroy gap-[31px] items-center mx-auto w-full">
        <aside className="flex flex-col md:hidden justify-start md:px-5 w-[300px]">
          <div className="bg-gray_51 flex flex-col gap-8 h-[1080px] md:h-auto items-center justify-start p-6 sm:px-5 w-[300px]">
            <Img
              src="images/img_group_10.svg"
              className="h-[35px] w-[65%]"
              alt="Group"
            />
            <div className="flex flex-col gap-8 h-[951px] md:h-auto items-start justify-between self-stretch w-auto">
              <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                <div className="flex flex-row gap-2 items-center justify-start py-4 rounded-lg w-[252px]">
                  <Line className="bg-blue_A700 h-6 w-0.5" />
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                    <Img
                      src="images/img_minimize.svg"
                      className="h-6 w-6"
                      alt="minimize"
                    />
                    <Text
                      className="font-semibold text-blue_A700 text-left w-auto"
                      variant="body2"
                    >
                      Dashboard
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start px-2 py-4 w-[252px]">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                    <Img
                      src="images/img_dollaraltsoli.svg"
                      className="h-6 w-6"
                      alt="dollaraltSoli"
                    />
                    <Text
                      className="font-semibold text-bluegray_700 text-left w-auto"
                      variant="body2"
                    >
                      Payments
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start px-2 py-4 w-[252px]">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                    <Img
                      src="images/img_walletoutline.svg"
                      className="h-6 w-6"
                      alt="walletOutline"
                    />
                    <Text
                      className="font-semibold text-bluegray_700 text-left w-auto"
                      variant="body2"
                    >
                      Wallet & Cards
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start px-2 py-4 w-[252px]">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                    <Img
                      src="images/img_car.svg"
                      className="h-6 w-6"
                      alt="car"
                    />
                    <Text
                      className="font-semibold text-bluegray_700 text-left w-auto"
                      variant="body2"
                    >
                      Transactions
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start px-2 py-4 w-[252px]">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                    <Img
                      src="images/img_checkmark_24X24.svg"
                      className="h-6 w-6"
                      alt="checkmark"
                    />
                    <Text
                      className="font-semibold text-bluegray_700 text-left w-auto"
                      variant="body2"
                    >
                      Analytics
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start px-2 py-4 w-[252px]">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                    <Img
                      src="images/img_menu.svg"
                      className="h-6 w-6"
                      alt="menu"
                    />
                    <Text
                      className="font-semibold text-bluegray_700 text-left w-auto"
                      variant="body2"
                    >
                      Messages
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start px-2 py-4 w-[252px]">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                    <Img
                      src="images/img_settings.svg"
                      className="h-6 w-6"
                      alt="settings"
                    />
                    <Text
                      className="font-semibold text-bluegray_700 text-left w-auto"
                      variant="body2"
                    >
                      Settings
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-opensans items-center justify-start px-2 py-4 w-[252px]">
                <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                  <Img
                    src="images/img_question.svg"
                    className="h-6 w-6"
                    alt="question"
                  />
                  <Text
                    className="font-semibold text-bluegray_700 text-left w-auto"
                    variant="body2"
                  >
                    Help
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex-1 sm:h-[1077px] h-[1080px] md:h-[3415px] md:px-5 relative w-full">
          <div className="absolute flex flex-col gap-8 inset-x-[0] items-end justify-start mx-auto top-[3%] w-[98%]">
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
                      <div className="flex flex-row md:gap-10 gap-[797px] items-center justify-between self-stretch w-auto">
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
                        <div className="flex flex-row font-opensans gap-6 sm:hidden items-start justify-start self-stretch w-auto">
                          <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col h-14 items-end justify-start p-2 rounded-[50%] w-14">
                            <div className="md:h-9 h-[35px] mb-1 relative w-9">
                              <Img
                                src="images/img_notification_32X32.svg"
                                className="absolute bottom-[0] h-8 left-[0] w-8"
                                alt="notification"
                              />
                              <div className="absolute bg-red_700 border border-bluegray_50 border-solid flex flex-col h-[18px] items-start justify-start p-0.5 right-[0] rounded-[50%] top-[0] w-[18px]">
                                <Text
                                  className="font-semibold mb-0.5 ml-0.5 md:ml-[0] text-left text-white_A700 w-auto"
                                  variant="body5"
                                >
                                  2
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="border border-blue_A701 border-solid flex flex-col h-14 items-center justify-start px-1 rounded-[50%] w-14">
                            <Img
                              src="images/img_profileimglarg.png"
                              className="h-12 md:h-auto rounded-[50%] w-12"
                              alt="ProfileImgLarg"
                            />
                          </div>
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
                <div className="bg-white_A700 border border-bluegray_100 border-solid flex md:flex-1 flex-col items-center justify-end p-[21px] sm:px-5 rounded-md w-[64%] md:w-full">
                  <div className="flex flex-col gap-[21px] items-center justify-start mt-[3px] w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                      <div className="flex flex-col gap-[7px] items-start justify-start mt-[7px] w-[32%]">
                        <Text
                          className="font-semibold text-bluegray_900 text-left w-auto"
                          variant="body1"
                        >
                          Spend Analysis
                        </Text>
                        <div className="flex flex-row gap-1 items-center justify-start self-stretch w-auto">
                          <Img
                            src="images/img_arrowgrowthou.svg"
                            className="h-4 w-4"
                            alt="arrowgrowthOu"
                          />
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-auto"
                            variant="body4"
                          ></Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 h-[22px] md:h-auto items-center justify-between w-[104px]">
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
                    <div className="flex flex-col items-center justify-end py-[3px] w-full">
                      <div className="flex flex-col gap-[18px] items-end justify-start w-full">
                        <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-full">
                          <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-auto"
                              variant="body4"
                            >
                              25k
                            </Text>
                            <Text
                              className="font-normal mt-[26px] not-italic text-bluegray_900 text-left w-auto"
                              variant="body4"
                            >
                              20k
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[3px] mt-[26px] not-italic text-bluegray_900 text-left w-auto"
                              variant="body4"
                            >
                              15k
                            </Text>
                            <Text
                              className="font-normal ml-0.5 md:ml-[0] mt-[25px] not-italic text-bluegray_900 text-left w-auto"
                              variant="body4"
                            >
                              10k
                            </Text>
                            <Text
                              className="font-normal ml-2 md:ml-[0] mt-[26px] not-italic text-bluegray_900 text-left w-auto"
                              variant="body4"
                            >
                              5k
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[7px] mt-[25px] not-italic text-bluegray_900 text-left w-auto"
                              variant="body4"
                            >
                              0k
                            </Text>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[200px] items-end justify-start p-[26px] sm:px-5 w-[96%] md:w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_group9981.png')",
                            }}
                          >
                            <div className="flex flex-col items-center justify-start mb-[78px] mr-[136px] self-stretch w-auto">
                              <div className="bg-black_901 flex flex-col items-center justify-center px-[11px] py-2.5 rounded-[5px] self-stretch w-auto">
                                <Text
                                  className="font-medium text-left text-white_A700 w-auto"
                                  variant="body5"
                                >
                                  $2311.655 May
                                </Text>
                              </div>
                              <Img
                                src="images/img_arrow.svg"
                                className="h-2 w-3.5"
                                alt="Arrow"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end ml-auto w-[96%] md:w-full">
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
                </div>
                <div className="bg-white_A700 border border-bluegray_100 border-solid flex md:flex-1 flex-col items-center justify-end p-[21px] sm:px-5 rounded-lg w-[35%] md:w-full">
                  <div className="flex flex-col items-center justify-start mt-[3px] w-[99%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="font-semibold mt-[5px] text-bluegray_900 text-left w-auto"
                        variant="body2"
                      >
                        Expense Tracking
                      </Text>
                      <div className="flex flex-row gap-2 items-center justify-between mb-[5px] w-[98px]">
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
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[200px] items-start justify-start mt-[35px] p-[35px] sm:px-5 w-[200px]"
                      style={{
                        backgroundImage: "url('images/img_group30.svg')",
                      }}
                    >
                      <div className="flex flex-row gap-[47px] items-start justify-start mb-0.5 mt-[13px] w-[90%] md:w-full">
                        <div className="flex flex-col md:gap-10 gap-[63px] justify-start mt-[18px] w-auto">
                          <Text
                            className="font-semibold mr-2 text-left text-white_A700 w-auto"
                            variant="body2"
                          >
                            28%
                          </Text>
                          <Text
                            className="font-semibold ml-2.5 md:ml-[0] text-left text-white_A700 w-auto"
                            variant="body2"
                          >
                            12%
                          </Text>
                        </div>
                        <div className="flex flex-col md:gap-10 gap-[63px] items-start justify-start mb-[18px] w-auto">
                          <Text
                            className="font-semibold text-left text-white_A700 w-auto"
                            variant="body2"
                          >
                            24%
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[3px] text-left text-white_A700 w-auto"
                            variant="body2"
                          >
                            36%
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[13px] pt-[3px] w-[91%] md:w-full">
                      <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-[95%] md:w-full">
                          <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                            <div className="bg-blue_900 h-2 rounded-sm w-[31%]"></div>
                            <Text
                              className="font-semibold text-bluegray_900 text-left w-auto"
                              variant="body4"
                            >
                              Travel
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                            <div className="bg-blue_800 h-2 rounded-sm w-[30%]"></div>
                            <Text
                              className="font-semibold text-bluegray_900 text-left w-auto"
                              variant="body4"
                            >
                              Sports
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                            <div className="bg-blue_A700 h-2 rounded-sm w-[23%]"></div>
                            <Text
                              className="font-semibold text-bluegray_900 text-left w-auto"
                              variant="body4"
                            >
                              Shopping
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                            <div className="bg-blue_A200 h-2 rounded-sm w-[24%]"></div>
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
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
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
                  <div className="flex md:flex-col flex-row gap-[15px] h-[219px] md:h-auto items-start justify-start max-w-[1029px] mt-10 w-full">
                    <div className="flex flex-col gap-[13px] h-[219px] md:h-auto items-end justify-between pb-6 w-[30px]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        30K
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        25K
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        20K
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        15K
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        10K
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        5K
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        0K
                      </Text>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[30px] h-full items-end justify-start w-full">
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[30px] grid grid-cols-3 w-[23%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col h-full items-center justify-end w-full">
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
                        <div className="flex flex-col h-full items-center justify-end w-full">
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
                        <div className="flex flex-col h-full items-center justify-end w-full">
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
                      </List>
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[30px] grid grid-cols-2 w-[15%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col h-full items-center justify-end w-full">
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
                        <div className="flex flex-col h-full items-center justify-end w-full">
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
                      <div className="flex flex-1 flex-col h-full items-center justify-end w-full">
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
                      <div className="flex flex-1 flex-col h-full items-center justify-end w-full">
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
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[30px] grid grid-cols-2 w-[15%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col h-full items-center justify-end w-full">
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
                        <div className="flex flex-col h-full items-center justify-end w-full">
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
                      </List>
                      <div className="flex flex-1 flex-col h-full items-center justify-end w-full">
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
                      <div className="flex flex-1 flex-col h-full items-center justify-end pt-[39px] w-full">
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
                      <div className="flex flex-1 flex-col h-full items-center justify-end w-full">
                        <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                          <div className="flex flex-row items-end justify-evenly w-full">
                            <div className="bg-blue_A700 h-[187px] rounded-[5px] w-[49%]"></div>
                            <div className="bg-blue_200 h-[161px] mt-[26px] rounded-[5px] w-[49%]"></div>
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
                  </div>
                  <div className="flex flex-row gap-[35px] items-center justify-center mt-[22px] w-1/5 md:w-full">
                    <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                      <div className="bg-blue_A700 h-2 rounded-sm w-[28%]"></div>
                      <Text
                        className="font-semibold text-bluegray_900 text-left w-auto"
                        variant="body4"
                      >
                        Income
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                      <div className="bg-blue_200 h-2 rounded-sm w-[23%]"></div>
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
          <div className="absolute bg-gray_55 flex flex-col h-full inset-y-[0] items-start justify-start my-auto p-6 sm:px-5 right-[0] w-[28%]">
            <div className="flex flex-row items-start justify-between mt-0.5 w-full">
              <Img
                src="images/img_arrowleft_bluegray_900.svg"
                className="h-6 mb-0.5 w-6"
                alt="arrowleft"
              />
              <Text
                className="font-semibold mt-1 text-bluegray_900 text-left w-auto"
                variant="body1"
              >
                My Profile
              </Text>
              <Img
                src="images/img_share.svg"
                className="h-6 mb-0.5 w-6"
                alt="share"
              />
            </div>
            <div className="border-[1.79px] border-blue_A701 border-solid flex flex-col h-[100px] items-center justify-start md:ml-[0] ml-[69px] mt-8 p-[7px] rounded-[50%] w-[100px]">
              <Img
                src="images/img_profileimglarg.png"
                className="h-[85px] md:h-auto rounded-[50%] w-[85px]"
                alt="ProfileImgLarg One"
              />
            </div>
            <Text
              className="font-semibold md:ml-[0] ml-[62px] mt-[21px] text-bluegray_900 text-left w-auto"
              variant="body1"
            >
              Michelle Rock
            </Text>
            <div className="flex flex-row items-center justify-start mt-[37px] py-0.5 w-full">
              <Img
                src="images/img_notification_24X24.svg"
                className="h-6 w-6"
                alt="notification One"
              />
              <div className="flex flex-col items-center justify-start ml-2 self-stretch w-auto">
                <Text
                  className="font-semibold text-bluegray_900 text-left w-auto"
                  variant="body1"
                >
                  Notifications
                </Text>
              </div>
              <Img
                src="images/img_arrowright_bluegray_600.svg"
                className="h-6 ml-[91px] w-6"
                alt="arrowright"
              />
            </div>
            <div className="flex flex-row items-start justify-start mt-6 pt-0.5 w-full">
              <Img
                src="images/img_settings_24X24.svg"
                className="h-6 mb-0.5 w-6"
                alt="settings Two"
              />
              <div className="flex flex-col items-center justify-start ml-2 mt-[5px] self-stretch w-auto">
                <Text
                  className="font-semibold text-bluegray_900 text-left w-auto"
                  variant="body1"
                >
                  Language
                </Text>
              </div>
              <Img
                src="images/img_arrowright_bluegray_600.svg"
                className="h-6 mb-0.5 ml-[111px] w-6"
                alt="arrowright One"
              />
            </div>
            <div className="flex flex-row items-center justify-start mt-6 py-0.5 w-full">
              <Img
                src="images/img_moonoutline.svg"
                className="h-6 w-6"
                alt="moonOutline"
              />
              <div className="flex flex-col items-center justify-start ml-2 self-stretch w-auto">
                <Text
                  className="font-semibold text-bluegray_900 text-left w-auto"
                  variant="body1"
                >
                  Dark mode
                </Text>
              </div>
              <Img
                src="images/img_arrowright_bluegray_600.svg"
                className="h-6 ml-[103px] w-6"
                alt="arrowright Two"
              />
            </div>
            <div className="flex flex-row items-start justify-start mt-6 pt-0.5 w-full">
              <Img
                src="images/img_settings_1.svg"
                className="h-6 mb-0.5 w-6"
                alt="settings Three"
              />
              <div className="flex flex-col items-center justify-start ml-2 mt-1 self-stretch w-auto">
                <Text
                  className="font-semibold text-bluegray_900 text-left w-auto"
                  variant="body1"
                >
                  General settings
                </Text>
              </div>
              <Img
                src="images/img_arrowright_bluegray_600.svg"
                className="h-6 mb-0.5 ml-[59px] w-6"
                alt="arrowright Three"
              />
            </div>
            <div className="flex flex-row items-center justify-start mb-[553px] mt-6 py-0.5 w-full">
              <Img
                src="images/img_dashboard.svg"
                className="h-6 w-6"
                alt="dashboard Two"
              />
              <div className="flex flex-col items-center justify-start ml-2 self-stretch w-auto">
                <Text
                  className="font-semibold text-bluegray_900 text-left w-auto"
                  variant="body1"
                >
                  Theme
                </Text>
              </div>
              <Img
                src="images/img_arrowright_bluegray_600.svg"
                className="h-6 ml-[139px] w-6"
                alt="arrowright Four"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccountPage;
