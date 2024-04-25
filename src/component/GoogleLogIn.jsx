import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import googleIcon from "/pictures/google.svg";

import axios from "axios";

const GoogleLogIn = ({ setProfileState, onLoginSuccess, onLogout }) => {
  const [user, setUser] = useState([]); //確認用戶是否登入成功
  const [profile, setProfile] = useState({}); //儲存用戶資料訊息
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 控制登錄狀態

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse), onLoginSuccess(codeResponse); // 登入成功後執行回調函數
      setIsLoggedIn(true); // 登录成功后设置状态为已登录
    },
    onError: (error) => alert("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user, setProfileState]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
    setIsLoggedIn(false); //頁面重新載入時重置登錄狀態
    onLogout();
  };

  useEffect(() => {
    const handleReload = () => {
      googleLogout(); // 執行登出
      setIsLoggedIn(false); //頁面重新載入時重置登錄狀態
    };

    window.addEventListener("beforeunload", handleReload);

    return () => {
      window.removeEventListener("beforeunload", handleReload);
    };
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      setProfile({});
    }
  }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h3 className="font-bold">User Logged in</h3>
          <div>
            <label className="input mt-2 input-bordered flex items-center gap-2 bg-zinc-300">
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
                value={profile ? profile.name : ""}
                readOnly
              />
            </label>
          </div>
          <div>
            <label className="mt-4 input input-bordered flex items-center gap-2 bg-zinc-300 ">
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
                value={profile ? profile.email : ""}
                readOnly
              />
            </label>
          </div>
          <button
            className="bg-white rounded-lg w-48 mt-4 shadow-md font-semibold hover:ring-4 ring-lime-600"
            onClick={logOut}
          >
            Log out
          </button>
        </div>
      ) : (
        <>
          <button
            className="bg-white rounded-lg w-48 h-8 shadow-md font-semibold flex flex-row mx-auto justify-center hover:ring-4 ring-lime-600"
            onClick={login}
          >
            <img src={googleIcon} className="size-5 mx-1 pt-0.5 my-auto"></img>
            <p className="my-auto ">Sign in with Google</p>
          </button>
        </>
      )}
    </div>
  );
};

export default GoogleLogIn;
