import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <span>Enter the link/keyword to identity</span>
        <div className="flex justify-center mt-4">
          <form className="w-full">
            <div className="flex mb-4">
              <input
                type="text"
                // placeholder="Your name"
                className="rounded-2xl bg-white shadow-sm outline-blue-800 outline focus:outline-none focus:ring-2 focus:ring-blue-800"
              />

              <button className="ml-4 bg-blue-800 text-white rounded-md py-2 px-4">
                Check
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
