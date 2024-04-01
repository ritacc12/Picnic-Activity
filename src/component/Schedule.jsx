import React from "react";

const Schedule = () => {
  return (
    <>
      <div className="isolate bg-[#D0D32C] py-4 " id="schedule">
        <h2 className="font-semibold text-3xl pt-8 text-[#392c0f]">活動時程</h2>
        <h3 className="font-semibold text-2xl text-[#635220]">
          ACTIVITY SCHEDULE
        </h3>
        <div className="overflow-x-auto mx-auto flex flex-col justify-center px-10">
          <div>
            <p className="text-xl font-medium my-6 rounded-lg bg-[#e2ed9b] w-56 mx-auto text-[#392c0f]">
              表演活動
            </p>
            <table className="table my-4 bg-stone-50 text-black font-medium">
              <thead>
                <tr className="font-bold text-xl text-[#392c0f]">
                  <th>Time</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#edf5cc] font-medium">
                  <td>14:00-14:30</td>
                  <td>開幕式</td>
                </tr>
                <tr className="hover:bg-[#edf5cc] font-medium">
                  <td>14:30-15:30</td>
                  <td>AA Band</td>
                </tr>
                <tr className="hover:bg-[#edf5cc] font-medium">
                  <td>15:30-16:30</td>
                  <td>BB Band</td>
                </tr>
                <tr className="hover:bg-[#edf5cc] font-medium">
                  <td>16:30-17:30</td>
                  <td>CC Dancer</td>
                </tr>
                <tr className="hover:bg-[#edf5cc] font-medium">
                  <td>17:30-18:30</td>
                  <td>DD Dancer</td>
                </tr>
                <tr className="hover:bg-[#edf5cc] font-medium">
                  <td>18:30-19:30</td>
                  <td>EE</td>
                </tr>
                <tr className="hover:bg-[#edf5cc] font-medium">
                  <td>19:30-20:00</td>
                  <td>閉幕式</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-4">
            <p className="text-xl font-medium my-6 rounded-lg bg-[#e2ed9b] w-56 mx-auto text-[#392c0f]">
              體驗活動
            </p>
            <table className="table my-4 bg-stone-50 text-black font-medium">
              <thead>
                <tr className="font-bold text-xl text-[#392c0f]">
                  <th>Time</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#edf5cc] font-medium">
                  <td>14:30-15:30</td>
                  <td>舒緩瑜珈A</td>
                </tr>
                <tr className="hover:bg-[#edf5cc] font-medium">
                  <td>15:30-16:30</td>
                  <td>卡達瑜伽</td>
                </tr>
                <tr className="hover:bg-[#edf5cc] font-medium">
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
