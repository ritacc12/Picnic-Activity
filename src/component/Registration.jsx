import React from "react";
import { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    activity: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // For Radio button only can choose one choice
  const [selectedValue, setSelectedValue] = useState("SoothYoga");

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate Name
    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      newErrors.email = "Email type error";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, you can submit the data here
      console.log("Form data:", formData);
      setSubmitted(true); // Set a submitted flag
    } else {
      // Form is not valid, display error messages
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
      <p className="text-[#434a1d] mt-3 font-bold"> *一人限報名一個場次</p>
      <div className=" flex flex-col justify-center mx-auto mt-8">
        {submitted ? (
          <>
            <div className="success-message font-extrabold text-[#23280b] text-4xl">
              Successful
              <p className="font-bold pt-2">已成功報名</p>
            </div>
            <p className="text-[#50571d] mt-4 font-bold">
              If you need to register for other activities, please refresh your
              browser
            </p>
          </>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex flex-col justify-center"
          >
            <div>
              <label className="input input-bordered flex items-center gap-2 bg-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  name="name"
                  className="grow"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
              {errors.name && (
                <div className="error text-red-500 italic font-medium pt-2">
                  {errors.name}
                </div>
              )}
            </div>

            <div className="my-4">
              <label className="input input-bordered flex items-center gap-2 bg-zinc-300 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  name="email"
                  className="grow"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              {errors.email && (
                <div className="error text-red-500 italic font-medium pt-2">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="form-control my-6">
              <div className="text-[#23280b]">
                <legend className="text-left font-semibold mb-4 text-lg">
                  報名活動：
                </legend>
                <div>
                  <div className="cursor-pointer flex justify-start mt-2">
                    <input
                      type="radio"
                      className="radio radio-warning"
                      id="SoothYoga"
                      name="SoothYoga"
                      value="SoothYoga"
                      checked={selectedValue === "SoothYoga"}
                      onChange={() => handleRadioChange("SoothYoga")}
                    />
                    <label
                      htmlFor="舒緩瑜珈"
                      className="mx-6 font-semibold text-lg"
                    >
                      舒緩瑜珈
                    </label>
                  </div>

                  <div className="cursor-pointer flex justify-start mt-2">
                    <input
                      type="radio"
                      className="radio radio-warning"
                      id="HathaYoga"
                      name="HathaYoga"
                      value={formData.activity}
                      checked={selectedValue === "HathaYoga"}
                      onChange={() => handleRadioChange("HathaYoga")}
                    />
                    <label
                      htmlFor="哈達瑜珈"
                      className=" mx-6 font-semibold text-lg"
                    >
                      哈達瑜珈
                    </label>
                  </div>

                  <div className="cursor-pointer flex justify-start mt-2">
                    <input
                      type="radio"
                      className="radio radio-warning"
                      id="AerobicBoxing"
                      name="AerobicBoxing"
                      value={formData.activity}
                      checked={selectedValue === "AerobicBoxing"}
                      onChange={() => handleRadioChange("AerobicBoxing")}
                    />
                    <label
                      htmlFor="有氧拳擊"
                      className="mx-6 font-semibold text-lg"
                    >
                      有氧拳擊
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="rounded-full bg-[#f5a342] cursor-pointer w-72 shadow-lg font-semibold my-4 text-[#23280b]"
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
