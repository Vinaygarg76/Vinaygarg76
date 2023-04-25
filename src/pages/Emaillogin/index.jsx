import React from "react";

import { Img, Text, Button, Input } from "components";

const EmailloginPage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[83px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                src="images/img_group10392_35X162.svg"
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
        <div className="flex flex-col gap-[29px] items-center justify-start mb-[467px] md:px-5 w-[38%] md:w-full">
          <Text
            className="font-semibold text-bluegray_900 text-left w-auto"
            as="h3"
            variant="h3"
          >
            Sign in to Recharge Direct
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
              <Text
                className="font-medium text-bluegray_900 text-left w-auto"
                variant="body1"
              >
                Email
              </Text>
              <Input
                wrapClassName="w-full"
                className="font-medium p-0 placeholder:text-bluegray_200 text-base text-bluegray_200 text-left w-full"
                name="Group10198"
                placeholder="Enter Your emai"
                shape="RoundedBorder6"
                size="xl"
                variant="OutlineBluegray100"
              ></Input>
            </div>
            <div className="flex flex-col gap-[15px] items-end justify-start mt-4 w-full">
              <div className="flex flex-col gap-[9px] items-start justify-start pt-[5px] w-full">
                <div className="flex flex-col items-center justify-start w-auto md:w-full">
                  <Text
                    className="font-medium text-bluegray_900 text-left w-auto"
                    variant="body1"
                  >
                    Password
                  </Text>
                </div>
                <Input
                  wrapClassName="flex w-full"
                  className="font-medium p-0 placeholder:text-bluegray_200 text-base text-bluegray_200 text-left w-full"
                  type="password"
                  name="Group10265"
                  placeholder="Enter Your Password"
                  suffix={
                    <Img
                      src="images/img_eye.svg"
                      className="ml-[35px] mr-3.5 my-4"
                      alt="eye"
                    />
                  }
                  shape="RoundedBorder6"
                  size="2xl"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
              <Text
                className="font-medium text-blue_A700 text-left w-auto"
                variant="body1"
              >
                Forgot Password?
              </Text>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[512px] sm:min-w-full mt-6 text-base text-center text-white_A700 w-auto"
              shape="RoundedBorder6"
              size="5xl"
              variant="FillBlueA700"
            >
              Submit
            </Button>
            <Text
              className="font-medium mt-[31px] text-bluegray_900 text-left w-auto"
              variant="body1"
            ></Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailloginPage;
