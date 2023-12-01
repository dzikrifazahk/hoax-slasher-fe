import Link from "next/link";
import ContinueWithGoogle from "@/components/continueWithGoogle";

export default function Login() {
  return (
    <>
      <div className="p-8 rounded w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium font-bold"
            >
              email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full rounded-2xl bg-white shadow-sm outline-blue-800 outline focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium font-bold"
            >
              password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full rounded-2xl bg-white shadow-sm outline-blue-800 outline focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>
          <button
            type="submit"
            className="bg-primaryColor text-white p-2 w-full rounded-2xl hover:bg-blue-800 transition duration-300"
          >
            SUBMIT
          </button>
        </form>
        <div className="text-center mt-2">
          <span>
            Do you have an account?
            <Link href="/register">
              <strong className="text-green-800"> Sign Up</strong>
            </Link>
          </span>
        </div>
        <div className="flex items-center justify-center my-6">
          <div className="border-t border-black flex-grow"></div>
          <span className="mx-4 text-gray-500">OR</span>
          <div className="border-t border-black flex-grow"></div>
        </div>
        <ContinueWithGoogle></ContinueWithGoogle>
      </div>
    </>
  );
}
