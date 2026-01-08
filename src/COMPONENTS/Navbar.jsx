import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-cover bg-center bg-no-repeat border-b  bg-black">
      {/* Dark overlay for better text contrast */}

      <div className="relative z-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          
            
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link
                  to="/"
                  className="text-white hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 transition duration-300 font-bold"
                >
                  Home
                </Link>
                <Link
                  to="/players"
                  className="text-white hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 transition duration-300 font-bold"
                >
                  Purchase-Avatar
                </Link>
                <Link
                  to=""
                  className="text-white hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 transition duration-300 font-bold"
                >
                  Live
                </Link>
                <Link className="text-white hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 transition duration-300 font bold">
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
