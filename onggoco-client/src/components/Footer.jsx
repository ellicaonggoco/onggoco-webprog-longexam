import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-[#ffd600] bg-[#1a237e] px-4 py-8 sm:px-6 lg:px-8 text-center sm:text-left">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          <h2 className="text-lg font-bold tracking-tight text-[#ffd600]">
            National University Shop <span className="text-white">| Campus Essentials</span>
          </h2>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
            Simple ordering.
          </p>
        </div>

        <div className="text-center sm:text-right">
          <p className="text-[15px] text-[#ffd600] font-semibold">
            © 2026 BulldogEx
          </p>
          <nav className="mt-1 flex flex-wrap gap-3 justify-center sm:justify-end">
            <a href="/products" className="text-amber-300 hover:text-white transition">Products</a>
            <a href="/cart" className="text-amber-300 hover:text-white transition">Cart</a>
            <a href="/pickup" className="text-amber-300 hover:text-white transition">Pickup</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
