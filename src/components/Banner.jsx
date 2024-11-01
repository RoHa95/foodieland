import React from "react";
import banner from "../assets/images/banner.png";
import recepieicon from "../assets/images/recepie-icon.png";
import person from "../assets/images/ellipse2.png";
import bage from "../assets/images/badge.png";
function Banner() {
  return (
    <div className=" w-full flex justify-between items-center gap-x-10">
      <div className=" w-10 h-[600px] bg-sky-100 rounded-r-3xl my-16"></div>
      <div className=" my-8 md:my-0 relative w-full flex flex-col-reverse md:flex-row md:justify-center md:h-[640px] bg-sky-100 overflow-hidden rounded-[36px]">
        <div className=" w-full  md:w-1/2 bg-sky-100 flex flex-col items-center justify-between">
          <div>
            <div className=" flex items-center justify-center w-fit px-4 py-2 m-8 bg-white rounded-3xl gap-x-3">
              <div>
                <img src={recepieicon} alt="recepieicon" />
              </div>
              <span className=" font-semibold text-sm">Hot Recipes</span>
            </div>
            <h1 className=" font-semibold text-3xl sm:text-[40px] sm:leading-[48px] md:text-[44px] md:leading-[52px] xl:text-[64px] xl:leading-[74px] pl-8 md:pr-10 pb-2 pr-2">
              Spicy delicious chicken wings
            </h1>
            <p className=" text-base font-normal text-opacity-60 ml-8 pr-2 md:pr-6">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{" "}
            </p>
            <div className=" flex items-center gap-x-4 m-8">
              <div className=" font-medium text-xs lg:text-base flex items-center justify-center gap-x-1 lg:gap-x-3 bg-sky-200 py-2 px-4 rounded-3xl">
                <div>
                  <svg
                    
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 lg:w-6 lg:h-6"
                  >
                    <path
                      d="M9.75 1.5H14.25C14.4489 1.5 14.6397 1.42098 14.7803 1.28033C14.921 1.13968 15 0.948912 15 0.75C15 0.551088 14.921 0.360322 14.7803 0.21967C14.6397 0.0790176 14.4489 0 14.25 0L9.75 0C9.55109 0 9.36032 0.0790176 9.21967 0.21967C9.07902 0.360322 9 0.551088 9 0.75C9 0.948912 9.07902 1.13968 9.21967 1.28033C9.36032 1.42098 9.55109 1.5 9.75 1.5Z"
                      fill="black"
                    />
                    <path
                      d="M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C20.9973 9.61388 20.0482 7.32626 18.361 5.63902C16.6737 3.95178 14.3861 3.0027 12 3ZM16.2426 8.81799L12.5304 12.5303C12.4607 12.6 12.378 12.6552 12.2871 12.6929C12.1961 12.7306 12.0985 12.75 12 12.75C11.9015 12.75 11.804 12.7306 11.713 12.6929C11.622 12.6553 11.5393 12.6 11.4697 12.5304C11.4 12.4607 11.3448 12.378 11.3071 12.2871C11.2694 12.1961 11.25 12.0985 11.25 12C11.25 11.9015 11.2694 11.804 11.3071 11.713C11.3448 11.622 11.4 11.5393 11.4696 11.4697L15.182 7.75736C15.2516 7.68771 15.3343 7.63246 15.4253 7.59477C15.5163 7.55708 15.6138 7.53767 15.7123 7.53767C15.8108 7.53767 15.9083 7.55707 15.9993 7.59476C16.0903 7.63244 16.173 7.68769 16.2426 7.75733C16.3123 7.82697 16.3675 7.90965 16.4052 8.00065C16.4429 8.09164 16.4623 8.18916 16.4623 8.28766C16.4623 8.38615 16.4429 8.48368 16.4052 8.57467C16.3675 8.66567 16.3123 8.74835 16.2427 8.81799H16.2426Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div>30 Minutes</div>
              </div>
              <div className=" font-medium text-xs lg:text-base flex items-center justify-center gap-x-1 lg:gap-x-3 bg-sky-200 py-2 px-4 rounded-3xl">
                <div>
                  <svg
                   
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                     className="w-4 h-4 lg:w-6 lg:h-6"
                  >
                    <path
                      d="M11.9989 7.47887C11.9985 7.46532 11.998 7.45177 11.9969 7.43813C11.9957 7.42444 11.994 7.41094 11.9922 7.39748C11.9912 7.39052 11.9909 7.38361 11.9898 7.37661L11.2398 2.87661C11.2237 2.77941 11.1885 2.68634 11.1364 2.60272C11.0843 2.5191 11.0162 2.44657 10.936 2.38928C10.8559 2.33198 10.7652 2.29105 10.6692 2.26881C10.5732 2.24657 10.4738 2.24346 10.3766 2.25966C10.2794 2.27586 10.1864 2.31105 10.1028 2.36323C10.0192 2.41541 9.9467 2.48354 9.88946 2.56374C9.83222 2.64394 9.79134 2.73463 9.76916 2.83063C9.74699 2.92664 9.74394 3.02607 9.76021 3.12325L10.3646 6.74993H8.625V2.99993C8.625 2.80102 8.54598 2.61025 8.40533 2.4696C8.26468 2.32895 8.07391 2.24993 7.875 2.24993C7.67609 2.24993 7.48532 2.32895 7.34467 2.4696C7.20402 2.61025 7.125 2.80102 7.125 2.99993V6.74993H5.38536L5.98979 3.12325C6.00606 3.02607 6.00301 2.92664 5.98083 2.83063C5.95866 2.73463 5.91778 2.64394 5.86053 2.56374C5.80329 2.48354 5.73081 2.41541 5.64722 2.36323C5.56364 2.31105 5.47059 2.27586 5.3734 2.25966C5.27621 2.24346 5.17678 2.24657 5.08079 2.26881C4.9848 2.29105 4.89413 2.33198 4.81397 2.38928C4.73381 2.44657 4.66572 2.5191 4.6136 2.60272C4.56148 2.68634 4.52635 2.77941 4.51021 2.87661L3.76021 7.37661C3.75906 7.38361 3.75879 7.39052 3.75778 7.39748C3.75595 7.41094 3.75426 7.42444 3.75311 7.43813C3.75197 7.45177 3.75146 7.46532 3.75105 7.47887C3.75087 7.48592 3.75 7.49284 3.75 7.49993C3.75 7.50661 3.75046 7.51316 3.7505 7.5198C3.75064 7.52442 3.75064 7.529 3.75087 7.53358C3.75993 8.49114 4.1014 9.4158 4.71687 10.1494C5.33235 10.883 6.18359 11.38 7.125 11.5553V20.9999C7.125 21.1988 7.20402 21.3896 7.34467 21.5303C7.48532 21.6709 7.67609 21.7499 7.875 21.7499C8.07391 21.7499 8.26468 21.6709 8.40533 21.5303C8.54598 21.3896 8.625 21.1988 8.625 20.9999V11.5553C9.56641 11.38 10.4177 10.883 11.0331 10.1494C11.6486 9.4158 11.9901 8.49113 11.9991 7.53358C11.9994 7.529 11.9994 7.52442 11.9995 7.51979C11.9995 7.51316 12 7.50661 12 7.49993C12 7.49284 11.9991 7.48592 11.9989 7.47887Z"
                      fill="black"
                    />
                    <path
                      d="M19.8743 2.98673C19.874 2.97126 19.8732 2.95578 19.8719 2.94026C19.8711 2.92973 19.8702 2.9193 19.8689 2.90891C19.8673 2.89595 19.8653 2.883 19.863 2.87004C19.8607 2.85699 19.8582 2.84409 19.8552 2.83131C19.8529 2.82115 19.8502 2.81104 19.8474 2.80092C19.8432 2.78586 19.8388 2.77103 19.8337 2.75638C19.8323 2.75217 19.8313 2.74791 19.8298 2.7437C19.8281 2.73917 19.826 2.73495 19.8242 2.73047C19.8186 2.71577 19.8125 2.70134 19.8059 2.68716C19.8017 2.67791 19.7973 2.66879 19.7927 2.65979C19.7866 2.64771 19.7801 2.63582 19.7732 2.62413C19.7672 2.61365 19.761 2.60335 19.7545 2.59323C19.7483 2.58371 19.7419 2.57446 19.7353 2.56522C19.7274 2.55405 19.7193 2.54311 19.7108 2.53249C19.7046 2.52466 19.6981 2.51711 19.6916 2.50955C19.6822 2.49875 19.6727 2.48808 19.6627 2.47787C19.6558 2.47073 19.6486 2.46387 19.6413 2.457C19.6313 2.44748 19.6213 2.43814 19.6108 2.42921C19.6024 2.42203 19.5936 2.41525 19.5849 2.40843C19.5751 2.40083 19.5652 2.39328 19.5551 2.38614C19.5447 2.37886 19.534 2.37204 19.5232 2.36531C19.5141 2.35959 19.505 2.35382 19.4956 2.34851C19.4834 2.34155 19.4709 2.33514 19.4583 2.32887C19.4496 2.32457 19.441 2.32027 19.4322 2.31628C19.4189 2.31033 19.4054 2.30493 19.3917 2.29971C19.3826 2.29628 19.3736 2.29285 19.3644 2.28973C19.3513 2.28529 19.338 2.2814 19.3246 2.27769C19.3138 2.27472 19.3032 2.27193 19.2924 2.26941C19.2805 2.26671 19.2684 2.26437 19.2563 2.26222C19.2432 2.25984 19.23 2.25783 19.2167 2.25618C19.2065 2.25494 19.1962 2.25394 19.1859 2.25307C19.1706 2.25183 19.1551 2.25105 19.1396 2.25073C19.1347 2.25064 19.1299 2.25 19.125 2.25C19.1204 2.25 19.116 2.2506 19.1115 2.25069C19.0961 2.25096 19.0807 2.25179 19.0653 2.25302C19.0547 2.25385 19.0443 2.2548 19.0338 2.25609C19.0209 2.25769 19.008 2.2597 18.995 2.26199C18.982 2.26428 18.969 2.2668 18.9563 2.26978C18.9461 2.27211 18.936 2.27476 18.9259 2.27756C18.9108 2.28168 18.896 2.28621 18.8813 2.29129C18.8771 2.29271 18.8729 2.29362 18.8687 2.29513C18.8594 2.29852 18.8503 2.30255 18.8411 2.30598C18.8376 2.3074 18.8341 2.30864 18.8306 2.3101C16.8984 3.03625 15.3511 5.4066 14.2315 9.35806C13.7236 11.1814 13.3551 13.0408 13.1293 14.9201C13.1181 15.0247 13.129 15.1305 13.1614 15.2306C13.1937 15.3308 13.2468 15.423 13.3171 15.5012C13.3875 15.5795 13.4735 15.6421 13.5696 15.685C13.6657 15.7278 13.7697 15.75 13.875 15.75H18.375V21C18.375 21.1989 18.454 21.3897 18.5946 21.5303C18.7353 21.671 18.9261 21.75 19.125 21.75C19.3239 21.75 19.5146 21.671 19.6553 21.5303C19.7959 21.3897 19.875 21.1989 19.875 21V3C19.875 2.99551 19.8744 2.99121 19.8743 2.98673Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div>Chicken </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className=" flex items-center justify-between w-full md:mt-1 lg:m-12 mb-5">
            <div className=" flex items-center gap-x-3 ml-8">
              <div>
                <img src={person} alt="person" />
              </div>
              <div className=" flex flex-col">
                <div className=" font-bold text-sm lg:text-base">John Smith</div>
                <div className=" text-xs lg:text-sm font-medium text-opacity-30">
                  15 March 2022
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center bg-black rounded-2xl w-28 h-10 lg:w-48 lg:h-14 gap-x-1 lg:gap-x-3 mr-8 cursor-pointer">
              <div className=" text-white text-xs md:text-[10px] lg:text-sm font-semibold">
                View Recipes
              </div>
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.747 9.41506 20.7188 6.93684 18.891 5.10901C17.0632 3.28118 14.5849 2.25299 12 2.25ZM15.416 12.624L10.916 15.624C10.8031 15.6995 10.6718 15.7428 10.5362 15.7494C10.4005 15.756 10.2657 15.7257 10.1459 15.6616C10.0262 15.5975 9.92612 15.5021 9.85639 15.3856C9.78665 15.2691 9.74988 15.1358 9.75 15V9C9.74988 8.8642 9.78665 8.73092 9.85639 8.6144C9.92612 8.49787 10.0262 8.40248 10.1459 8.3384C10.2657 8.27433 10.4005 8.24398 10.5362 8.2506C10.6718 8.25721 10.8031 8.30055 10.916 8.37598L15.416 11.376C15.5188 11.4445 15.603 11.5373 15.6613 11.6461C15.7195 11.755 15.75 11.8765 15.75 12C15.75 12.1235 15.7195 12.245 15.6613 12.3539C15.603 12.4627 15.5188 12.5555 15.416 12.624Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full  md:w-1/2">
          <img src={banner} alt="banner-image" className=" w-full h-full" />
        </div>
        <img
          src={bage}
          alt="badge-logo"
          className=" hidden md:block absolute top-10 left-1/2-[40px]"
        />
      </div>
      <div className=" w-10 h-[600px] bg-sky-100 rounded-l-3xl"></div>
    </div>
  );
}

export default Banner;
