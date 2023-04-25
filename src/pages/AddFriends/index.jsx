import React from "react";

import { Img, Text, Input, Button } from "components";
import { CloseSVG } from "../../assets/images";

const AddFriendsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto pt-[35px] sm:px-5 px-[35px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-2.5">
              <Img
                src="images/img_group10392_6.svg"
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
            <Img
              src="images/img_profileimglarg.png"
              className="h-14 md:h-auto sm:hidden md:ml-[0] ml-[392px] rounded-[50%] w-14"
              alt="ProfileImgLarg"
            />
          </div>
        </header>
        <div className="flex flex-col gap-8 items-center justify-end max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="font-semibold text-black_900 text-left w-auto"
              as="h5"
              variant="h5"
            >
              People you may know
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e)}
              wrapClassName="flex md:flex-1 w-auto md:w-full"
              className="font-medium p-0 placeholder:text-bluegray_200 text-base text-bluegray_200 text-left w-full"
              name="Group10337"
              placeholder="Search Friends"
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    className="mt-[17px] mb-[15px] cursor-pointer ml-[35px] mr-4"
                    onClick={() => setInputvalue("")}
                    fillColor="#bac1ce"
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                ) : (
                  <Img
                    src="images/img_search_blue_A200.svg"
                    className="mt-[17px] mb-[15px] cursor-pointer ml-[35px] mr-4"
                    alt="search"
                  />
                )
              }
              shape="srcRoundedBorder8"
              size="mdSrc"
              variant="srcOutlineBluegray300"
            ></Input>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  src="images/img_profileimglarg.png"
                  className="h-[228px] md:h-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                  alt="Rectangle1339"
                />
                <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-col items-start justify-end p-4 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <Text
                    className="font-semibold mt-[7px] text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    Rose J. Henry
                  </Text>
                  <Text
                    className="font-normal mt-[13px] not-italic text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start mt-[13px] rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg text-white_A700 w-auto"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBlueA700"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-bluegray_402 text-center text-lg w-auto"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBluegray100"
                    >
                      Add Friend
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat h-[228px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg.png')",
                  }}
                >
                  <Img
                    src="images/img_profileimglarg_50X50.png"
                    className="absolute h-[228px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                    alt="Rectangle1340"
                  />
                </div>
                <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-col items-start justify-end p-4 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <Text
                    className="font-semibold mt-[5px] text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    Kai Caudle
                  </Text>
                  <Text
                    className="font-normal mt-[19px] not-italic text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start mt-[13px] rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg text-white_A700 w-auto"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBlueA700"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-bluegray_402 text-center text-lg w-auto"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBluegray100"
                    >
                      Add Friend
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat h-[228px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg.png')",
                  }}
                >
                  <Img
                    src="images/img_rectangle1340.png"
                    className="absolute h-[228px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                    alt="Rectangle1340 One"
                  />
                </div>
                <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-col items-start justify-end p-4 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <Text
                    className="font-semibold mt-[7px] text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    Jane Cooper
                  </Text>
                  <Text
                    className="font-normal mt-[13px] not-italic text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start mt-[13px] rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg text-white_A700 w-auto"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBlueA700"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-bluegray_402 text-center text-lg w-auto"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBluegray100"
                    >
                      Add Friend
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat h-[228px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg.png')",
                  }}
                >
                  <Img
                    src="images/img_profileimglarg_2.png"
                    className="absolute h-[228px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                    alt="Rectangle1340 Two"
                  />
                </div>
                <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-col items-start justify-end p-4 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <Text
                    className="font-semibold mt-[5px] text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    Wade Warren
                  </Text>
                  <Text
                    className="font-normal mt-[18px] not-italic text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start mt-[13px] rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg text-white_A700 w-auto"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBlueA700"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-bluegray_402 text-center text-lg w-auto"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBluegray100"
                    >
                      Add Friend
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat h-[228px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg.png')",
                  }}
                >
                  <Img
                    src="images/img_profileimglarg_3.png"
                    className="absolute h-[228px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                    alt="Rectangle1340 Three"
                  />
                </div>
                <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-col items-start justify-end p-4 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <Text
                    className="font-semibold mt-[5px] text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    Leslie Alexander
                  </Text>
                  <Text
                    className="font-normal mt-[19px] not-italic text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start mt-[13px] rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg text-white_A700 w-auto"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBlueA700"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-bluegray_402 text-center text-lg w-auto"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBluegray100"
                    >
                      Add Friend
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat h-[228px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg.png')",
                  }}
                >
                  <Img
                    src="images/img_profileimglarg_4.png"
                    className="absolute h-[228px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                    alt="Rectangle1340 Four"
                  />
                </div>
                <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-col items-start justify-end p-4 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <Text
                    className="font-semibold mt-[7px] text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    Jenny Wilson
                  </Text>
                  <Text
                    className="font-normal mt-[13px] not-italic text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start mt-[13px] rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg text-white_A700 w-auto"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBlueA700"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-bluegray_402 text-center text-lg w-auto"
                      shape="RoundedBorder6"
                      size="sm"
                      variant="FillBluegray100"
                    >
                      Add Friend
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[228px] items-center justify-start rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg.png')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat h-[228px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                    style={{
                      backgroundImage:
                        "url('images/img_profileimglarg_50X50.png')",
                    }}
                  >
                    <Img
                      src="images/img_rectangle1341.png"
                      className="absolute h-[228px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                      alt="Rectangle1341"
                    />
                  </div>
                </div>
                <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-col items-start justify-end p-4 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <Text
                    className="font-semibold mt-[5px] text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    Robert Fox
                  </Text>
                  <Text
                    className="font-normal mt-[18px] not-italic text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start mt-[13px] rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg text-white_A700 w-auto"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBlueA700"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-bluegray_402 text-center text-lg w-auto"
                      shape="RoundedBorder6"
                      size="sm"
                      variant="FillBluegray100"
                    >
                      Add Friend
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[228px] items-center justify-start rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg.png')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat h-[228px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                    style={{
                      backgroundImage: "url('images/img_rectangle1340.png')",
                    }}
                  >
                    <Img
                      src="images/img_rectangle1341_228X228.png"
                      className="absolute h-[228px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                      alt="Rectangle1341 One"
                    />
                  </div>
                </div>
                <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-col items-start justify-end p-4 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <Text
                    className="font-semibold mt-[7px] text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    Jane Cooper
                  </Text>
                  <Text
                    className="font-normal mt-[13px] not-italic text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start mt-[13px] rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg text-white_A700 w-auto"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBlueA700"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-bluegray_402 text-center text-lg w-auto"
                      shape="RoundedBorder6"
                      size="sm"
                      variant="FillBluegray100"
                    >
                      Add Friend
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[228px] items-center justify-start rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg.png')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat h-[228px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                    style={{
                      backgroundImage: "url('images/img_profileimglarg_2.png')",
                    }}
                  >
                    <Img
                      src="images/img_rectangle1341_1.png"
                      className="absolute h-[228px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                      alt="Rectangle1341 Two"
                    />
                  </div>
                </div>
                <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-col items-start justify-end p-4 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <Text
                    className="font-semibold mt-[5px] text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    Jacob Jones
                  </Text>
                  <Text
                    className="font-normal mt-[18px] not-italic text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start mt-[13px] rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg text-white_A700 w-auto"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBlueA700"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-bluegray_402 text-center text-lg w-auto"
                      shape="RoundedBorder6"
                      size="sm"
                      variant="FillBluegray100"
                    >
                      Add Friend
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[228px] items-center justify-start rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                  style={{
                    backgroundImage: "url('images/img_profileimglarg.png')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat h-[228px] relative rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                    style={{
                      backgroundImage: "url('images/img_profileimglarg_3.png')",
                    }}
                  >
                    <Img
                      src="images/img_rectangle1341_2.png"
                      className="absolute h-[228px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md w-[228px]"
                      alt="Rectangle1341 Three"
                    />
                  </div>
                </div>
                <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-col items-start justify-end p-4 rounded-bl-md rounded-br-md rounded-tl-none rounded-tr-none w-full">
                  <Text
                    className="font-semibold mt-[5px] text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    Devon Lane
                  </Text>
                  <Text
                    className="font-normal mt-[18px] not-italic text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    12 Mutual friends
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start mt-[13px] rounded-md w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-center text-lg text-white_A700 w-auto"
                      shape="RoundedBorder6"
                      size="2xl"
                      variant="FillBlueA700"
                    >
                      Add Friend
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[196px] text-bluegray_402 text-center text-lg w-auto"
                      shape="RoundedBorder6"
                      size="sm"
                      variant="FillBluegray100"
                    >
                      Add Friend
                    </Button>
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

export default AddFriendsPage;
