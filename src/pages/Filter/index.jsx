import React from "react";

import { Img, Input, Text, Line, Button, SeekBar, CheckBox } from "components";
import { CloseSVG } from "../../assets/images";

const FilterPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[95%]">
              <Img
                src="images/img_group10392_1.svg"
                className="h-[35px] w-auto"
                alt="Group10392"
              />
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e)}
                wrapClassName="flex md:mt-0 my-0.5 w-auto md:w-full"
                className="font-medium p-0 placeholder:text-bluegray_200 text-base text-bluegray_200 text-left w-full"
                name="Group10270"
                placeholder="Search"
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      className="mt-4 mb-[15px] cursor-pointer ml-[35px] mr-4"
                      onClick={() => setInputvalue("")}
                      fillColor="#bac1ce"
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  ) : (
                    <Img
                      src="images/img_search.svg"
                      className="mt-4 mb-[15px] cursor-pointer ml-[35px] mr-4"
                      alt="search"
                    />
                  )
                }
                shape="srcRoundedBorder8"
                size="mdSrc"
                variant="srcOutlineBluegray300"
              ></Input>
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-center w-auto md:w-full">
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
              <Img
                src="images/img_profileimglarg.png"
                className="h-14 md:h-auto rounded-[50%] w-14"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between max-w-[1410px] mx-auto md:px-5 w-full">
          <aside className="flex flex-col md:hidden justify-start w-[300px]">
            <div className="bg-white_A700 flex flex-col items-center justify-start py-4 w-full">
              <div className="flex flex-row items-center justify-between w-[84%] md:w-full">
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Img
                    src="images/img_filter.svg"
                    className="h-5 w-5"
                    alt="filter"
                  />
                  <Text
                    className="font-semibold text-bluegray_900 text-left w-auto"
                    variant="body2"
                  >
                    Filter
                  </Text>
                </div>
                <Img
                  src="images/img_rewind.svg"
                  className="h-6 w-6"
                  alt="rewind"
                />
              </div>
              <Line className="bg-bluegray_50 h-px mt-4 w-full" />
              <div className="flex flex-col gap-6 items-center justify-start mb-[209px] mt-[23px] w-[84%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="font-semibold mt-1 text-bluegray_900 text-left w-auto"
                      variant="body2"
                    >
                      Select Type
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="h-6 w-6"
                      alt="arrowup"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start rounded-[5px] w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-3/4 md:w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[71px] text-base text-center text-white_A700 w-auto"
                          shape="RoundedBorder6"
                          size="2xl"
                          variant="FillBlueA700"
                        >
                          Design
                        </Button>
                        <Button
                          className="cursor-pointer font-medium min-w-[82px] text-base text-bluegray_402 text-center w-auto"
                          shape="RoundedBorder6"
                          size="2xl"
                          variant="OutlineBluegray402"
                        >
                          Business
                        </Button>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-between w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[94px] text-base text-bluegray_400 text-center w-auto"
                          shape="RoundedBorder6"
                          size="2xl"
                          variant="OutlineBluegray402"
                        >
                          Marketing
                        </Button>
                        <Button
                          className="cursor-pointer font-medium min-w-[118px] text-base text-bluegray_400 text-center w-auto"
                          shape="RoundedBorder6"
                          size="2xl"
                          variant="OutlineBluegray402"
                        >
                          IT & Software
                        </Button>
                      </div>
                      <Button
                        className="cursor-pointer font-medium min-w-[120px] text-base text-bluegray_400 text-center w-auto"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="OutlineBluegray402"
                      >
                        Development
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[181px] text-base text-bluegray_400 text-center w-auto"
                        shape="RoundedBorder6"
                        size="2xl"
                        variant="OutlineBluegray402"
                      >
                        Finance & Accounting
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="font-semibold mt-1 text-bluegray_900 text-left w-auto"
                      variant="body2"
                    >
                      Select Type
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="h-6 w-6"
                      alt="arrowup One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[7px] justify-start py-1 rounded-[36.5px] w-full">
                      <div className="flex flex-row items-center justify-between ml-auto w-[69%] md:w-full">
                        <Text
                          className="font-semibold text-blue_A700 text-left w-auto"
                          variant="body4"
                        >
                          $100
                        </Text>
                        <Text
                          className="font-semibold text-blue_A700 text-left w-auto"
                          variant="body4"
                        >
                          $500
                        </Text>
                      </div>
                      <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                        <SeekBar
                          inputValue={[0, 0]}
                          trackColors={["#e0ebff", "#0061ff", "#e0ebff"]}
                          thumbClassName="h-6 border-blue_A700 border-2 border-solid bg-gray_54 w-6 flex rounded-[50%] justify-center items-center"
                          className="flex h-6 rounded w-full"
                          trackClassName="h-1.5 flex rounded w-full"
                        />{" "}
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="font-medium text-bluegray_300 text-left w-auto"
                            variant="body5"
                          >
                            Min
                          </Text>
                          <Text
                            className="font-medium text-bluegray_300 text-left w-auto"
                            variant="body5"
                          >
                            Max
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="font-semibold mt-1 text-bluegray_900 text-left w-auto"
                      variant="body2"
                    >
                      Select Type
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="h-6 w-6"
                      alt="arrowup Two"
                    />
                  </div>
                  <CheckBox
                    className="font-medium text-base text-bluegray_400 text-left"
                    inputClassName="h-5 mr-[5px] w-5"
                    name="Category"
                    id="Category"
                    label="Category"
                    shape="RoundedBorder2"
                    size="sm"
                    variant="FillBlueA700"
                  ></CheckBox>
                  <CheckBox
                    className="font-medium text-base text-bluegray_400 text-left"
                    inputClassName="h-5 mr-[5px] w-5"
                    name="CategoryOne"
                    id="CategoryOne"
                    label="Category 1"
                    shape="RoundedBorder2"
                    size="sm"
                    variant="FillBlueA700"
                  ></CheckBox>
                  <CheckBox
                    className="font-medium text-base text-bluegray_400 text-left"
                    inputClassName="h-5 mr-[5px] w-5"
                    name="CategoryTwo"
                    id="CategoryTwo"
                    label="Category 2"
                    shape="RoundedBorder2"
                    size="sm"
                    variant="FillBlueA700"
                  ></CheckBox>
                  <CheckBox
                    className="font-medium text-base text-bluegray_400 text-left"
                    inputClassName="h-5 mr-[5px] w-5"
                    name="CategoryThree"
                    id="CategoryThree"
                    label="Category 3"
                    shape="RoundedBorder2"
                    size="sm"
                    variant="FillBlueA700"
                  ></CheckBox>
                  <CheckBox
                    className="font-medium text-base text-bluegray_400 text-left"
                    inputClassName="h-5 mr-[5px] w-5"
                    name="CategoryFour"
                    id="CategoryFour"
                    label="Category 4"
                    shape="RoundedBorder2"
                    size="sm"
                    variant="FillBlueA700"
                  ></CheckBox>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle1336.png"
                  className="h-[200px] md:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                  alt="Rectangle1336"
                />
                <div className="bg-white_A700 flex flex-col items-start justify-start p-3.5 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start mb-1.5 w-auto md:w-full">
                    <Text
                      className="font-medium text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Ui/Ux Design
                    </Text>
                    <Text
                      className="font-semibold text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $120
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat h-[200px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                  style={{
                    backgroundImage: "url('images/img_rectangle1336.png')",
                  }}
                >
                  <Img
                    src="images/img_rectangle1337.png"
                    className="absolute h-[200px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                    alt="Rectangle1337"
                  />
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-start p-3.5 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start mb-1.5 w-auto md:w-full">
                    <Text
                      className="font-medium text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Ui/Ux Design
                    </Text>
                    <Text
                      className="font-semibold text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $120
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat h-[200px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                  style={{
                    backgroundImage: "url('images/img_rectangle1336.png')",
                  }}
                >
                  <Img
                    src="images/img_rectangle1337_200X258.png"
                    className="absolute h-[200px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                    alt="Rectangle1337 One"
                  />
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-start p-3.5 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start mb-1.5 w-auto md:w-full">
                    <Text
                      className="font-medium text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Ui/Ux Design
                    </Text>
                    <Text
                      className="font-semibold text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $120
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat h-[200px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                  style={{
                    backgroundImage: "url('images/img_rectangle1336.png')",
                  }}
                >
                  <Img
                    src="images/img_rectangle1337_1.png"
                    className="absolute h-[200px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                    alt="Rectangle1337 Two"
                  />
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-start p-3.5 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start mb-1.5 w-auto md:w-full">
                    <Text
                      className="font-medium text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Ui/Ux Design
                    </Text>
                    <Text
                      className="font-semibold text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $120
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat h-[200px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                  style={{
                    backgroundImage: "url('images/img_rectangle1336.png')",
                  }}
                >
                  <Img
                    src="images/img_rectangle1337_2.png"
                    className="absolute h-[200px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                    alt="Rectangle1337 Three"
                  />
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-start p-3.5 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start mb-1.5 w-auto md:w-full">
                    <Text
                      className="font-medium text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Ui/Ux Design
                    </Text>
                    <Text
                      className="font-semibold text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $120
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[200px] items-center justify-start rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                  style={{
                    backgroundImage: "url('images/img_rectangle1336.png')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat h-[200px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                    style={{
                      backgroundImage: "url('images/img_rectangle1337.png')",
                    }}
                  >
                    <Img
                      src="images/img_rectangle1338.png"
                      className="absolute h-[200px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                      alt="Rectangle1338"
                    />
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-start p-3.5 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start mb-1.5 w-auto md:w-full">
                    <Text
                      className="font-medium text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Ui/Ux Design
                    </Text>
                    <Text
                      className="font-semibold text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $120
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[200px] items-center justify-start rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                  style={{
                    backgroundImage: "url('images/img_rectangle1336.png')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat h-[200px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                    style={{
                      backgroundImage:
                        "url('images/img_rectangle1337_200X258.png')",
                    }}
                  >
                    <Img
                      src="images/img_rectangle1338_200X258.png"
                      className="absolute h-[200px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                      alt="Rectangle1338 One"
                    />
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-start p-3.5 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start mb-1.5 w-auto md:w-full">
                    <Text
                      className="font-medium text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Ui/Ux Design
                    </Text>
                    <Text
                      className="font-semibold text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $120
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[200px] items-center justify-start rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                  style={{
                    backgroundImage: "url('images/img_rectangle1336.png')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat h-[200px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                    style={{
                      backgroundImage: "url('images/img_rectangle1337_1.png')",
                    }}
                  >
                    <Img
                      src="images/img_rectangle1338_1.png"
                      className="absolute h-[200px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                      alt="Rectangle1338 Two"
                    />
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-start p-3.5 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start mb-1.5 w-auto md:w-full">
                    <Text
                      className="font-medium text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Ui/Ux Design
                    </Text>
                    <Text
                      className="font-semibold text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $120
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[200px] items-center justify-start rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                  style={{
                    backgroundImage: "url('images/img_rectangle1336.png')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat h-[200px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                    style={{
                      backgroundImage: "url('images/img_rectangle1337_2.png')",
                    }}
                  >
                    <Img
                      src="images/img_rectangle1338_2.png"
                      className="absolute h-[200px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                      alt="Rectangle1338 Three"
                    />
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-start p-3.5 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start mb-1.5 w-auto md:w-full">
                    <Text
                      className="font-medium text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Ui/Ux Design
                    </Text>
                    <Text
                      className="font-semibold text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $120
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[200px] items-center justify-start rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                  style={{
                    backgroundImage: "url('images/img_rectangle1336.png')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[200px] items-center justify-start rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                    style={{
                      backgroundImage: "url('images/img_rectangle1337.png')",
                    }}
                  >
                    <div
                      className="bg-cover bg-no-repeat h-[200px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                      style={{
                        backgroundImage: "url('images/img_rectangle1338.png')",
                      }}
                    >
                      <Img
                        src="images/img_rectangle1339.png"
                        className="absolute h-[200px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                        alt="Rectangle1339"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-start p-3.5 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start mb-1.5 w-auto md:w-full">
                    <Text
                      className="font-medium text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Ui/Ux Design
                    </Text>
                    <Text
                      className="font-semibold text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $120
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[200px] items-center justify-start rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                  style={{
                    backgroundImage: "url('images/img_rectangle1336.png')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[200px] items-center justify-start rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                    style={{
                      backgroundImage:
                        "url('images/img_rectangle1337_200X258.png')",
                    }}
                  >
                    <div
                      className="bg-cover bg-no-repeat h-[200px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_rectangle1338_200X258.png')",
                      }}
                    >
                      <Img
                        src="images/img_rectangle1339_200X258.png"
                        className="absolute h-[200px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                        alt="Rectangle1339 One"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-start p-3.5 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start mb-1.5 w-auto md:w-full">
                    <Text
                      className="font-medium text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Ui/Ux Design
                    </Text>
                    <Text
                      className="font-semibold text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $120
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[200px] items-center justify-start rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                  style={{
                    backgroundImage: "url('images/img_rectangle1336.png')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[200px] items-center justify-start rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                    style={{
                      backgroundImage: "url('images/img_rectangle1337_1.png')",
                    }}
                  >
                    <div
                      className="bg-cover bg-no-repeat h-[200px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_rectangle1338_1.png')",
                      }}
                    >
                      <Img
                        src="images/img_rectangle1339_1.png"
                        className="absolute h-[200px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-full"
                        alt="Rectangle1339 Two"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-start p-3.5 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start mb-1.5 w-auto md:w-full">
                    <Text
                      className="font-medium text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Ui/Ux Design
                    </Text>
                    <Text
                      className="font-semibold text-blue_A700 text-left w-auto"
                      variant="body1"
                    >
                      $120
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPage;
