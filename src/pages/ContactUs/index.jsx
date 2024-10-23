import React from "react";

import { Img, Text, Button, Input, TextArea } from "components";

const ContactUsPage = () => {
  function handleNavigate4() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate5() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start max-w-[1266px] mb-[361px] mx-auto md:px-5 w-full">
          <header className="flex items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
              <div className="header-row my-[7px]">
                <Img
                  src="images/img_group10392.svg"
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
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[89%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[46%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="font-semibold leading-[52.00px] text-bluegray_900 text-left w-full"
                  as="h3"
                  variant="h3"
                >
                  Got any quieries? Chat with our team.
                </Text>
                <div className="flex flex-col gap-[11px] items-start justify-start mt-[31px] w-full">
                  <Text
                    className="font-medium text-bluegray_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Address
                  </Text>
                  <Text
                    className="font-medium leading-[29.00px] text-bluegray_700 text-left w-full"
                    variant="body1"
                  >
                    4517 Washington Ave. Manchester, Kentucky Thornridge Cir.
                    Syracuse, 39495{" "}
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start mt-[26px] w-[39%] md:w-full">
                  <Img
                    src="images/img_envelopeoutlin.svg"
                    className="h-6 mb-0.5 w-6"
                    alt="envelopeOutlin"
                  />
                  <Text
                    className="font-medium mt-1 text-bluegray_700 text-left w-auto"
                    variant="body1"
                  >
                    contact@gmail.com
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start mt-[26px] w-[33%] md:w-full">
                  <Img
                    src="images/img_call.svg"
                    className="h-6 w-6"
                    alt="call"
                  />
                  <Text
                    className="font-medium text-bluegray_700 text-left w-auto"
                    variant="body1"
                  >
                    +91 01234567890
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start mt-[26px] w-[29%] md:w-full">
                  <Img
                    src="images/img_facebook.svg"
                    className="common-pointer h-6 w-6"
                    onClick={handleNavigate5}
                    alt="facebook"
                  />
                  <Img
                    src="images/img_play.svg"
                    className="h-6 w-6"
                    alt="play"
                  />
                  <Img
                    src="images/img_linkedin.svg"
                    className="h-6 w-6"
                    alt="linkedin"
                  />
                  <Img
                    src="images/img_twitter.svg"
                    className="common-pointer h-6 w-6"
                    onClick={handleNavigate4}
                    alt="twitter"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start pt-[3px] w-[46%] md:w-full">
              <div className="flex flex-col gap-2 items-start justify-start rounded-lg w-full">
                <Text
                  className="font-medium text-bluegray_900 text-left w-auto"
                  variant="body1"
                >
                  Mobile Number
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-medium p-0 placeholder:text-bluegray_200 text-base text-bluegray_200 text-left w-full"
                  type="number"
                  name="Group10198"
                  placeholder="Enter Your Number"
                  shape="RoundedBorder6"
                  size="xl"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
                <Text
                  className="font-medium text-bluegray_900 text-left w-auto"
                  variant="body1"
                >
                  Email
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-medium p-0 placeholder:text-bluegray_200 text-base text-bluegray_200 text-left w-full"
                  type="email"
                  name="Group10198 One"
                  placeholder="Enter Your Email"
                  shape="RoundedBorder6"
                  size="xl"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start mt-[23px] rounded-lg w-full">
                <Text
                  className="font-medium text-bluegray_900 text-left w-auto"
                  variant="body1"
                >
                  Company name
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-medium p-0 placeholder:text-bluegray_200 text-base text-bluegray_200 text-left w-full"
                  name="Group10198 Two"
                  placeholder="Enter Company"
                  shape="RoundedBorder6"
                  size="4xl"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start mt-[23px] w-full">
                <Text
                  className="font-medium text-bluegray_900 text-left w-auto"
                  variant="body1"
                >
                  Message
                </Text>
                <TextArea
                  className="flex mt-1 w-full"
                  name="Group10199"
                  placeholder="Message.."
                  shape="RoundedBorder8"
                  size="sm"
                  variant="OutlineBluegray100"
                ></TextArea>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[512px] sm:min-w-full mt-6 text-base text-center text-white_A700 w-auto"
                shape="RoundedBorder6"
                size="5xl"
                variant="FillBlueA700"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
