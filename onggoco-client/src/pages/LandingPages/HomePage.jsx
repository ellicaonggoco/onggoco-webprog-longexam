import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';
import dailyessentials from '../../assets/img/DAILYESSENTIALS.avif';
import studysupplies from '../../assets/img/STUDYSUP.jpg';
import campusapparel from '../../assets/img/CAMPUSAPP.jpg';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-[#ffd600] bg-[#1a237e] px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1a237e]/45" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
                    <div className="max-w-xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ffd600]">
                            Campus Marketplace
                        </p>
                        <h1 className="text-7xl font-bold leading-tight text-white sm:text-6xl">
                            Welcome to BulldogEx Shop
                        </h1>
                        <p className="mt-4 text-sm leading-7 text-gray-200 sm:text-base">
                            Explore campus uniforms, student essentials, and school merch in one
                            quick storefront.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-end gap-5">
                            <Button to="/products" className="px-8 py-4 text-lg font-bold rounded-2xl">
                                Shop Now
                            </Button>
                            <Button to="/about" variant="primary" className="px-8 py-4 text-lg font-bold rounded-2xl">
                                About Store
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
                    <h2 className="mt-2 text-2xl font-semibold text-white">Quick shopping blocks</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl border-2 border-[#ffd600] bg-[#1a237e] p-5 shadow-sm hover:shadow-md transition">
                        <p className="text-2xl font-bold text-white">08</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffd600]">
                            Products
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-[#ffd600] bg-[#1a237e] p-5 shadow-sm hover:shadow-md transition">
                        <p className="text-2xl font-bold text-white">06</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffd600]">
                            Categories
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-[#ffd600] bg-[#1a237e] p-5 shadow-sm hover:shadow-md transition">
                        <p className="text-2xl font-bold text-white">24</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffd600]">
                            Orders
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-[#ffd600] bg-[#1a237e] p-5 shadow-sm hover:shadow-md transition">
                        <p className="text-2xl font-bold text-white">03</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffd600]">
                            Pickup Slots
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-[#ffd600] bg-[#f7fafc] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 rounded-2xl shadow-md my-6">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1a237e]">
                        Shop Sections
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#1a237e]">Product Categories</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <article className="rounded-3xl border-2 border-[#ffd600] bg-white p-4 shadow-sm hover:shadow-lg transition">
                                                <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-[#f7fafc] overflow-hidden mb-4">
                                                        <img
                                                            src={dailyessentials}
                                                            alt="Product"
                                                            className="object-cover w-full h-full"
                                                            style={{ minHeight: "120px" }}
                                                            onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/300x225?text=Image+Here'; }}
                                                        />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-[#1a237e]">Daily Essentials</h3>
                        <p className="mt-3 text-sm leading-6 text-[#1a237e]">
                            Bags, tumblers, lanyards, and items used every school day.
                        </p>
                        <Button to="/products" className="mt-6 px-7 py-3 text-lg font-bold rounded-2xl" variant="primary">View Products</Button>
                    </article>

                    <article className="rounded-3xl border-2 border-[#ffd600] bg-white p-4 shadow-sm hover:shadow-lg transition">
                                                <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-[#f7fafc] overflow-hidden mb-4">
                                                        <img
                                                            src={studysupplies}
                                                            alt="Product"
                                                            className="object-cover w-full h-full"
                                                            style={{ minHeight: "120px" }}
                                                            onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/300x225?text=Image+Here'; }}
                                                        />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-[#1a237e]">Study Supplies</h3>
                        <p className="mt-3 text-sm leading-6 text-[#1a237e]">
                            Notes, desk tools, and study kits for class and review weeks.
                        </p>
                        <Button to="/products" className="mt-6 px-7 py-3 text-lg font-bold rounded-2xl" variant="primary">Shop Supplies</Button>
                    </article>

                    <article className="rounded-3xl border-2 border-[#ffd600] bg-white p-4 shadow-sm hover:shadow-lg transition">
                                                <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-[#f7fafc] overflow-hidden mb-4">
                                                        <img
                                                            src={campusapparel}
                                                            alt="Product"
                                                            className="object-cover w-full h-full"
                                                            style={{ minHeight: "120px" }}
                                                            onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/300x225?text=Image+Here'; }}
                                                        />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-[#1a237e]">Campus Apparel</h3>
                        <p className="mt-3 text-sm leading-6 text-[#1a237e]">
                            Comfortable pieces for class days, commute days, and weekends.
                        </p>
                        <Button to="/products" className="mt-6 px-7 py-3 text-lg font-bold rounded-2xl" variant="primary">
                            View Apparel
                        </Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
