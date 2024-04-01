import React from "react";

const Activity = () => {
  return (
    <>
      <div
        className="isolate mx-auto px-2 flex-col sm:py-4 lg:px-8 pt-10 bg-[#E5F280]"
        id="activity"
      >
        <h2 className="font-semibold text-3xl pt-8 text-black ">關於活動</h2>
        <h3 className="font-semibold text-2xl text-black">ABOUT ACTIVITY </h3>

        <h2 className="mx-auto px-8 py-6 font-bold text-wrap align-middle">
          歡迎加入我們在2024年5月20日下午2:00至8:00在大安森林公園舉辦的野餐活動！這將是一場精彩的市集式野餐，您可以與家人和朋友一同享受美好時光。活動將在公園中的指定區域舉行，我們將提供各種美味的野餐食品和飲料，包括沙拉、三明治、水果、飲料等。此外，我們還準備了多種娛樂活動，如運動、音樂表演和舞蹈表演，保證讓您度過一個充滿活力和歡樂的下午。歡迎大家攜帶野餐墊或毯子，與我們一同享受美好的天氣和自然景觀。我們期待與您相見，一起共度愉快時光！
        </h2>
        <div className="flex flex-row mx-auto justify-around flex-wrap my-4">
          <div className="flex flex-col items-center px-2 mb-3">
            <img
              className="mask mask-hexagon-2 object-contain h-72 shadow-xl"
              src="/pictures/Band.jpg"
            />
            <h3 className="font-semibold text-xl my-4">樂團表演</h3>
          </div>
          <div className="flex flex-col items-center px-2 mb-3">
            <img
              className="mask mask-hexagon-2 object-contain h-72 "
              src="/pictures/Dance.jpg"
            />
            <h3 className="font-semibold text-xl my-4">跳舞表演</h3>
          </div>
          <div className="flex flex-col items-center px-2 mb-3">
            <img
              className="mask mask-hexagon-2 object-contain h-72"
              src="/pictures/Yoga.jpg"
            />
            <h3 className="font-semibold text-xl my-4">瑜伽體驗</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
