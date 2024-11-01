import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="w-full flex flex-col container mx-auto 2xl:max-w-7xl 2xl:mx-auto px-10 md:px-24">
      <div className="flex items-center justify-between border border-x-0 border-t-0 border-b-gray-400 border-opacity-30 py-8">
        <div>
          <div className=" flex flex-col justify-between mb-4">
            <svg
              width="108"
              height="19"
              viewBox="0 0 108 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.568 1.968C4.56 2 3.784 2.384 3.24 3.12C2.712 3.856 2.448 5.128 2.448 6.936C2.448 7.528 2.504 7.944 2.616 8.184C2.728 8.408 2.784 8.536 2.784 8.568C1.92 8.568 1.272 8.392 0.84 8.04C0.424 7.672 0.216 7.072 0.216 6.24C0.216 5.104 0.496 4.072 1.056 3.144C1.616 2.2 2.504 1.44 3.72 0.863999C4.952 0.287999 6.512 -1.43051e-06 8.4 -1.43051e-06C8.784 -1.43051e-06 9.296 0.0399985 9.936 0.119998C11.088 0.231999 11.904 0.287999 12.384 0.287999C13.232 0.287999 13.952 0.191999 14.544 -1.43051e-06C14.496 0.143999 14.408 0.463999 14.28 0.959999C14.152 1.44 13.92 1.856 13.584 2.208C13.264 2.544 12.824 2.768 12.264 2.88C11.32 2.88 10.2 2.728 8.904 2.424L7.896 7.2H11.4L11.016 8.976H7.512L5.568 18H2.112L5.568 1.968ZM14.5196 18.096C13.3356 18.096 12.3996 17.792 11.7116 17.184C11.0236 16.576 10.6796 15.616 10.6796 14.304C10.6796 13.216 10.9036 12.008 11.3516 10.68C11.7996 9.352 12.5196 8.208 13.5116 7.248C14.5036 6.272 15.7516 5.784 17.2556 5.784C19.3036 5.784 20.3276 7.064 20.3276 9.624V9.648C20.3756 9.664 20.4636 9.672 20.5916 9.672C21.1196 9.672 21.7276 9.536 22.4156 9.264C23.1036 8.976 23.7276 8.632 24.2876 8.232L24.5036 8.88C24.0396 9.376 23.4316 9.8 22.6796 10.152C21.9436 10.488 21.1356 10.728 20.2556 10.872C20.1276 12.328 19.7996 13.6 19.2716 14.688C18.7436 15.776 18.0636 16.616 17.2316 17.208C16.3996 17.8 15.4956 18.096 14.5196 18.096ZM15.4796 15.936C15.8636 15.936 16.2476 15.72 16.6316 15.288C17.0156 14.84 17.3516 14.24 17.6396 13.488C17.9276 12.72 18.1356 11.872 18.2636 10.944C17.8316 10.848 17.6156 10.512 17.6156 9.936C17.6156 9.28 17.8636 8.848 18.3596 8.64C18.3276 8.112 18.2476 7.752 18.1196 7.56C17.9916 7.352 17.7676 7.248 17.4476 7.248C16.9196 7.248 16.4076 7.632 15.9116 8.4C15.4156 9.168 15.0156 10.088 14.7116 11.16C14.4076 12.232 14.2556 13.176 14.2556 13.992C14.2556 14.76 14.3436 15.28 14.5196 15.552C14.6956 15.808 15.0156 15.936 15.4796 15.936ZM25.0665 18.096C23.8825 18.096 22.9465 17.792 22.2585 17.184C21.5705 16.576 21.2265 15.616 21.2265 14.304C21.2265 13.216 21.4505 12.008 21.8985 10.68C22.3465 9.352 23.0665 8.208 24.0585 7.248C25.0505 6.272 26.2985 5.784 27.8025 5.784C29.8505 5.784 30.8745 7.064 30.8745 9.624V9.648C30.9225 9.664 31.0105 9.672 31.1385 9.672C31.6665 9.672 32.2745 9.536 32.9625 9.264C33.6505 8.976 34.2745 8.632 34.8345 8.232L35.0505 8.88C34.5865 9.376 33.9785 9.8 33.2265 10.152C32.4905 10.488 31.6825 10.728 30.8025 10.872C30.6745 12.328 30.3465 13.6 29.8185 14.688C29.2905 15.776 28.6105 16.616 27.7785 17.208C26.9465 17.8 26.0425 18.096 25.0665 18.096ZM26.0265 15.936C26.4105 15.936 26.7945 15.72 27.1785 15.288C27.5625 14.84 27.8985 14.24 28.1865 13.488C28.4745 12.72 28.6825 11.872 28.8105 10.944C28.3785 10.848 28.1625 10.512 28.1625 9.936C28.1625 9.28 28.4105 8.848 28.9065 8.64C28.8745 8.112 28.7945 7.752 28.6665 7.56C28.5385 7.352 28.3145 7.248 27.9945 7.248C27.4665 7.248 26.9545 7.632 26.4585 8.4C25.9625 9.168 25.5625 10.088 25.2585 11.16C24.9545 12.232 24.8025 13.176 24.8025 13.992C24.8025 14.76 24.8905 15.28 25.0665 15.552C25.2425 15.808 25.5625 15.936 26.0265 15.936ZM34.9894 18.144C34.0774 18.144 33.3174 17.832 32.7094 17.208C32.1014 16.584 31.7974 15.608 31.7974 14.28C31.7974 13.096 32.0294 11.856 32.4934 10.56C32.9734 9.248 33.6774 8.144 34.6054 7.248C35.5494 6.336 36.6694 5.88 37.9654 5.88C38.6214 5.88 39.1094 5.992 39.4294 6.216C39.7494 6.44 39.9094 6.736 39.9094 7.104V7.2L41.0854 1.68L44.6374 1.2L41.8774 14.16C41.8134 14.4 41.7814 14.656 41.7814 14.928C41.7814 15.248 41.8534 15.48 41.9974 15.624C42.1574 15.752 42.4134 15.816 42.7654 15.816C43.2134 15.816 43.5974 15.624 43.9174 15.24C44.2534 14.856 44.5174 14.344 44.7094 13.704H45.7174C44.7414 16.568 43.1334 18 40.8934 18C40.2374 18 39.7014 17.824 39.2854 17.472C38.8854 17.12 38.6374 16.608 38.5414 15.936C38.1254 16.576 37.6214 17.104 37.0294 17.52C36.4534 17.936 35.7734 18.144 34.9894 18.144ZM36.5494 15.816C36.9334 15.816 37.3174 15.64 37.7014 15.288C38.1014 14.936 38.3734 14.448 38.5174 13.824V13.704L39.6934 8.208C39.5494 7.648 39.2214 7.368 38.7094 7.368C38.0694 7.368 37.4934 7.744 36.9814 8.496C36.4694 9.232 36.0694 10.128 35.7814 11.184C35.4934 12.224 35.3494 13.144 35.3494 13.944C35.3494 14.744 35.4614 15.256 35.6854 15.48C35.9254 15.704 36.2134 15.816 36.5494 15.816ZM48.7268 4.704C48.1988 4.704 47.7508 4.52 47.3828 4.152C47.0148 3.784 46.8308 3.336 46.8308 2.808C46.8308 2.28 47.0148 1.832 47.3828 1.464C47.7508 1.08 48.1988 0.887999 48.7268 0.887999C49.2548 0.887999 49.7028 1.08 50.0708 1.464C50.4548 1.832 50.6468 2.28 50.6468 2.808C50.6468 3.336 50.4548 3.784 50.0708 4.152C49.7028 4.52 49.2548 4.704 48.7268 4.704ZM47.0948 18.144C46.3268 18.144 45.7028 17.904 45.2228 17.424C44.7588 16.944 44.5267 16.224 44.5267 15.264C44.5267 14.864 44.5907 14.344 44.7188 13.704L46.3508 6H49.8068L48.0788 14.16C48.0148 14.4 47.9828 14.656 47.9828 14.928C47.9828 15.248 48.0548 15.48 48.1988 15.624C48.3588 15.752 48.6148 15.816 48.9668 15.816C49.4308 15.816 49.8628 15.624 50.2628 15.24C50.6628 14.84 50.9508 14.328 51.1268 13.704H52.1348C51.5428 15.432 50.7828 16.608 49.8548 17.232C48.9268 17.84 48.0068 18.144 47.0948 18.144ZM54.5492 18.144C53.3652 18.144 52.4452 17.84 51.7892 17.232C51.1332 16.608 50.8052 15.64 50.8052 14.328C50.8052 13.224 51.0212 12.008 51.4532 10.68C51.8852 9.352 52.5892 8.208 53.5652 7.248C54.5412 6.272 55.7812 5.784 57.2852 5.784C59.0452 5.784 59.9252 6.552 59.9252 8.088C59.9252 8.984 59.6692 9.808 59.1572 10.56C58.6452 11.312 57.9652 11.92 57.1172 12.384C56.2692 12.832 55.3652 13.088 54.4052 13.152C54.3732 13.632 54.3572 13.952 54.3572 14.112C54.3572 14.896 54.4932 15.432 54.7652 15.72C55.0372 15.992 55.4772 16.128 56.0852 16.128C56.9492 16.128 57.6852 15.928 58.2932 15.528C58.9172 15.128 59.5972 14.52 60.3332 13.704H61.1492C59.3732 16.664 57.1732 18.144 54.5492 18.144ZM54.5972 12C55.1892 11.968 55.7492 11.76 56.2772 11.376C56.8212 10.992 57.2532 10.504 57.5732 9.912C57.9092 9.32 58.0772 8.696 58.0772 8.04C58.0772 7.384 57.8772 7.056 57.4772 7.056C56.9012 7.056 56.3332 7.56 55.7732 8.568C55.2292 9.576 54.8372 10.72 54.5972 12ZM62.7041 18.144C61.9361 18.144 61.3121 17.904 60.8321 17.424C60.3681 16.944 60.1361 16.224 60.1361 15.264C60.1361 14.864 60.2001 14.344 60.3281 13.704L62.8961 1.68L66.4481 1.2L63.6881 14.16C63.6241 14.4 63.5921 14.656 63.5921 14.928C63.5921 15.248 63.6641 15.48 63.8081 15.624C63.9681 15.752 64.2241 15.816 64.5761 15.816C65.0401 15.816 65.4721 15.624 65.8721 15.24C66.2721 14.84 66.5601 14.328 66.7361 13.704H67.7441C67.1521 15.432 66.3921 16.608 65.4641 17.232C64.5361 17.84 63.6161 18.144 62.7041 18.144ZM69.6066 18.144C68.6946 18.144 67.9346 17.832 67.3266 17.208C66.7186 16.584 66.4146 15.608 66.4146 14.28C66.4146 13.096 66.6466 11.856 67.1106 10.56C67.5906 9.248 68.2946 8.144 69.2226 7.248C70.1666 6.336 71.2866 5.88 72.5826 5.88C73.2386 5.88 73.7266 5.992 74.0466 6.216C74.3666 6.44 74.5266 6.736 74.5266 7.104V7.272L74.7906 6H78.2466L76.5186 14.16C76.4546 14.4 76.4226 14.656 76.4226 14.928C76.4226 15.616 76.7506 15.96 77.4066 15.96C77.8546 15.96 78.2386 15.752 78.5586 15.336C78.8946 14.92 79.1586 14.376 79.3506 13.704H80.3586C79.7666 15.432 79.0306 16.608 78.1506 17.232C77.2866 17.84 76.4146 18.144 75.5346 18.144C74.8626 18.144 74.3186 17.96 73.9026 17.592C73.5026 17.208 73.2626 16.656 73.1826 15.936C72.7186 16.592 72.1986 17.128 71.6226 17.544C71.0626 17.944 70.3906 18.144 69.6066 18.144ZM71.1666 15.816C71.5666 15.816 71.9586 15.632 72.3426 15.264C72.7426 14.88 73.0146 14.36 73.1586 13.704L74.3106 8.28C74.3106 8.072 74.2306 7.872 74.0706 7.68C73.9106 7.472 73.6626 7.368 73.3266 7.368C72.6866 7.368 72.1106 7.744 71.5986 8.496C71.0866 9.232 70.6866 10.128 70.3986 11.184C70.1106 12.224 69.9666 13.144 69.9666 13.944C69.9666 14.744 70.0786 15.256 70.3026 15.48C70.5426 15.704 70.8306 15.816 71.1666 15.816ZM88.0234 18.144C87.0474 18.144 86.3274 17.888 85.8634 17.376C85.4154 16.848 85.1914 16.2 85.1914 15.432C85.1914 15.096 85.2314 14.72 85.3114 14.304C85.3914 13.872 85.4714 13.456 85.5514 13.056C85.6474 12.656 85.7114 12.4 85.7434 12.288C85.8714 11.728 85.9914 11.176 86.1034 10.632C86.2154 10.088 86.2714 9.648 86.2714 9.312C86.2714 8.496 85.9834 8.088 85.4074 8.088C84.9914 8.088 84.6234 8.296 84.3034 8.712C83.9834 9.112 83.7274 9.64 83.5354 10.296L81.9034 18H78.4474L80.9914 6H84.4474L84.1834 7.248C84.9834 6.352 85.9194 5.904 86.9914 5.904C87.8074 5.904 88.4554 6.128 88.9354 6.576C89.4154 7.024 89.6554 7.704 89.6554 8.616C89.6554 9.08 89.5994 9.6 89.4874 10.176C89.3754 10.736 89.2154 11.424 89.0074 12.24C88.8794 12.736 88.7594 13.224 88.6474 13.704C88.5514 14.168 88.5034 14.536 88.5034 14.808C88.5034 15.128 88.5754 15.376 88.7194 15.552C88.8634 15.728 89.1114 15.816 89.4634 15.816C89.9434 15.816 90.3274 15.648 90.6154 15.312C90.9034 14.96 91.1914 14.424 91.4794 13.704H92.4874C91.8954 15.464 91.2074 16.648 90.4234 17.256C89.6554 17.848 88.8554 18.144 88.0234 18.144ZM94.3566 18.144C93.4446 18.144 92.6846 17.832 92.0766 17.208C91.4686 16.584 91.1646 15.608 91.1646 14.28C91.1646 13.096 91.3966 11.856 91.8606 10.56C92.3406 9.248 93.0446 8.144 93.9726 7.248C94.9166 6.336 96.0366 5.88 97.3326 5.88C97.9886 5.88 98.4766 5.992 98.7966 6.216C99.1166 6.44 99.2766 6.736 99.2766 7.104V7.2L100.453 1.68L104.005 1.2L101.245 14.16C101.181 14.4 101.149 14.632 101.149 14.856C101.149 15.496 101.477 15.816 102.133 15.816C102.421 15.816 102.677 15.768 102.901 15.672C102.837 16.472 102.549 17.088 102.037 17.52C101.541 17.936 100.949 18.144 100.261 18.144C99.6206 18.144 99.0766 17.984 98.6286 17.664C98.1966 17.328 97.9086 16.824 97.7646 16.152C96.8046 17.48 95.6686 18.144 94.3566 18.144ZM95.9166 15.816C96.2686 15.816 96.6206 15.664 96.9726 15.36C97.3406 15.056 97.6126 14.632 97.7886 14.088L97.8846 13.704L99.0606 8.208C98.9166 7.648 98.5886 7.368 98.0766 7.368C97.4366 7.368 96.8606 7.744 96.3486 8.496C95.8366 9.232 95.4366 10.128 95.1486 11.184C94.8606 12.224 94.7166 13.144 94.7166 13.944C94.7166 14.744 94.8286 15.256 95.0526 15.48C95.2926 15.704 95.5806 15.816 95.9166 15.816Z"
                fill="black"
              />
              <path
                d="M105.531 18.096C105.003 18.096 104.555 17.912 104.187 17.544C103.819 17.176 103.635 16.728 103.635 16.2C103.635 15.672 103.819 15.224 104.187 14.856C104.555 14.472 105.003 14.28 105.531 14.28C106.059 14.28 106.507 14.472 106.875 14.856C107.259 15.224 107.451 15.672 107.451 16.2C107.451 16.728 107.259 17.176 106.875 17.544C106.507 17.912 106.059 18.096 105.531 18.096Z"
                fill="#FF7426"
              />
            </svg>
          </div>
          <div>Lorem ipsum dolor sit amet, consectetuipisicing elit, </div>
        </div>
        <div>
          <ul className="flex flex-col sm:flex-row text-right sm:gap-x-5 md:gap-x-10 font-medium text-base">
            <li>
              <Link
                className="text-black  hover:text-sky-500 cursor-pointer text-sm"
                to="/about"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className="text-black  hover:text-sky-500 cursor-pointer text-sm"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className=" text-black hover:text-sky-500 cursor-pointer text-sm"
                to="/blogs"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className=" text-black hover:text-sky-500 cursor-pointer text-sm"
                to="/foods"
              >
                Recipes
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-full flex items-center justify-between">
        <div></div>
        <div className=" text-center py-8">
          © 2020 Flowbase. Powered by
          <span className=" text-orange-500 pl-2">Webflow</span>
        </div>

        <div className="flex items-center gap-x-6">
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" cursor-pointer"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.83667 0H16.0867C19.883 0 22.9617 3.07862 22.9617 6.875V15.125C22.9617 18.9214 19.883 22 16.0867 22H7.83667C4.04029 22 0.96167 18.9214 0.96167 15.125V6.875C0.96167 3.07862 4.04029 0 7.83667 0ZM16.0867 19.9375C18.7404 19.9375 20.8992 17.7787 20.8992 15.125V6.875C20.8992 4.22125 18.7404 2.0625 16.0867 2.0625H7.83667C5.18292 2.0625 3.02417 4.22125 3.02417 6.875V15.125C3.02417 17.7787 5.18292 19.9375 7.83667 19.9375H16.0867Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.46167 11C6.46167 7.96263 8.92429 5.5 11.9617 5.5C14.999 5.5 17.4617 7.96263 17.4617 11C17.4617 14.0374 14.999 16.5 11.9617 16.5C8.92429 16.5 6.46167 14.0374 6.46167 11ZM8.52417 11C8.52417 12.8948 10.0669 14.4375 11.9617 14.4375C13.8564 14.4375 15.3992 12.8948 15.3992 11C15.3992 9.10388 13.8564 7.5625 11.9617 7.5625C10.0669 7.5625 8.52417 9.10388 8.52417 11Z"
              fill="black"
            />
            <circle cx="17.8742" cy="5.08737" r="0.732875" fill="black" />
          </svg>
          <svg
            width="23"
            height="18"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" cursor-pointer"
          >
            <path
              d="M22.9617 2.11613C22.1435 2.475 21.2718 2.71288 20.3629 2.82838C21.2979 2.27013 22.0115 1.39287 22.347 0.3355C21.4753 0.85525 20.5128 1.22238 19.487 1.42725C18.6593 0.545875 17.4795 0 16.1925 0C13.6955 0 11.6853 2.02675 11.6853 4.51137C11.6853 4.86888 11.7155 5.21263 11.7898 5.53988C8.04017 5.357 4.72229 3.55988 2.49342 0.82225C2.10429 1.49738 1.87604 2.27012 1.87604 3.102C1.87604 4.664 2.68042 6.04862 3.87942 6.85025C3.15479 6.8365 2.44392 6.62613 1.84167 6.29475C1.84167 6.3085 1.84167 6.32638 1.84167 6.34425C1.84167 8.536 3.40505 10.3565 5.45517 10.7759C5.08805 10.8763 4.68792 10.9244 4.27267 10.9244C3.98392 10.9244 3.69242 10.9079 3.41879 10.8474C4.00317 12.6335 5.66142 13.9466 7.63317 13.9893C6.09867 15.1896 4.1503 15.9129 2.04104 15.9129C1.67117 15.9129 1.31642 15.8964 0.96167 15.851C2.95954 17.1394 5.3273 17.875 7.88067 17.875C16.1802 17.875 20.7177 11 20.7177 5.04075C20.7177 4.84137 20.7108 4.64887 20.7012 4.45775C21.5963 3.8225 22.3484 3.02913 22.9617 2.11613Z"
              fill="black"
            />
          </svg>
          <svg
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" cursor-pointer"
          >
            <path
              d="M8.11163 3.29509H9.92331V0.139742C9.61075 0.0967442 8.53581 0 7.28393 0C4.67183 0 2.88248 1.643 2.88248 4.66274V7.44186H0V10.9693H2.88248V19.845H6.41654V10.9701H9.18243L9.6215 7.44269H6.41571V5.01251C6.41654 3.99297 6.69106 3.29509 8.11163 3.29509Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Footer;
