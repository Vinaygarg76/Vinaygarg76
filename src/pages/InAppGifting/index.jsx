import React from "react";

import {
  Img,
  Input,
  Text,
  Slider,
  PagerIndicator,
  List,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images";

const InAppGiftingPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-gilroy gap-[50px] items-center justify-start mx-auto pb-[390px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                src="images/img_group10392_27.svg"
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
        <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1268px] mx-auto pt-[7px] md:px-5 w-full">
          <div className="flex flex-row gap-6 items-start justify-start w-[17%] md:w-full">
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
              In-App Gifting
            </Text>
          </div>
          <div className="h-[190px] relative w-full">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="m-auto w-full"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-5 h-[190px] items-center justify-start mx-2.5 p-4 rounded-md"
                    style={{
                      backgroundImage: "url('images/img_group10523.png')",
                    }}
                  >
                    <div className="flex flex-row md:gap-10 items-start justify-between w-[98%] md:w-full">
                      <Text
                        className="font-bold mt-1.5 text-left text-white_A700 w-auto"
                        as="h3"
                        variant="h3"
                      >
                        50% OFF
                      </Text>
                      <Img
                        src="images/img_overflowmenu_1.svg"
                        className="h-6 w-6"
                        alt="overflowmenu"
                      />
                    </div>
                    <Text
                      className="font-normal leading-[22.00px] mb-[34px] not-italic text-left text-white_A700 w-[95%] sm:w-full"
                      variant="body4"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dictum ipsum venenatis sagittis, a sapien, magna lorem
                      vitae. Pretium, risus nisl mi molestie adipiscing.Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Dictum
                      ipsum venenatis sagittis, a sapien, magna lorem vitae.
                      Pretium, risus nisl mi molestie adipiscing.Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Dictum ipsum
                      venenatis sagittis, a sapien, magna lorem vitae. Pretium,
                      risus nisl mi molestie adipiscing.
                    </Text>
                  </div>
                </React.Fragment>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-[50%] h-[5px] bg-white_A700 w-[5px] relative" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-[50%] h-[5px] bg-bluegray_300 w-[5px] relative"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="absolute bottom-[11%] flex h-[5px] inset-x-[0] justify-center mx-auto w-[31px]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-[5px] bg-white_A700 w-[5px] relative"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[5px] bg-bluegray_300 w-[5px] relative"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block mx-[4.00px]"
              unselectedWrapperCss="inline-block mx-[4.00px]"
            />
          </div>
          <List
            className="flex-col gap-4 grid items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-[15%] md:w-full">
                <Img
                  src="images/img_profileimglarg_8.png"
                  className="h-14 md:h-auto rounded-[50%] w-14"
                  alt="ProfileImgLarg One"
                />
                <div className="flex flex-col gap-1.5 items-center justify-end pt-[7px] w-[61%]">
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Your Cupons
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-auto"
                    variant="body2"
                  >
                    @ Lorem ipsum
                  </Text>
                </div>
              </div>
              <Line className="bg-bluegray_100 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-[18px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pb-[3px] w-[98%] md:w-full">
                <Img
                  src="images/img_grid_46X42.svg"
                  className="h-[46px] md:mt-0 mt-1 w-[4%]"
                  alt="grid"
                />
                <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[23px] w-[24%] md:w-full">
                  <div className="flex flex-col h-[29px] md:h-auto items-start justify-start w-[284px]">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Gift 1
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-auto"
                    variant="body2"
                  >
                    Lorem ipsum
                  </Text>
                </div>
                <Img
                  src="images/img_share_24X24.svg"
                  className="h-6 md:ml-[0] ml-[860px] md:mt-0 mt-4 w-6"
                  alt="share"
                />
              </div>
              <Line className="bg-bluegray_100 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-[18px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pb-[3px] w-[98%] md:w-full">
                <Img
                  src="images/img_grid_46X42.svg"
                  className="h-[46px] md:mt-0 mt-1 w-[4%]"
                  alt="grid One"
                />
                <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[23px] w-[24%] md:w-full">
                  <div className="flex flex-col h-[29px] md:h-auto items-start justify-start w-[284px]">
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Gift 2
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-auto"
                    variant="body2"
                  >
                    Lorem ipsum
                  </Text>
                </div>
                <Img
                  src="images/img_share_24X24.svg"
                  className="h-6 md:ml-[0] ml-[860px] md:mt-0 mt-4 w-6"
                  alt="share One"
                />
              </div>
              <Line className="bg-bluegray_100 h-px w-full" />
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default InAppGiftingPage;
