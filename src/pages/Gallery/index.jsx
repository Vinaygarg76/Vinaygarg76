import React from "react";

import { Img, List, Text, Button } from "components";

const GalleryPage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto pt-[35px] sm:px-5 px-[35px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group_1.svg"
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
              <List
                className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[62%] sm:w-full"
                orientation="horizontal"
              >
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
              </List>
              <Text
                className="font-medium text-gray_903 text-left w-auto"
                variant="body2"
              >
                Request a demo
              </Text>
            </div>
            <div className="flex flex-row gap-6 sm:hidden items-center justify-start md:ml-[0] ml-[220px] self-stretch w-auto">
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
        <div className="flex flex-col gap-[37px] items-center justify-end max-w-[1268px] mx-auto pt-0.5 md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-end justify-between rounded-lg w-full">
            <Text
              className="font-semibold mt-2.5 text-black_900 text-left w-auto"
              as="h3"
              variant="h3"
            >
              Gallery
            </Text>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[95px] pl-2.5 w-auto"
              leftIcon={
                <Img
                  src="images/img_filter_24X24.svg"
                  className="my-3 mx-2.5"
                  alt="filter"
                />
              }
              shape="RoundedBorder10"
              size="4xl"
              variant="FillBlueA700"
            >
              <div className="font-semibold text-left text-lg text-white_A700">
                Filter
              </div>
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
                  <Img
                    src="images/img_group2448.png"
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    alt="RectangleTwelve"
                  />
                  <Img
                    src="images/img_group2446.png"
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    alt="RectangleTen One"
                  />
                  <Img
                    src="images/img_group2447.png"
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    alt="RectangleEleven One"
                  />
                  <Img
                    src="images/img_group2448.png"
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    alt="RectangleTwelve One"
                  />
                  <Img
                    src="images/img_group2447.png"
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    alt="RectangleEleven Two"
                  />
                  <Img
                    src="images/img_group2448.png"
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    alt="RectangleTwelve Two"
                  />
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
                      alt="RectangleTen Two"
                    />
                    <Img
                      src="images/img_group2452.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleTen Three"
                    />
                    <Img
                      src="images/img_rectangle11.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleEleven Three"
                    />
                    <Img
                      src="images/img_rectangle10.png"
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      alt="RectangleTen Four"
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
                        alt="videocamera"
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
                      alt="RectangleTen Five"
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
                        alt="videocamera One"
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
                      alt="RectangleTwelve Three"
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
                  alt="RectangleTen Six"
                />
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-start w-[150px]"
                  style={{ backgroundImage: "url('images/img_group2452.png')" }}
                >
                  <div className="bg-black_900_4c h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]">
                    <Img
                      src="images/img_videocamera.svg"
                      className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                      alt="videocamera Two"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_rectangle11.png"
                  className="h-[150px] md:h-auto object-cover w-[150px]"
                  alt="RectangleEleven Four"
                />
                <Img
                  src="images/img_rectangle10.png"
                  className="h-[150px] md:h-auto object-cover w-[150px]"
                  alt="RectangleTen Seven"
                />
                <div
                  className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                  style={{ backgroundImage: "url('images/img_group2452.png')" }}
                >
                  <Img
                    src="images/img_videocamera.svg"
                    className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                    alt="videocamera Three"
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
                  alt="RectangleTen Eight"
                />
                <div
                  className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                  style={{ backgroundImage: "url('images/img_group2452.png')" }}
                >
                  <Img
                    src="images/img_videocamera.svg"
                    className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                    alt="videocamera Four"
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

export default GalleryPage;
