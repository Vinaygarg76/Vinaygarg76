import React from "react";

import { Img, Input, Text, List } from "components";
import { CloseSVG } from "../../assets/images";

const MentionsTaggingPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy items-center justify-start mx-auto pb-[61px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                src="images/img_group10392_33.svg"
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
        <List
          className="flex-col gap-4 grid items-center md:px-5 w-[42%]"
          orientation="vertical"
        >
          <div className="bg-white_A700 flex flex-col items-center justify-end my-0 pt-[30px] sm:px-5 px-[30px] shadow-bs1 w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
              <Img
                src="images/img_profileimglarg_48X48.png"
                className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                alt="ProfileImgLarg One"
              />
              <Text
                className="font-semibold leading-[32.00px] ml-6 sm:ml-[0] sm:mt-0 mt-1 text-bluegray_900 text-left"
                as="h6"
                variant="h6"
              ></Text>
              <Img
                src="images/img_user.svg"
                className="h-6 sm:ml-[0] ml-[55px] sm:mt-0 mt-3 w-6"
                alt="user"
              />
            </div>
            <Img
              src="images/img_group106521.png"
              className="h-[410px] md:h-auto mt-6 object-cover w-full"
              alt="Group106521"
            />
            <div className="flex flex-row items-center justify-between mt-5 w-[85%] md:w-full">
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
            <div className="border border-bluegray_100 border-solid flex flex-row items-center justify-between mt-[9px] p-2 w-full">
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
          <div className="bg-white_A700 flex flex-col items-center justify-end my-0 pt-[30px] sm:px-5 px-[30px] shadow-bs1 w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
              <Img
                src="images/img_profileimglarg.png"
                className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                alt="ProfileImgLarg Two"
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
                alt="user One"
              />
            </div>
            <Text
              className="font-medium leading-[32.00px] mt-6 text-bluegray_900 text-left w-full"
              as="h6"
              variant="h6"
            ></Text>
            <div className="flex flex-row items-center justify-between mt-7 w-[85%] md:w-full">
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
            <div className="border border-bluegray_100 border-solid flex flex-row items-center justify-between mt-[9px] p-2 w-full">
              <div className="flex flex-row gap-2 items-center justify-center ml-[37px] w-[11%]">
                <Img
                  src="images/img_thumbsup.svg"
                  className="h-6 w-6"
                  alt="thumbsup One"
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
                  alt="volume One"
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
                  alt="reply One"
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
        </List>
      </div>
    </>
  );
};

export default MentionsTaggingPage;
