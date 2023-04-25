import React from "react";

import { Img, Input, Text, List, Button } from "components";
import { CloseSVG } from "../../assets/images";

const ActivityFeedPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                src="images/img_group10392_5.svg"
                className="h-[35px] w-[13%]"
                alt="Group10392"
              />
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e)}
                wrapClassName="flex md:ml-[0] ml-[60px] md:mt-0 my-0.5 w-2/5 md:w-full"
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
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-center md:ml-[0] ml-[61px] w-[30%] md:w-full">
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
                className="h-14 md:h-auto md:ml-[0] ml-[61px] rounded-[50%] w-14"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div className="bg-white_A700 flex flex-col items-start justify-start p-[30px] md:px-5 shadow-bs1 w-[42%] md:w-full">
          <div className="flex flex-row items-start justify-between w-[64%] md:w-full">
            <Img
              src="images/img_arrowleft_bluegray_900.svg"
              className="h-6 w-6"
              alt="arrowleft"
            />
            <Text
              className="font-semibold mt-0.5 text-bluegray_900 text-left w-auto"
              as="h5"
              variant="h5"
            >
              Activity Feed
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start mt-[42px] w-full">
            <Text
              className="font-medium text-bluegray_900 text-left w-auto"
              as="h5"
              variant="h5"
            >
              Today
            </Text>
            <List
              className="flex-col gap-6 grid items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                <div className="h-[72px] relative w-[72px]">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="h-[72px] m-auto rounded-[50%] w-[72px]"
                    alt="ProfileImgLarg One"
                  />
                  <Button
                    className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] w-6"
                    shape="icbCircleBorder10"
                    size="smIcn"
                    variant="icbFillRed400"
                  >
                    <Img
                      src="images/img_notification.svg"
                      className=""
                      alt="notification"
                    />
                  </Button>
                </div>
                <Text
                  className="sm:flex-1 font-medium leading-[29.00px] ml-4 sm:ml-[0] text-bluegray_900 text-left w-[54%] sm:w-full"
                  variant="body1"
                ></Text>
                <Img
                  src="images/img_rectangle14.png"
                  className="sm:flex-1 h-[72px] md:h-auto sm:ml-[0] ml-[114px] object-cover w-[10%] sm:w-full"
                  alt="ProfileImgLarg One"
                />
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                <div className="h-[72px] relative w-[72px]">
                  <Img
                    src="images/img_profileimglarg_6.png"
                    className="h-[72px] m-auto rounded-[50%] w-[72px]"
                    alt="ProfileImgLarg Two"
                  />
                  <Button
                    className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] w-6"
                    shape="icbCircleBorder10"
                    size="smIcn"
                    variant="icbFillRed400"
                  >
                    <Img
                      src="images/img_notification.svg"
                      className=""
                      alt="notification One"
                    />
                  </Button>
                </div>
                <Text
                  className="sm:flex-1 font-medium leading-[29.00px] ml-4 sm:ml-[0] text-bluegray_900 text-left w-[54%] sm:w-full"
                  variant="body1"
                ></Text>
                <Img
                  src="images/img_rectangle14.png"
                  className="sm:flex-1 h-[72px] md:h-auto sm:ml-[0] ml-[114px] object-cover w-[10%] sm:w-full"
                  alt="ProfileImgLarg One One"
                />
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-[31px] items-start justify-start mb-[177px] mt-[31px] w-full">
            <Text
              className="font-medium text-bluegray_900 text-left w-auto"
              as="h5"
              variant="h5"
            >
              This Month
            </Text>
            <List
              className="flex-col gap-6 grid items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                <div className="h-[72px] relative w-[72px]">
                  <Img
                    src="images/img_profileimglarg_72X72.png"
                    className="h-[72px] m-auto rounded-[50%] w-[72px]"
                    alt="ProfileImgLarg Three"
                  />
                  <Button
                    className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] w-6"
                    shape="icbCircleBorder10"
                    size="smIcn"
                    variant="icbFillBlueA201"
                  >
                    <Img
                      src="images/img_videocamera.svg"
                      className=""
                      alt="videocamera"
                    />
                  </Button>
                </div>
                <Text
                  className="sm:flex-1 font-medium leading-[29.00px] ml-4 sm:ml-[0] text-bluegray_900 text-left w-[54%] sm:w-full"
                  variant="body1"
                ></Text>
                <Img
                  src="images/img_user.svg"
                  className="h-6 sm:ml-[0] ml-[142px] w-6"
                  alt="user"
                />
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                <div className="h-[72px] relative w-[72px]">
                  <Img
                    src="images/img_profileimglarg_50X50.png"
                    className="h-[72px] m-auto rounded-[50%] w-[72px]"
                    alt="ProfileImgLarg Four"
                  />
                  <Button
                    className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] w-6"
                    shape="icbCircleBorder10"
                    size="smIcn"
                    variant="icbFillBlueA201"
                  >
                    <Img
                      src="images/img_videocamera.svg"
                      className=""
                      alt="videocamera One"
                    />
                  </Button>
                </div>
                <Text
                  className="sm:flex-1 font-medium leading-[29.00px] ml-4 sm:ml-[0] text-bluegray_900 text-left w-[54%] sm:w-full"
                  variant="body1"
                ></Text>
                <Img
                  src="images/img_user.svg"
                  className="h-6 sm:ml-[0] ml-[142px] w-6"
                  alt="user One"
                />
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                <div className="h-[72px] relative w-[72px]">
                  <Img
                    src="images/img_profileimglarg_6.png"
                    className="h-[72px] m-auto rounded-[50%] w-[72px]"
                    alt="ProfileImgLarg Five"
                  />
                  <Button
                    className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] w-6"
                    shape="icbCircleBorder10"
                    size="smIcn"
                    variant="icbFillRed400"
                  >
                    <Img
                      src="images/img_notification.svg"
                      className=""
                      alt="notification Two"
                    />
                  </Button>
                </div>
                <Text
                  className="sm:flex-1 font-medium leading-[29.00px] ml-4 sm:ml-[0] text-bluegray_900 text-left w-[54%] sm:w-full"
                  variant="body1"
                ></Text>
                <Img
                  src="images/img_rectangle12.png"
                  className="sm:flex-1 h-[72px] md:h-auto sm:ml-[0] ml-[114px] object-cover w-[10%] sm:w-full"
                  alt="ProfileImgLarg One Two"
                />
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                <div className="h-[72px] relative w-[72px]">
                  <Img
                    src="images/img_profileimglarg_5.png"
                    className="h-[72px] m-auto rounded-[50%] w-[72px]"
                    alt="ProfileImgLarg Six"
                  />
                  <Button
                    className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] w-6"
                    shape="icbCircleBorder10"
                    size="smIcn"
                    variant="icbFillBlueA201"
                  >
                    <Img
                      src="images/img_videocamera.svg"
                      className=""
                      alt="videocamera Two"
                    />
                  </Button>
                </div>
                <Text
                  className="sm:flex-1 font-medium leading-[29.00px] ml-4 sm:ml-[0] text-bluegray_900 text-left w-[54%] sm:w-full"
                  variant="body1"
                ></Text>
                <Img
                  src="images/img_user.svg"
                  className="h-6 sm:ml-[0] ml-[142px] w-6"
                  alt="user Two"
                />
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityFeedPage;
