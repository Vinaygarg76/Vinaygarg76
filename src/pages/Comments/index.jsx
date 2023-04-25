import React from "react";

import { Img, Input, Text, List, Button } from "components";
import { CloseSVG } from "../../assets/images";

const CommentsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                src="images/img_group10392_12.svg"
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
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
            <Img
              src="images/img_profileimglarg_5.png"
              className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
              alt="ProfileImgLarg One"
            />
            <div className="flex sm:flex-1 flex-col items-start justify-start ml-6 sm:ml-[0] w-auto sm:w-full">
              <Text
                className="font-semibold text-bluegray_900 text-left w-auto"
                as="h6"
                variant="h6"
              >
                Rose J. Henry
              </Text>
              <Text
                className="font-normal mt-0.5 not-italic text-bluegray_400 text-left w-auto"
                variant="body2"
              >
                7 May at 19:18
              </Text>
            </div>
            <Img
              src="images/img_user.svg"
              className="h-6 sm:ml-[0] ml-[297px] w-6"
              alt="user"
            />
          </div>
          <Img
            src="images/img_group106521.png"
            className="h-[410px] md:h-auto mt-6 object-cover w-full"
            alt="Group106521"
          />
          <div className="flex flex-col gap-[9px] items-center justify-start mt-4 pt-1 w-full">
            <div className="flex flex-row items-center justify-between w-[85%] md:w-full">
              <Text
                className="font-medium text-bluegray_400 text-left w-auto"
                variant="body4"
              >
                109 Likes
              </Text>
              <Text
                className="font-medium text-bluegray_400 text-left w-auto"
                variant="body4"
              >
                03 Comment
              </Text>
              <Text
                className="font-medium text-bluegray_400 text-left w-auto"
                variant="body4"
              >
                2 Share
              </Text>
            </div>
            <div className="border border-bluegray_100 border-solid flex flex-row items-center justify-between p-2 w-full">
              <div className="flex flex-row gap-2 items-center justify-center ml-[37px] w-[11%]">
                <Img
                  src="images/img_thumbsup.svg"
                  className="h-6 w-6"
                  alt="thumbsup"
                />
                <Text
                  className="font-medium text-bluegray_400 text-left w-auto"
                  variant="body5"
                >
                  Like
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-[17%]">
                <Img
                  src="images/img_volume.svg"
                  className="h-6 w-6"
                  alt="volume"
                />
                <Text
                  className="font-medium text-bluegray_400 text-left w-auto"
                  variant="body5"
                >
                  Comment
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center mr-[23px] w-[13%]">
                <Img
                  src="images/img_reply.svg"
                  className="h-6 w-6"
                  alt="reply"
                />
                <Text
                  className="font-medium text-bluegray_400 text-left w-auto"
                  variant="body5"
                >
                  Share
                </Text>
              </div>
            </div>
          </div>
          <List
            className="flex-col gap-[34px] grid ml-4 md:ml-[0] mt-4 w-[36%]"
            orientation="vertical"
          >
            <div className="flex flex-row items-start justify-evenly w-full">
              <Img
                src="images/img_profileimglarg_4.png"
                className="h-8 md:h-auto rounded-[50%] w-8"
                alt="ProfileImgLarg Two"
              />
              <div className="flex flex-col items-center justify-start rounded-[10px] w-[82%]">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <div className="bg-bluegray_50 flex flex-col gap-3.5 items-start justify-end p-2.5 rounded-[10px] w-full">
                    <Text
                      className="font-bold md:ml-[0] ml-[5px] mt-1 text-bluegray_900 text-left w-auto"
                      variant="body4"
                    ></Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[5px] not-italic text-bluegray_400 text-left w-auto"
                      variant="body1"
                    >
                      Nice Pic
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start w-1/2 md:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body4"
                    >
                      Like
                    </Text>
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body4"
                    >
                      Reply
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start w-[85%] md:w-full">
              <Img
                src="images/img_profileimglarg.png"
                className="h-8 md:h-auto rounded-[50%] w-8"
                alt="ProfileImgLarg Three"
              />
              <div className="flex flex-col items-center justify-start ml-1 rounded-[10px] w-[78%]">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <div className="bg-blue_50 flex flex-col gap-[17px] items-start justify-end p-2.5 rounded-[10px] w-full">
                    <Text
                      className="font-bold md:ml-[0] ml-[5px] mt-[3px] text-bluegray_900 text-left w-auto"
                      variant="body4"
                    ></Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[5px] not-italic text-bluegray_400 text-left w-auto"
                      variant="body1"
                    >
                      Nice Pic
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start w-[61%] md:w-full">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body4"
                    >
                      Like
                    </Text>
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body4"
                    >
                      Reply
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </List>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mb-[9px] ml-4 md:ml-[0] mt-[27px] w-[98%] md:w-full">
            <Img
              src="images/img_profileimglarg.png"
              className="h-12 md:h-auto rounded-[50%] w-12"
              alt="ProfileImgLarg Four"
            />
            <Input
              wrapClassName="flex ml-2 sm:ml-[0] w-[78%] sm:w-full"
              className="font-medium p-0 placeholder:text-bluegray_400 text-bluegray_400 text-left text-sm w-full"
              name="Group9832"
              placeholder="Write a comment..."
              suffix={
                <Img
                  src="images/img_user_24X24.svg"
                  className="ml-[35px] mr-4 my-3.5"
                  alt="user"
                />
              }
              shape="RoundedBorder6"
              size="3xl"
              variant="OutlineBluegray100"
            ></Input>
            <Button
              className="flex h-12 items-center justify-center ml-4 sm:ml-[0] w-12"
              shape="icbRoundedBorder6"
              size="lgIcn"
              variant="icbOutlineBluegray100"
            >
              <Img src="images/img_send.svg" className="h-5" alt="send" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentsPage;
