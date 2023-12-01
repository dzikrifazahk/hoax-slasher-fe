import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex fixed top-0 right-0 left-0 bg-blue-800 py-4 px-5 justify-between">
      <h1 className="text-white text-2xl">
        BERI<span className="text-blue-400">TAMA</span>
      </h1>
      <ul className="flex ml-80">
        <li className="mr-6 text-white cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-6 text-white cursor-pointer">
          <Link href="/news">News</Link>
        </li>
      </ul>
      <Link href="/signup" className="text-white cursor-pointer">
        Sign Up
      </Link>
    </nav>
  );
}
