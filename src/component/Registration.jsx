import React from "react";
import Title from "./Title.jsx";
import { useForm } from "react-hook-form";
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

  // For Radio button
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
      return setFormData(formData);
      // setSubmitted(false);
    }
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div
      id="registration"
      className="mx-auto h-dvh bg-[#BEC738] px-10 py-4 sm:py-4 lg:px-8 "
    >
      <Title title="活動報名" subtitle="REGISTRATION"></Title>
      <p className="text-black mt-4"> *一人限報名一個場次</p>
      <div className="w-96 flex flex-col justify-center mx-auto mt-8 ">
        {submitted ? (
          <div className="success-message font-extrabold text-black text-4xl">
            Successful!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label className="input input-bordered flex items-center gap-2 bg-zinc-300 ">
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
                <div className="error text-gray-800 italic font-medium pb-4">
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
                <div className="error  text-gray-800 italic font-medium">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="form-control my-8">
              <div>
                <legend className="text-left text-black font-semibold mb-4">
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
                      className="text-amber-950 mx-6 font-medium"
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
                      className="text-amber-950 mx-6 font-medium"
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
                      className="text-amber-950 mx-6 font-medium"
                    >
                      有氧拳擊
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="rounded-full bg-orange-400 cursor-pointer my-4 w-72 shadow-lg"
              disabled={!isFormValid}
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
