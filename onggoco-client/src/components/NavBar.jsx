import { NavLink } from "react-router-dom";
import logo from "../assets/img/nubdexchange_logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
];

const navLinkClassName = ({ isActive }) =>
  [
    "no-underline hover:no-underline rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition focus:outline-none focus:ring-2 focus:ring-[#ffd600]",
    isActive
      ? "border-[#ffd600] bg-[#ffd600] text-[#1a237e] shadow-md"
      : "border-transparent text-white hover:border-[#ffd600] hover:bg-[#ffd600]/80 hover:text-[#1a237e]",
  ].join(" ");

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[#ffd600] bg-[#1a237e]/95 backdrop-blur shadow-lg">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-w-0">
          <NavLink
            to="/"
            className="flex items-center gap-3 group no-underline hover:no-underline"
          >
            <span className="relative flex items-center justify-center h-11 w-11">
              <img
                src={logo}
                alt="BulldogEx"
                className="h-11 w-11 rounded-full border-2 border-[#ffd600] bg-white object-contain shadow-md group-hover:scale-105 transition"
              />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-[#ffd600] border-2 border-white"></span>
            </span>
            <div className="space-y-0.5">
              <p className="text-2xl font-black text-[#ffd600] drop-shadow-sm leading-tight tracking-tight">
                BulldogEx <span className="text-white">Shop</span>
              </p>
              <span className="block text-[13px] font-medium text-[#ffd600] tracking-wide leading-tight">
                National University
              </span>
            </div>
          </NavLink>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center gap-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={navLinkClassName}
            >
              <span className="tracking-wider text-base font-bold">
                {link.label}
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 ml-4">
          <NavLink
            to="/auth/signin"
            className={({ isActive }) =>
              [
                "no-underline hover:no-underline rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition focus:outline-none focus:ring-2 focus:ring-[#ffd600]",
                isActive
                  ? "border-white bg-white text-[#1a237e] shadow-md"
                  : "border-[#ffd600] text-white hover:bg-[#ffd600] hover:text-[#1a237e]",
              ].join(" ")
            }
          >
            <span className="tracking-wider text-base font-bold">Sign In</span>
          </NavLink>

          <NavLink
            to="/auth/signup"
            className={({ isActive }) =>
              [
                "no-underline hover:no-underline rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition focus:outline-none focus:ring-2 focus:ring-[#ffd600]",
                isActive
                  ? "border-white bg-white text-[#1a237e] shadow-md"
                  : "border-[#ffd600] text-white hover:bg-[#ffd600] hover:text-[#1a237e]",
              ].join(" ")
            }
          >
            <span className="tracking-wider text-base font-bold">Sign Up</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
