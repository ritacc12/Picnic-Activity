import React from "react";

const Traffic = () => {
  return (
    <>
      <div
        className="isolate selection:sm:py-32 lg:px-8 bg-[#D6D979] pb-8 mx-auto"
        id="traffic"
      >
        <h2 className="font-semibold text-3xl pt-8">交通資訊</h2>
        <h3 className="font-semibold text-2xl">TRAFFIC INFORMATION</h3>
        <h3 className="font-medium text-1xl my-2">
          台北市大安區新生南路二段1號
        </h3>
        <ul className="list-outside mt-4">
          <li className="py-1 font-medium">✦ 歡迎搭乘大眾運輸工具</li>
          <li className="py-1 font-medium">✦ 非停車區域，切勿違規停車</li>
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
