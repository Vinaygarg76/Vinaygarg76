import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Button, Input } from "components";

const PostCreationModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-auto !w-[46%]"
        overlayClassName="bg-gray_900_cc fixed flex h-full inset-y-[0] w-full"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
          <div className="bg-white_A700 flex flex-col gap-6 justify-center p-6 md:px-5 rounded-[12px] shadow-bs3 w-full">
            <div className="flex flex-row items-center justify-between md:ml-[0] ml-[238px] mt-[13px] w-[61%] md:w-full">
              <Text
                className="font-semibold text-black_901 text-left w-auto"
                as="h5"
                variant="h5"
              >
                Create Post
              </Text>
              <Img
                src="images/img_close_1.svg"
                className="common-pointer h-6 w-6"
                onClick={props.onRequestClose}
                alt="close"
              />
            </div>
            <div className="flex flex-col items-start justify-start mb-[7px] w-[97%] md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start pr-[3px] pt-[3px] w-[59%] md:w-full">
                <Img
                  src="images/img_profileimglarg.png"
                  className="h-[60px] md:h-auto mb-0.5 rounded-[50%] w-[60px]"
                  alt="ProfileImgLarg"
                />
                <div className="flex flex-col gap-2 items-start justify-start mt-1 w-[41%]">
                  <Text
                    className="font-semibold text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    Rose J. Henry
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-between w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[68px] w-auto"
                      leftIcon={
                        <Img
                          src="images/img_user_16X16.svg"
                          className="my-1.5 mx-1"
                          alt="user"
                        />
                      }
                      shape="RoundedBorder3"
                      size="md"
                      variant="OutlineBluegray300"
                    >
                      <div className="font-normal not-italic text-bluegray_300 text-left text-xs">
                        Friends
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[63px] w-auto"
                      leftIcon={
                        <Img
                          src="images/img_plus_16X16.svg"
                          className="my-1.5 mx-1"
                          alt="plus"
                        />
                      }
                      shape="RoundedBorder3"
                      size="md"
                      variant="OutlineBluegray300"
                    >
                      <div className="font-normal not-italic text-bluegray_300 text-left text-xs">
                        Album
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <Input
                wrapClassName="mt-[17px] w-full"
                className="font-medium p-0 placeholder:text-bluegray_300 text-base text-bluegray_300 text-left w-full"
                name="Group10719"
                placeholder="Say something about this post..."
                shape="RoundedBorder6"
                size="lg"
                variant="OutlineBluegray300"
              ></Input>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[279px] items-center justify-start mt-[17px] p-4 w-full"
                style={{ backgroundImage: "url('images/img_group10706.png')" }}
              >
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mb-[217px] w-[99%] md:w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[72px] w-auto"
                    leftIcon={
                      <Img
                        src="images/img_call_20X20.svg"
                        className="ml-[11px] mr-1 my-[5px]"
                        alt="call"
                      />
                    }
                    shape="RoundedBorder6"
                    size="lg"
                    variant="FillBlack90099"
                  >
                    <div className="font-bold text-left text-sm text-white_A700">
                      Edit
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[91px] ml-2 sm:ml-[0] w-auto"
                    leftIcon={
                      <Img
                        src="images/img_cut_20X20.svg"
                        className="ml-3 mr-1 my-[5px]"
                        alt="cut"
                      />
                    }
                    shape="RoundedBorder6"
                    size="lg"
                    variant="FillBlack90099"
                  >
                    <div className="font-bold text-left text-sm text-white_A700">
                      Effects
                    </div>
                  </Button>
                  <Img
                    src="images/img_close.svg"
                    className="h-6 sm:ml-[0] ml-[351px] w-6"
                    alt="close One"
                  />
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-4 pt-0.5 w-full">
                <div className="flex sm:flex-1 flex-row gap-2 items-center justify-start w-[24%] sm:w-full">
                  <Img
                    src="images/img_mail.svg"
                    className="h-6 w-6"
                    alt="mail"
                  />
                  <Text
                    className="font-semibold text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    Photo/Video
                  </Text>
                </div>
                <div className="flex sm:flex-1 flex-row gap-2 items-start justify-center w-[22%] sm:w-full">
                  <Img
                    src="images/img_offer.svg"
                    className="h-6 mb-0.5 w-6"
                    alt="offer"
                  />
                  <Text
                    className="font-semibold mt-1 text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    Tag People
                  </Text>
                </div>
                <div className="flex sm:flex-1 flex-row gap-2 items-center justify-start w-[24%] sm:w-full">
                  <Img
                    src="images/img_location_24X24.svg"
                    className="h-6 w-6"
                    alt="location"
                  />
                  <Text
                    className="font-semibold text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    Add location
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[586px] sm:min-w-full mt-10 text-base text-center text-white_A700 w-auto"
                shape="RoundedBorder6"
                size="5xl"
                variant="FillBlueA700"
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default PostCreationModal;
