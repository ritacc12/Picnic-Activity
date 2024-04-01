import React from "react";

const Traffic = () => {
  return (
    <>
      <div
        className="isolate py-4 selection:sm:py-32 lg:px-8 bg-[#D6D979] pb-8 mx-auto"
        id="traffic"
      >
        <h2 className="font-semibold text-3xl pt-8 text-[#5d4a26]">交通資訊</h2>
        <h3 className="font-semibold text-2xl text-[#6b5828]">
          TRAFFIC INFORMATION
        </h3>
        <div className="flex flex-row justify-center">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 justify-center my-3 mx-1"
          >
            <title>Google Maps</title>
            <path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z" />
          </svg>
          <h3 className="font-medium text-1xl my-2">
            大安森林公園 (台北市大安區新生南路二段1號)
          </h3>
        </div>
        <div className="flex mx-auto my-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.130095769288!2d121.5362867!3d25.0296587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9803a65369f%3A0x61fb21e8f586e51f!2z5aSn5a6J5qOu5p6X5YWs5ZyS!5e0!3m2!1szh-TW!2stw!4v1711964503026!5m2!1szh-TW!2stw"
            className="w-dvw h-80 loading:lazy referrerpolicy=no-referrer-when-downgrade"
            // width="400"
            // height="250"
            // style="border:0;"
            // loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <ul className="list-outside mt-4">
          <li className="py-1 font-bold">✦ 歡迎搭乘大眾運輸工具</li>
          <li className="py-1 font-medium ">✦ 非停車區域，切勿違規停車</li>
        </ul>
        <div>
          <p className="text-xl font-medium mt-8 rounded-lg bg-yellow-400 w-56 mx-auto">
            捷運路線
          </p>
          <ul className="list-outside mt-4">
            <li className="py-1 font-medium">✦ 捷運大安森林公園站</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mt-8 rounded-lg bg-yellow-400 w-56 mx-auto">
            公車路線
          </p>
          <ul className="list-outside mt-4">
            <li className="py-1 font-medium">✦ 信義新生路口</li>
            <li className="py-1 font-medium">✦ 金華新生路口</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mt-8 rounded-lg bg-yellow-400 w-56 mx-auto">
            停車資訊
          </p>
          <ul className="list-outside mt-4">
            <li className="py-1 font-medium">✦ 金華國民中學</li>
            <li className="py-1 font-medium">✦ 大安森林公園地下停車場</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Traffic;
