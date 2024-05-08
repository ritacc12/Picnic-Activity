import React from "react";
import { useState, useEffect } from "react";
import GoogleLogIn from "./GoogleLogIn.jsx";

const Registration = () => {
  const [formData, setFormData] = useState({
    profileState: "", //用戶登錄狀態
    activity: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // For Radio button only can choose one choice

  const handleActivityChange = (e) => {
    setFormData({
      ...formData,
      activity: e.target.value,
    });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      activity: "",
    });
  }, [submitted]);

  //處理登入成功的狀態，更新服組建狀態
  const handleLoginSuccess = (user) => {
    setFormData({
      ...formData,
      profileState: user, // 將用戶資訊更新
    });
  };

  //處理登出的狀態，更新服組建狀態
  const handleLogout = () => {
    setFormData({
      ...formData,
      profileState: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.activity) {
      newErrors.activity = "Activity is required";
      isValid = false;
    }

    //  Validate logIn
    if (!formData.profileState) {
      newErrors.profileState = "Please log in";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div
      id="registration"
      className="isolate h-dvh bg-[#BEC738] flex flex-col pt-12"
    >
      <h2 className="font-semibold text-3xl text-[#23280b]">活動報名</h2>
      <h3 className="font-semibold text-2xl text-[#434a1d]">
        ACTIVITY REGISTRATION
      </h3>
      <p className="text-[#434a1d] mt-3 font-bold text-base">
        {" "}
        *一人限報名一個場次
      </p>
      <div className="mx-auto mt-4">
        {submitted ? (
          <>
            <div className="mt-20">
              <div className="success-message font-extrabold text-[#23280b] text-4xl">
                Successful
                <p className="font-bold pt-2">已成功報名</p>
              </div>
              <p className="text-[#50571d] mt-2 font-bold">
                If you need to register for other activities, please refresh
                your browser
              </p>
            </div>
          </>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex flex-col justify-center"
          >
            <div className="mt-2">
              <GoogleLogIn
                setProfileState={setFormData}
                onLoginSuccess={handleLoginSuccess}
                onLogout={handleLogout}
              />
            </div>
            {errors.profileState && (
              <div className="error text-red-500 font-semibold mt-6 outline-double outline-3 outline-offset-2">
                {errors.profileState}
              </div>
            )}
            <div className="form-control my-6">
              <div className="text-[#23280b]">
                <legend className="text-center font-semibold  text-xl">
                  報名活動：
                </legend>

                <div className="flex flex-col items-center">
                  <div className="cursor-pointer flex justify-start mt-4">
                    <input
                      type="radio"
                      className="w-6"
                      id="SoothYoga"
                      name="SoothYoga"
                      value="SoothYoga"
                      checked={formData.activity === "SoothYoga"}
                      onChange={handleActivityChange}
                    />
                    <label
                      htmlFor="舒緩瑜珈"
                      className="activityItem mx-6 font-semibold text-xl"
                    >
                      舒緩瑜珈
                    </label>
                  </div>

                  <div className="cursor-pointer flex justify-start mt-2">
                    <input
                      type="radio"
                      className="w-6"
                      id="HathaYoga"
                      name="HathaYoga"
                      value="HathaYoga"
                      checked={formData.activity === "HathaYoga"}
                      onChange={handleActivityChange}
                    />
                    <label
                      htmlFor="哈達瑜珈"
                      className="activityItem mx-6 font-semibold text-xl"
                    >
                      哈達瑜珈
                    </label>
                  </div>

                  <div className="cursor-pointer flex justify-start mt-2">
                    <input
                      type="radio"
                      className="w-6"
                      id="AerobicBoxing"
                      name="AerobicBoxing"
                      value="AerobicBoxing"
                      checked={formData.activity === "AerobicBoxing"}
                      onChange={handleActivityChange}
                    />
                    <label
                      htmlFor="有氧拳擊"
                      className="activityItem mx-6 font-semibold text-xl"
                    >
                      有氧拳擊
                    </label>
                  </div>
                </div>
              </div>
              {errors.activity && (
                <div className="error mt-4 text-red-500  font-semibold outline-double outline-3 outline-offset-2">
                  {errors.activity}
                </div>
              )}
            </div>
            <button
              className="rounded-full bg-[#f5a342] cursor-pointer w-72 shadow-lg font-bold text-[#23280b] hover:ring-2 ring-orange-200 mt-2 text-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Registration;
