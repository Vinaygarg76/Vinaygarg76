import React from "react";

import { Img, Text, Button, List } from "components";

const SharePage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto pt-[35px] sm:px-5 px-[35px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group10392_3.svg"
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
        <div className="flex flex-col gap-[37px] items-center justify-end max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start rounded-md w-full">
            <Text
              className="font-semibold sm:mt-0 mt-[11px] text-black_900 text-left w-auto"
              as="h3"
              variant="h3"
            >
              Gallery
            </Text>
            <Text
              className="font-semibold sm:ml-[0] ml-[933px] sm:mt-0 my-[13px] text-bluegray_900 text-left w-auto"
              as="h5"
              variant="h5"
            >
              4 Selected
            </Text>
            <Button
              className="cursor-pointer font-medium min-w-[79px] sm:ml-[0] ml-[30px] text-base text-center text-white_A700 w-auto"
              shape="RoundedBorder6"
              size="5xl"
              variant="FillBlueA700"
            >
              Share
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                <Text
                  className="font-semibold text-black_900 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Recent
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-1 grid grid-cols-2 w-1/4 md:w-full"
                    orientation="horizontal"
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-start sm:ml-[0] w-full"
                      style={{
                        backgroundImage: "url('images/img_group2446.png')",
                      }}
                    >
                      <div className="bg-black_900_4c md:h-10 h-[150px] p-[54px] md:px-10 sm:px-5 relative w-[150px]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="absolute h-10 inset-[0] justify-center m-auto w-10"
                          alt="checkmark"
                        />
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-start sm:ml-[0] w-full"
                      style={{
                        backgroundImage: "url('images/img_group2447.png')",
                      }}
                    >
                      <div className="bg-black_900_4c md:h-10 h-[150px] p-[54px] md:px-10 sm:px-5 relative w-[150px]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="absolute h-10 inset-[0] justify-center m-auto w-10"
                          alt="checkmark One"
                        />
                      </div>
                    </div>
                  </List>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-start w-[150px]"
                    style={{
                      backgroundImage: "url('images/img_group2448.png')",
                    }}
                  >
                    <div className="bg-black_900_4c flex flex-col gap-7 h-[150px] items-center justify-end pt-1 px-1 w-[150px]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-10 mt-[49px] w-10"
                        alt="checkmark Two"
                      />
                      <Img
                        src="images/img_videocamera.svg"
                        className="h-[27px] w-[27px]"
                        alt="videocamera"
                      />
                    </div>
                  </div>
                  <Img
                    src="images/img_group2446.png"
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    alt="RectangleTen"
                  />
                  <Img
                    src="images/img_group2447.png"
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    alt="RectangleEleven"
                  />
                  <div
                    className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                    style={{
                      backgroundImage: "url('images/img_group2448.png')",
                    }}
                  >
                    <Img
                      src="images/img_videocamera.svg"
                      className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                      alt="videocamera One"
                    />
                  </div>
                  <Img
                    src="images/img_group2447.png"
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    alt="RectangleEleven One"
                  />
                  <div
                    className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                    style={{
                      backgroundImage: "url('images/img_group2448.png')",
                    }}
                  >
                    <Img
                      src="images/img_videocamera.svg"
                      className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                      alt="videocamera Two"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[23px] items-start justify-start mt-[77px] w-full">
              <Text
                className="font-semibold text-black_900 text-left w-auto"
                as="h5"
                variant="h5"
              >
                Last Week
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                    <Img
                      src="images/img_rectangle10.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleTen One"
                    />
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-start w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group2452.png')",
                      }}
                    >
                      <div className="bg-black_900_4c flex flex-col gap-7 h-[150px] items-center justify-end pt-1 px-1 w-[150px]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-10 mt-[49px] w-10"
                          alt="checkmark Three"
                        />
                        <Img
                          src="images/img_videocamera.svg"
                          className="h-[27px] w-[27px]"
                          alt="videocamera Three"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_rectangle11.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleEleven Two"
                    />
                    <Img
                      src="images/img_rectangle10.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleTen Two"
                    />
                    <div
                      className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group2452.png')",
                      }}
                    >
                      <Img
                        src="images/img_videocamera.svg"
                        className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                        alt="videocamera Four"
                      />
                    </div>
                    <Img
                      src="images/img_rectangle11.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleSeventeen"
                    />
                    <Img
                      src="images/img_rectangle10.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleTen Three"
                    />
                    <div
                      className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group2452.png')",
                      }}
                    >
                      <Img
                        src="images/img_videocamera.svg"
                        className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                        alt="videocamera Five"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly mt-1 w-full">
                    <Img
                      src="images/img_rectangle14.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleFourteen"
                    />
                    <Img
                      src="images/img_rectangle12.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleTwelve"
                    />
                    <Img
                      src="images/img_rectangle13.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleThirteen"
                    />
                    <Img
                      src="images/img_rectangle14.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleSixteen"
                    />
                    <Img
                      src="images/img_rectangle12.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleFifteen"
                    />
                    <Img
                      src="images/img_rectangle13.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleEighteen"
                    />
                    <Img
                      src="images/img_rectangle14.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleTwenty"
                    />
                    <Img
                      src="images/img_rectangle12.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleNineteen"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start mt-20 w-full">
              <Text
                className="font-semibold text-black_900 text-left w-auto"
                as="h5"
                variant="h5"
              >
                A Month Ago
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                <Img
                  src="images/img_rectangle10.png"
                  className="h-[150px] md:h-auto object-cover w-[150px]"
                  alt="RectangleTen Four"
                />
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-start w-[150px]"
                  style={{ backgroundImage: "url('images/img_group2452.png')" }}
                >
                  <div className="bg-black_900_4c h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]">
                    <Img
                      src="images/img_videocamera.svg"
                      className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                      alt="videocamera Six"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_rectangle11.png"
                  className="h-[150px] md:h-auto object-cover w-[150px]"
                  alt="RectangleEleven Three"
                />
                <Img
                  src="images/img_rectangle10.png"
                  className="h-[150px] md:h-auto object-cover w-[150px]"
                  alt="RectangleTen Five"
                />
                <div
                  className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                  style={{ backgroundImage: "url('images/img_group2452.png')" }}
                >
                  <Img
                    src="images/img_videocamera.svg"
                    className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                    alt="videocamera Seven"
                  />
                </div>
                <Img
                  src="images/img_rectangle11.png"
                  className="h-[150px] md:h-auto object-cover w-[150px]"
                  alt="RectangleSeventeen One"
                />
                <Img
                  src="images/img_rectangle10.png"
                  className="h-[150px] md:h-auto object-cover w-[150px]"
                  alt="RectangleTen Six"
                />
                <div
                  className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                  style={{ backgroundImage: "url('images/img_group2452.png')" }}
                >
                  <Img
                    src="images/img_videocamera.svg"
                    className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                    alt="videocamera Eight"
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

export default SharePage;
