import { Link } from "react-router-dom";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-xl border-2 border-[#ffd600] bg-white px-4 py-3 text-sm text-[#1a237e] outline-none transition placeholder:text-[#1a237e]/50 focus:border-[#1a237e] focus:bg-[#f7fafc]";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignUpPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-[#1a237e] sm:text-4xl">
        Sign Up
      </h1>

      <p className="mt-3 text-sm leading-6 text-[#1a237e]">
        Create a store account for faster checkout, order updates, and pickup
        details.
      </p>

      <nav className="mt-6 mb-2 text-center">
        <span className="text-[#1a237e]">Already have an account?</span>{" "}
        <Link
          to="/signin"
          className="font-semibold text-[#ffd600] hover:underline focus:outline-none focus:ring-2 focus:ring-[#ffd600] rounded px-1"
        >
          Sign In
        </Link>
      </nav>

      {/* FORM CONTAINER */}
      <form className="mt-8 space-y-5 bg-white border-2 border-[#ffd600] p-6 rounded-3xl shadow-md">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="text-sm font-medium text-[#1a237e]"
            >
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="text-sm font-medium text-[#1a237e]"
            >
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="signup-email"
            className="text-sm font-medium text-[#1a237e]"
          >
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="signup-password"
            className="text-sm font-medium text-[#1a237e]"
          >
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-[#1a237e]/70">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        {/* PRIMARY BUTTON */}
        <Button
          to="/auth/signin"
          type="submit"
          variant="primary"
          className={actionButtonClassName}
        >
          Create Account
        </Button>

        {/* SOCIAL BUTTONS */}
        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Sign Up with Google
          </Button>

          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Sign Up with Apple
          </Button>
        </div>
      </form>

      {/* FOOTER */}
      <div className="mt-8 border-t border-[#ffd600] pt-6 text-sm text-[#1a237e]">
        Already have an account?{" "}
        <Link
          to="/auth/signin"
          className="font-semibold text-[#1a237e] hover:text-[#ffd600] transition"
        >
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
