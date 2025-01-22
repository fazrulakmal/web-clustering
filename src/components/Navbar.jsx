import { BellIcon, SearchIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <header className="shadow-md bg-gray-800 text-white">
      <div className="flex items-center justify-between space-x-9 p-4">
        <div className="flex items-center space-x-4">
          <a className="text-lg font-semibold" href="/" >Clustering Web</a>
        </div>
        <div className="flex flex-1 space-x-6">
          <a
            href="/inputdata"
            className="p-2 hover:bg-gray-700 rounded-md font-medium"
          > Input Data</a>
          <a
            href="/hasil"
            className="p-2 hover:bg-gray-700 rounded-md font-medium"
          > Hasil</a>
        </div>
        <div className="flex items-center space-x-4">
          <form className="relative">
            <SearchIcon className="absolute top-2.5 left-3 h-5 w-5" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-md bg-gray-700"
            />
          </form>
          <button className="p-2 rounded-full bg-gray-700">
            <BellIcon className="h-6 w-6 " />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
