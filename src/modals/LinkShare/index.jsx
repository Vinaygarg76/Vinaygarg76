import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Line, List, Input } from "components";

const LinkShareModal = (props) => {
  function handleNavigate() {
    window.location.href = "https://accounts.google.com/";
  }
  function handleNavigate1() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-auto !w-[41%]"
        overlayClassName="bg-gray_900_cc fixed flex h-full inset-y-[0] w-full"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start md:px-5 py-[15px] rounded-[12px] shadow-bs3 w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-[92%] md:w-full">
              <Text
                className="font-semibold mt-1 text-bluegray_900 text-left w-auto"
                variant="body2"
              >
                Share this wth your social community
              </Text>
              <Img
                src="images/img_close_24X24.svg"
                className="common-pointer h-6 w-6"
                onClick={props.onRequestClose}
                alt="close"
              />
            </div>
            <Line className="bg-bluegray_100 h-px mt-3.5 w-full" />
            <div className="flex flex-col items-start justify-start mb-[17px] mt-[31px] w-[79%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                <List
                  className="sm:flex-1 sm:flex-col flex-row gap-5 grid grid-cols-2 w-[48%] sm:w-full"
                  orientation="horizontal"
                >
                  <div className="border-[0.5px] border-blue_A100 border-solid flex flex-col gap-3.5 h-[100px] items-center justify-start sm:ml-[0] p-[17px] rounded w-full">
                    <Img
                      src="images/img_facebook_80X80.svg"
                      className="h-10 w-10"
                      alt="facebook"
                    />
                    <Text
                      className="mb-0.5 text-black_900 text-left w-auto"
                      as="h1"
                      variant="h1"
                    >
                      Facebook
                    </Text>
                  </div>
                  <div className="border-[0.5px] border-blue_A100 border-solid flex flex-col gap-[15px] h-[100px] items-center justify-start sm:ml-[0] p-[17px] rounded w-full">
                    <Img
                      src="images/img_instagrampng.png"
                      className="h-10 md:h-auto object-cover w-10"
                      alt="Instagrampng"
                    />
                    <Text
                      className="text-black_900 text-left w-auto"
                      as="h1"
                      variant="h1"
                    >
                      Instagram
                    </Text>
                  </div>
                </List>
                <div className="border-[0.5px] border-blue_A100 border-solid flex flex-col gap-[15px] h-[100px] items-center justify-start p-[17px] rounded w-[100px]">
                  <Img
                    src="images/img_google.svg"
                    className="common-pointer h-10 w-10"
                    onClick={handleNavigate}
                    alt="google"
                  />
                  <Text
                    className="text-black_900 text-left w-auto"
                    as="h1"
                    variant="h1"
                  >
                    Google
                  </Text>
                </div>
                <div className="border-[0.5px] border-blue_A100 border-solid flex flex-col gap-3.5 h-[100px] items-center justify-start p-[17px] rounded w-[100px]">
                  <div className="bg-blue_500 h-10 md:h-5 p-[7px] relative rounded-[5px] w-10">
                    <Img
                      src="images/img_twitter_80X80.svg"
                      className="common-pointer absolute h-5 inset-[0] justify-center m-auto w-3/5"
                      onClick={handleNavigate1}
                      alt="twitter"
                    />
                  </div>
                  <Text
                    className="mb-0.5 text-black_900 text-left w-auto"
                    as="h1"
                    variant="h1"
                  >
                    Twitter
                  </Text>
                </div>
              </div>
              <Text
                className="font-semibold md:ml-[0] ml-[3px] mt-[29px] text-bluegray_700 text-left w-auto"
                variant="body2"
              >
                Or copy link
              </Text>
              <Input
                wrapClassName="flex mt-2 w-full"
                className="font-medium p-0 placeholder:text-bluegray_200 text-base text-bluegray_200 text-left w-full"
                name="weburl"
                placeholder="https://www.figma.com/file/NlfVhYygR9mAQa"
                suffix={
                  <Img
                    src="images/img_file.svg"
                    className="ml-[35px] mr-3 my-3"
                    alt="file"
                  />
                }
                shape="RoundedBorder6"
                size="md"
                variant="OutlineBluegray100"
              ></Input>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default LinkShareModal;
