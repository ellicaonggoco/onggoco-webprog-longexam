import Button from "../../components/Button";
import logo from "../../assets/img/nubdexchange_logo.png";
import bulldogex from "../../assets/img/BULLDOGEXCHANGE.jpg";
import nubull1 from "../../assets/img/nubull1.jpg";
import nubull2 from "../../assets/img/nubull2.jpg";
import nubull3 from "../../assets/img/nubull3.jpg";
import nubull4 from "../../assets/img/nubull4.jpg";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-[#ffd600] bg-[#f7fafc] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 rounded-2xl shadow-md my-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-[#ffd600] bg-white p-6 shadow-sm">
            <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-[#f7fafc] overflow-hidden">
              <img
                src={bulldogex}
                alt="BulldogEx"
                className="max-w-full max-h-full object-contain rounded-[1.25rem]"
              />
            </div>
          </div>

          <div>
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.32em] text-[#1a237e] letter-spacing-wide">
              About Store
            </p>
            <h1 className="max-w-xl text-5xl font-black leading-tight text-[#1a237e] sm:text-6xl mb-4">
              A campus shop focused on useful products and simple ordering.
            </h1>
            <p className="mt-2 max-w-lg text-lg leading-8 text-[#1a237e] sm:text-xl font-medium">
              BulldogEx Shop keeps you from hassle shopping while presenting
              clear product categories, quick actions, and straightforward store
              information.
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              <Button
                to="/"
                variant="primary"
                className="px-8 py-4 text-lg font-bold rounded-2xl"
              >
                Back Home
              </Button>
              <Button
                to="/products"
                className="px-8 py-4 text-lg font-bold rounded-2xl"
              >
                Open Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#ffd600] bg-[#1a237e] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 rounded-2xl shadow-md my-6">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ffd600]">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Quick store blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-[#ffd600] bg-[#1a237e] p-5 shadow-sm hover:shadow-md transition">
            <p className="text-2xl font-bold text-white">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffd600]">
              Items
            </p>
          </div>
          <div className="rounded-3xl border-2 border-[#ffd600] bg-[#1a237e] p-5 shadow-sm hover:shadow-md transition">
            <p className="text-2xl font-bold text-white">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffd600]">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border-2 border-[#ffd600] bg-[#1a237e] p-5 shadow-sm hover:shadow-md transition">
            <p className="text-2xl font-bold text-white">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffd600]">
              Pickup Slots
            </p>
          </div>
          <div className="rounded-3xl border-2 border-[#ffd600] bg-[#1a237e] p-5 shadow-sm hover:shadow-md transition">
            <p className="text-2xl font-bold text-white">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffd600]">
              Orders
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#ffd600] bg-[#f7fafc] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 rounded-2xl shadow-md my-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1a237e]">
              Store Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#1a237e]">
              Stacked shopping wireframe
            </h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-[#ffd600] bg-white p-5 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-[#1a237e]">
                  Curated Catalog
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#1a237e]">
                  Products are grouped by daily need so shoppers can scan
                  faster.
                </p>
                <p className="mt-3 text-s leading-6 text-[#1a237e]">
                  The BulldogEx Shop is designed with a stacked shopping
                  wireframe that streamlines the entire campus shopping
                  experience. Our curated catalog organizes products by daily
                  needs, making it easy for students to quickly find essentials
                  without endless searching. Each product page features a simple
                  checkout process, keeping prices, stock information, and
                  action buttons clear and accessible for fast, hassle-free
                  purchases. With pickup-ready features, store information and
                  order updates are always direct and easy to access, ensuring
                  students can manage their orders efficiently and stay informed
                  every step of the way.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-[#ffd600] bg-white p-5 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-[#1a237e]">
                  Simple Checkout
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#1a237e]">
                  Product pages keep price, stock, and action buttons easy to
                  find.
                </p>
                <p className="mt-3 text-s leading-6 text-[#1a237e]">
                  The BulldogEx Shop is designed with a stacked shopping
                  wireframe that streamlines the entire campus shopping
                  experience. Our curated catalog organizes products by daily
                  needs, making it easy for students to quickly find essentials
                  without endless searching. Each product page features a simple
                  checkout process, keeping prices, stock information, and
                  action buttons clear and accessible for fast, hassle-free
                  purchases. With pickup-ready features, store information and
                  order updates are always direct and easy to access, ensuring
                  students can manage their orders efficiently and stay informed
                  every step of the way.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-[#ffd600] bg-white p-5 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-[#1a237e]">
                  Pickup Ready
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#1a237e]">
                  Store information stays direct for students who need quick
                  order updates.
                </p>
                <p className="mt-3 text-s leading-6 text-[#1a237e]">
                  The BulldogEx Shop is designed with a stacked shopping
                  wireframe that streamlines the entire campus shopping
                  experience. Our curated catalog organizes products by daily
                  needs, making it easy for students to quickly find essentials
                  without endless searching. Each product page features a simple
                  checkout process, keeping prices, stock information, and
                  action buttons clear and accessible for fast, hassle-free
                  purchases. With pickup-ready features, store information and
                  order updates are always direct and easy to access, ensuring
                  students can manage their orders efficiently and stay informed
                  every step of the way.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-[#ffd600] bg-white p-5 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1a237e]">
              Category Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-[#f7fafc] overflow-hidden mb-2">
                <img
                  src={nubull1}
                  alt="Category"
                  className="object-cover w-full h-full"
                  style={{ minHeight: "80px" }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/150?text=Image+Here";
                  }}
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-[#f7fafc] overflow-hidden mb-2">
                <img
                  src={nubull2}
                  alt="Category"
                  className="object-cover w-full h-full"
                  style={{ minHeight: "80px" }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/150?text=Image+Here";
                  }}
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-[#f7fafc] overflow-hidden mb-2">
                <img
                  src={nubull3}
                  alt="Category"
                  className="object-cover w-full h-full"
                  style={{ minHeight: "80px" }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/150?text=Image+Here";
                  }}
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-[#f7fafc] overflow-hidden mb-2">
                <img
                  src={nubull4}
                  alt="Category"
                  className="object-cover w-full h-full"
                  style={{ minHeight: "80px" }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/150?text=Image+Here";
                  }}
                />
              </div>
            </div>
            <Button
              to="/products"
              className="mt-5 px-8 py-4 text-lg font-bold rounded-2xl"
            >
              View Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
