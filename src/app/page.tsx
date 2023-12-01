import Image from "next/image";
import Navbar from "./navbar";
import LatestNewsCard from "@/components/fragments/latest_news";
import NewsGrid from "@/components/layouts/new_grid";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main className="flex min-h-screen flex-col p-24">
        <div className="container mx-auto">
          <div className="justify-content-center align-items-center text-center mt-20">
            <span>Enter the link/keyword to identify</span>
            <form>
              <div className="flex justify-center mt-4">
                <input
                  type="text"
                  className="ml-20 mx-3 rounded-2xl bg-white shadow-sm outline-blue-800 outline focus:outline-none focus:ring-2 focus:ring-blue-800 w-96"
                />

                <button className="bg-primaryColor text-white rounded-2xl py-2 px-4">
                  Check
                </button>
              </div>
              <span className="text-gray-500 mt-4">
                Ex: www.Beritaviral.com or Berita Terpercaya
              </span>
            </form>
          </div>

          <div className="mt-20">
            <NewsGrid />
          </div>
        </div>
      </main>
    </>
  );
}
