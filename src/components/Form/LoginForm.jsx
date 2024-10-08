import { Link, Form } from "react-router-dom";
import spinner from "../../assets/spinner.svg";

function LoginForm({ loading }) {
  return (
    <>
      <Form
        className="flex flex-col mx-auto max-w-[420px]"
        action="/login"
        method="post"
      >
        <h1 className="mb-5 font-bold text-lg text-neutral-900">
          Login to Your Account
        </h1>
        <label
          className="mb-2 font-semibold text-neutral-600 text-xs md:text-sm"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          autoComplete="off"
          name="email"
          placeholder="Enter your email"
          className="bg-neutral-50 p-2 md:p-3 focus:border-none rounded-lg ring-[1px] ring-gray-200 focus:ring-[1px] focus:ring-indigo-600/80 text-xs md:text-sm md:placeholder:text-sm placeholder:text-gray-300 placeholder:text-xs focus:outline-none"
        />{" "}
        <br />
        <div className="flex justify-between items-center mb-2">
          <label
            className="font-semibold text-neutral-600 text-xs md:text-sm"
            htmlFor="password"
          >
            Password
          </label>
        </div>
        <input
          type="password"
          className="bg-neutral-50 p-2 md:p-3 focus:border-none rounded-lg ring-[1px] ring-gray-200 focus:ring-[1px] focus:ring-indigo-600/80 text-xs md:text-sm md:placeholder:text-sm placeholder:text-gray-300 placeholder:text-xs focus:outline-none"
          name="password"
          placeholder="Enter your password"
        />
        <br />
        <button
          disabled={loading}
          className={`flex rounded-full ${
            !loading
              ? "bg-indigo-600 hover:bg-neutral-50 hover:text-indigo-600"
              : "bg-indigo-600/70 cursor-not-allowed"
          }  p-1 justify-center font-semibold md:font-bold text-base md:text-lg text-center  mb-3 transition text-white`}
          type="submit"
        >
          {loading ? (
            <div className="flex items-center">
              <img
                src={spinner}
                alt="spinner"
                className="mr-2 w-6 h-6 animate-spin object-contain"
              />
              <p className="font-normal text-neutral-50/80 text-sm">
                Loading...
              </p>
            </div>
          ) : (
            <span>Sign In</span>
          )}
        </button>
        <p className="mt-3 font-semibold text-gray-600 text-xs">
          Don't have account ?
          <Link className="ml-2 text-indigo-600" to={"/register"}>
            Sign Up
          </Link>{" "}
        </p>
      </Form>
    </>
  );
}

export default LoginForm;
