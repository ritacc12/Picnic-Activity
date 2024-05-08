import { Link } from "react-scroll";

export default function Navbar() {
  // Defining functions to perform different types of scrolling.
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="relative h-16">
        <div className="navbar bg-[#72A603] fixed inset-x-0 top-0 h-8 z-10">
          <div className="navbar-center">
            <div className="dropdown text-[#faffe5]">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-[#72A603]"
              >
                <li>
                  <Link
                    to="activity"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className="navItem text-white hover:bg-[#5a8308] font-bold"
                  >
                    關於活動
                  </Link>
                </li>
                <li>
                  <Link
                    to="schedule"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className="navItem text-white hover:bg-[#5a8308]  font-bold"
                  >
                    活動時程
                  </Link>
                </li>
                <li>
                  <Link
                    to="traffic"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className="navItem text-white hover:bg-[#5a8308]  font-bold"
                  >
                    交通資訊
                  </Link>
                </li>

                <li>
                  <Link
                    to="registration"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className="navItem text-white hover:bg-[#5a8308]  font-bold"
                  >
                    立即報名
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              to="/"
              className="btn btn-ghost text-3xl text-[#faffe5]"
              onClick={scrollTop}
            >
              <img
                src="/pictures/face-smile-solid.svg"
                className="size-7"
              ></img>
              2024 野餐祭
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link
                  to="activity"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  className="navItem text-white hover:bg-[#5a8308]  font-bold"
                >
                  關於活動
                </Link>
              </li>
              <li>
                <Link
                  to="schedule"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  className="navItem text-white  hover:bg-[#5a8308]  font-bold "
                >
                  活動時程
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="traffic"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  className="navItem text-white hover:bg-[#5a8308]  font-bold"
                >
                  交通資訊
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="registration"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  className="navItem text-white hover:bg-[#5a8308]  font-bold"
                >
                  立即報名
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
