import { Outlet } from "react-router-dom";
import nubdexchangeLogo from "../assets/img/nubdexchange_logo.png";

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="flex items-center justify-center border-b-2 border-zinc-300 bg-[#1a237e] p-8 sm:p-10 lg:border-b-0 lg:border-r-15 lg:border-zinc-900 lg:p-16">
          <img
            src={nubdexchangeLogo}
            alt="Authentication"
            className="w-full max-w-md rounded-15 xl object-cover"
          />
        </div>

        <main className="flex items-center bg-[#eef2ff] px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
