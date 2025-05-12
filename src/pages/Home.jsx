import { Link } from "react-router";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl h-screen flex flex-col justify-center items-center gap-3 mx-auto px-4 md:px-2">
        <div className="w-80 sm:w-96">
          <h1 className="text-blue-500 text-5xl sm:text-6xl font-extrabold text-center text-balance mb-4">
            Welcome to the Magic Store!
          </h1>
          <p className="text-gray-500 text-sm sm:text-[15px] text-center">
            Discover a wide range of products at unbeatable prices. Shop now and
            enjoy exclusive discounts!
          </p>
        </div>
        <Link to="/products" className="flex gap-1 bg-blue-500 text-white text-lg p-3 rounded-lg uppercase font-medium mt-4 transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30">
          view products
        </Link>
      </main>
    </>
  );
}

export default Home;
