import React from "react";
import TiTle from "./Title.jsx";

const Schedule = () => {
  return (
    <>
      <div className="isolate bg-[#D0D32C]" id="schedule">
        <TiTle title="活動時程" subtitle="SCHEDULE" />
        <div className="overflow-x-auto mx-auto flex flex-col justify-center px-10">
          <div>
            <p className="text-xl font-medium mt-8 rounded-lg bg-yellow-400 w-56 mx-auto">
              表演活動
            </p>
            <table className="table my-4 bg-stone-50 text-black font-medium">
              <thead>
                <tr className="font-bold text-xl text-black">
                  <th>Time</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-200 font-medium">
                  <td>14:00-14:30</td>
                  <td>開幕式</td>
                </tr>
                <tr className="hover:bg-slate-200 font-medium">
                  <td>14:30-15:30</td>
                  <td>AA Band</td>
                </tr>
                <tr className="hover:bg-slate-200 font-medium">
                  <td>15:30-16:30</td>
                  <td>BB Band</td>
                </tr>
                <tr className="hover:bg-slate-200 font-medium">
                  <td>16:30-17:30</td>
                  <td>CC Dancer</td>
                </tr>
                <tr className="hover:bg-slate-200 font-medium">
                  <td>17:30-18:30</td>
                  <td>DD Dancer</td>
                </tr>
                <tr className="hover:bg-slate-200 font-medium">
                  <td>18:30-19:30</td>
                  <td>Singer EE</td>
                </tr>
                <tr className="hover:bg-slate-200 font-medium">
                  <td>19:30-20:00</td>
                  <td>閉幕式</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <p className="text-xl font-medium mt-8 rounded-lg bg-yellow-400 w-56 mx-auto">
              體驗活動
            </p>
            <table className="table my-4  bg-stone-50 text-black font-medium">
              <thead>
                <tr className="font-bold text-xl text-black">
                  <th>Time</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-200 font-medium">
                  <td>14:30-15:30</td>
                  <td>舒緩瑜珈A</td>
                </tr>
                <tr className="hover:bg-slate-200 font-medium">
                  <td>15:30-16:30</td>
                  <td>卡達瑜伽</td>
                </tr>
                <tr className="hover:bg-slate-200 font-medium">
                  <td>16:30-17:30</td>
                  <td>拳擊有氧</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
