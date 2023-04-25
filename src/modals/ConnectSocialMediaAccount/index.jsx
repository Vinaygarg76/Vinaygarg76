import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Line, List, Button } from "components";

const ConnectSocialMediaAccountModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-auto !w-[41%]"
        overlayClassName="bg-gray_900_cc fixed flex h-full inset-y-[0] w-full"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
          <div className="bg-white_A700 flex flex-col gap-[49px] items-center justify-start md:px-5 py-[17px] rounded-[12px] shadow-bs3 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <div className="flex flex-row sm:gap-10 items-start justify-between w-[92%] md:w-full">
                  <Text
                    className="font-semibold mt-[3px] text-bluegray_900 text-left w-auto"
                    variant="body2"
                  >
                    Select network to connect
                  </Text>
                  <Img
                    src="images/img_close_24X24.svg"
                    className="common-pointer h-6 w-6"
                    onClick={props.onRequestClose}
                    alt="close"
                  />
                </div>
                <Line className="bg-bluegray_100 h-px w-full" />
              </div>
            </div>
            <List
              className="flex-col gap-10 grid h-[440px] items-center mb-9 w-[440px]"
              orientation="vertical"
            >
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="border border-blue_A100 border-solid flex flex-col h-[200px] items-center justify-start p-[34px] sm:px-5 rounded-lg w-[200px]">
                  <div className="flex flex-col gap-[29px] items-start justify-start mb-1 w-[65%] md:w-full">
                    <Img
                      src="images/img_facebook_80X80.svg"
                      className="h-20 w-20"
                      alt="facebook"
                    />
                    <Text
                      className="font-semibold ml-0.5 md:ml-[0] text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Facebook
                    </Text>
                  </div>
                </div>
                <div className="border border-blue_A100 border-solid flex flex-col h-[200px] items-center justify-end p-[33px] sm:px-5 rounded-lg w-[200px]">
                  <div className="flex flex-col gap-[31px] items-center justify-start w-[64%] md:w-full">
                    <Img
                      src="images/img_instagrampng.png"
                      className="h-20 md:h-auto object-cover w-20"
                      alt="Instagrampng"
                    />
                    <Text
                      className="font-semibold text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Instagram
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="border border-blue_A100 border-solid flex flex-col h-[200px] items-center justify-start p-[34px] sm:px-5 rounded-lg w-[200px]">
                  <div className="flex flex-col gap-[29px] items-center justify-start mb-1 w-[61%] md:w-full">
                    <Button
                      className="flex h-20 items-center justify-center w-20"
                      shape="icbCircleBorder10"
                      size="xlIcn"
                      variant="icbFillBlue500"
                    >
                      <Img
                        src="images/img_twitter_80X80.svg"
                        className=""
                        alt="twitter"
                      />
                    </Button>
                    <Text
                      className="font-semibold text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Twitter
                    </Text>
                  </div>
                </div>
                <div className="border border-blue_A100 border-solid flex flex-col h-[200px] items-center justify-end p-[33px] sm:px-5 rounded-lg w-[200px]">
                  <div className="flex flex-col gap-[31px] items-center justify-start w-3/5 md:w-full">
                    <Img
                      src="images/img_google.svg"
                      className="h-20 w-20"
                      alt="google"
                    />
                    <Text
                      className="font-semibold text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Google
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default ConnectSocialMediaAccountModal;
