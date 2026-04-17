import Button from '../components/Button';


const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-8 items-center justify-center min-h-[80vh] bg-gradient-to-br from-[#f7fafc] to-[#e3e8f0] py-10">
      <section className="w-full max-w-2xl rounded-3xl shadow-xl border-2 border-[#ffd600] bg-white px-6 py-10 flex flex-col items-center text-center">
        <div className="flex flex-col items-center">
          <div className="mb-4 flex items-center justify-center">
            {/* Icon: Exclamation or custom SVG */}
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#ffd600"/>
              <path d="M12 7v5" stroke="#1a237e" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="16" r="1.2" fill="#1a237e"/>
            </svg>
          </div>
          <h1 className="text-7xl font-extrabold text-[#ffd600] drop-shadow-sm">404</h1>
          <p className="mt-2 text-xl font-semibold text-[#1a237e]">Oops! Page Not Found</p>
          <p className="mt-2 text-base text-[#1a237e] max-w-md">
            Sorry, the page you’re looking for doesn’t exist, was moved, or is temporarily unavailable.<br />
            Let’s get you back on track!
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full justify-center">
            <Button to="/">Back to Home</Button>
            <Button to="/products">Browse Products</Button>
          </div>
        </div>
      </section>

      <section className="w-full max-w-2xl rounded-3xl border-2 border-[#1a237e] bg-[#f7fafc] px-6 py-8 mt-2 shadow-md">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1a237e] mb-2">
            Quick Links
          </p>
          <h2 className="text-2xl font-bold text-[#ffd600] mb-4">Explore the site</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border-2 border-[#ffd600] bg-white p-5 flex flex-col items-center shadow-sm">
              <h3 className="font-semibold text-[#1a237e] text-lg">Home</h3>
              <p className="mt-1 text-sm text-[#1a237e]">Return to the homepage</p>
              <Button to="/" className="mt-3">Go Home</Button>
            </div>
            <div className="rounded-2xl border-2 border-[#ffd600] bg-white p-5 flex flex-col items-center shadow-sm">
              <h3 className="font-semibold text-[#1a237e] text-lg">Products</h3>
              <p className="mt-1 text-sm text-[#1a237e]">Browse all featured store items</p>
              <Button to="/products" className="mt-3">View Products</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage
