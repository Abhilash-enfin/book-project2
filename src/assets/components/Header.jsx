import Search from "./Search";

export default function Header() {
  return (
    <>
      <header className="">
        <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-white-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt=" Logo"
              />
              <span className="self-center text-xl text-white font-semibold whitespace-nowrap dark:text-white">
                LOGO
              </span>
            </a>
            <div className="flex items-center ml-auto">
              <Search />

              <button className="relative inline-flex items-center p-2  rounded-lg">
                <span className="sr-only">User Menu</span>
                <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                  <span className="font-semibold text-white">Sinan AYDOĞAN</span>
                  <span className="text-sm text-gray-200">
                    Quality Engineer
                  </span>
                </div>
                <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src="https://randomuser.me/api/portraits/men/68.jpg"
                    alt="user profile photo"
                    className="h-full w-full object-cover"
                  />
                </span>

              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
