import React from "react";

import { Img, Text, Line, Input, List } from "components";
import { CloseSVG } from "../../assets/images";

const TrendingPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-start justify-end mx-auto overflow-auto sm:pl-5 pl-[35px] pt-[35px] w-full">
        <div className="flex flex-col items-center md:ml-[0] ml-[51px] sm:pr-5 pr-[102px] md:px-5 w-[98%] md:w-full">
          <header className="flex items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
              <div className="header-row my-2.5">
                <Img
                  src="images/img_group_9.svg"
                  className="h-[35px]"
                  alt="Group"
                />
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-6 sm:hidden items-start justify-start md:ml-[0] ml-[270px] self-stretch w-auto">
                <div className="flex flex-row gap-1 items-center justify-start self-stretch w-auto">
                  <Text
                    className="font-medium text-gray_903 text-left w-auto"
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
                <div className="flex flex-row gap-1 items-center justify-start self-stretch w-auto">
                  <Text
                    className="font-medium text-gray_903 text-left w-auto"
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
                  className="font-medium text-gray_903 text-left w-auto"
                  variant="body2"
                >
                  Request a demo
                </Text>
              </div>
              <Img
                src="images/img_profileimglarg.png"
                className="h-14 md:h-auto sm:hidden md:ml-[0] ml-[385px] rounded-[50%] w-14"
                alt="ProfileImgLarg"
              />
            </div>
          </header>
        </div>
        <div className="flex flex-col items-end md:ml-[0] ml-[51px] md:px-5 w-[98%] md:w-full">
          <div className="flex flex-col gap-[30px] items-start justify-end w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between mr-auto w-[93%] md:w-full">
              <div className="flex flex-row gap-[34px] items-start justify-between md:mt-0 mt-[11px] pt-1.5 w-[13%] md:w-full">
                <div className="flex flex-col gap-3.5 items-center justify-start w-auto">
                  <Text
                    className="font-medium text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    Trending
                  </Text>
                  <Line className="bg-blue_A700 h-0.5 w-full" />
                </div>
                <Text
                  className="font-medium text-bluegray_400 text-left w-auto"
                  variant="body2"
                >
                  Latest
                </Text>
              </div>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e)}
                wrapClassName="flex w-2/5 md:w-full"
                className="font-medium p-0 placeholder:text-bluegray_200 text-base text-bluegray_200 text-left w-full"
                name="Group10337"
                placeholder="Search Songs,videos and podcasts"
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
            <List
              className="flex-col gap-[30px] grid items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-[31px] items-start justify-start pt-[7px] w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-[93%] md:w-full">
                  <Text
                    className="font-medium text-bluegray_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Music
                  </Text>
                  <Text
                    className="font-semibold mt-[3px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    View All
                  </Text>
                </div>
                <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between pb-[5px] w-full">
                  <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                    <Img
                      src="images/img_rectangle1326.png"
                      className="h-[250px] md:h-auto object-cover w-[250px]"
                      alt="Rectangle1326"
                    />
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem imsum
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                    <Img
                      src="images/img_rectangle1326_250X250.png"
                      className="h-[250px] md:h-auto object-cover w-[250px]"
                      alt="Rectangle1326 One"
                    />
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem imsum
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                    <Img
                      src="images/img_rectangle1326_1.png"
                      className="h-[250px] md:h-auto object-cover w-[250px]"
                      alt="Rectangle1326 Two"
                    />
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem imsum
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                    <Img
                      src="images/img_rectangle1326_2.png"
                      className="h-[250px] md:h-auto object-cover w-[250px]"
                      alt="Rectangle1326 Three"
                    />
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem imsum
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                    <Img
                      src="images/img_rectangle1326_3.png"
                      className="h-[250px] md:h-auto object-cover w-[250px]"
                      alt="Rectangle1326 Four"
                    />
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem imsum
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[31px] items-start justify-start pt-[7px] w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-[93%] md:w-full">
                  <Text
                    className="font-medium text-bluegray_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Videos
                  </Text>
                  <Text
                    className="font-semibold mt-[3px] text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    View All
                  </Text>
                </div>
                <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between pb-[5px] w-full">
                  <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                    <Img
                      src="images/img_rectangle1326_4.png"
                      className="h-[250px] md:h-auto object-cover w-[250px]"
                      alt="Rectangle1326 One"
                    />
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem imsum
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                    <Img
                      src="images/img_rectangle1326_5.png"
                      className="h-[250px] md:h-auto object-cover w-[250px]"
                      alt="Rectangle1326 One One"
                    />
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem imsum
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                    <Img
                      src="images/img_rectangle1326_6.png"
                      className="h-[250px] md:h-auto object-cover w-[250px]"
                      alt="Rectangle1326 Two One"
                    />
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem imsum
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                    <Img
                      src="images/img_rectangle1326_7.png"
                      className="h-[250px] md:h-auto object-cover w-[250px]"
                      alt="Rectangle1326 Three One"
                    />
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem imsum
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                    <Img
                      src="images/img_rectangle1326_8.png"
                      className="h-[250px] md:h-auto object-cover w-[250px]"
                      alt="Rectangle1326 Four One"
                    />
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem imsum
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[31px] items-start justify-end pt-[7px] w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between mr-auto w-[93%] md:w-full">
                  <Text
                    className="font-medium text-bluegray_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Podcasts
                  </Text>
                  <Text
                    className="font-semibold mt-0.5 text-blue_A700 text-left w-auto"
                    variant="body2"
                  >
                    View All
                  </Text>
                </div>
                <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <Img
                      src="images/img_rectangle1326_4.png"
                      className="h-[250px] md:h-auto object-cover w-[250px]"
                      alt="Rectangle1326 Two"
                    />
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem imsum
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <Img
                      src="images/img_rectangle1326_5.png"
                      className="h-[250px] md:h-auto object-cover w-[250px]"
                      alt="Rectangle1326 One Two"
                    />
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem imsum
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <Img
                      src="images/img_rectangle1326_6.png"
                      className="h-[250px] md:h-auto object-cover w-[250px]"
                      alt="Rectangle1326 Two Two"
                    />
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem imsum
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <Img
                      src="images/img_rectangle1326_7.png"
                      className="h-[250px] md:h-auto object-cover w-[250px]"
                      alt="Rectangle1326 Three Two"
                    />
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem imsum
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <Img
                      src="images/img_rectangle1326_9.png"
                      className="h-[250px] md:h-auto object-cover w-[250px]"
                      alt="Rectangle1326 Four Two"
                    />
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem imsum
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingPage;
