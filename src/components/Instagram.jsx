import React from "react";
import post1 from "../assets/images/post.png";
import post2 from "../assets/images/post1.png";
import post3 from "../assets/images/post2.png";
import post4 from "../assets/images/post3.png";
function Instagram() {
  return (
    <div className="w-full flex flex-col items-center container mx-auto 2xl:max-w-7xl 2xl:mx-auto px-24 mb-24 bg-gradient-to-t from-sky-100 to-transparent">
      <div className=" flex flex-col items-center justify-center gap-y-6 mb-24">
        <h3 className=" text-[48px] font-semibold">
          Check out @foodieland on Instagram
        </h3>
        <p className=" font-normal text-base text-opacity-60 w-[706px] text-center">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      <div className=" w-full grid grid-cols-4 gap-x-5 gap-y-8">
        <img src={post1} alt="post1" />
        <img src={post2} alt="post1" />
        <img src={post3} alt="post1" />
        <img src={post4} alt="post1" />
      </div>
      <div className=" flex items-center justify-center gap-x-2 w-[230px] h-[60px] bg-black text-white rounded-2xl my-20">
        <div>Visit Our Instagram</div>
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.83667 0H16.0867C19.883 0 22.9617 3.07862 22.9617 6.875V15.125C22.9617 18.9214 19.883 22 16.0867 22H7.83667C4.04029 22 0.96167 18.9214 0.96167 15.125V6.875C0.96167 3.07862 4.04029 0 7.83667 0ZM16.0867 19.9375C18.7404 19.9375 20.8992 17.7787 20.8992 15.125V6.875C20.8992 4.22125 18.7404 2.0625 16.0867 2.0625H7.83667C5.18292 2.0625 3.02417 4.22125 3.02417 6.875V15.125C3.02417 17.7787 5.18292 19.9375 7.83667 19.9375H16.0867Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.46167 11C6.46167 7.96263 8.92429 5.5 11.9617 5.5C14.999 5.5 17.4617 7.96263 17.4617 11C17.4617 14.0374 14.999 16.5 11.9617 16.5C8.92429 16.5 6.46167 14.0374 6.46167 11ZM8.52417 11C8.52417 12.8948 10.0669 14.4375 11.9617 14.4375C13.8564 14.4375 15.3992 12.8948 15.3992 11C15.3992 9.10388 13.8564 7.5625 11.9617 7.5625C10.0669 7.5625 8.52417 9.10388 8.52417 11Z"
            fill="white"
          />
          <circle cx="17.8741" cy="5.08737" r="0.732875" fill="white" />
        </svg>
      </div>
    </div>
  );
}

export default Instagram;
