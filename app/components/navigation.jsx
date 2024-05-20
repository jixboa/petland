export default function HomeComponent() {
  return (
    <>
      <header class="bg-white fixed top-0 w-full shadow-md">
        <nav class="container mx-auto px-6 py-3">
          <div class="flex justify-between items-center">
            <a href="#" class="text-2xl font-bold text-gray-800">
              MyWebsite
            </a>
            <div class="hidden md:flex items-center space-x-4">
              <a href="#" class="text-gray-800 hover:text-blue-600">
                Home
              </a>
              <a href="#" class="text-gray-800 hover:text-blue-600">
                About
              </a>
              <a href="#" class="text-gray-800 hover:text-blue-600">
                Services
              </a>
              <a href="#" class="text-gray-800 hover:text-blue-600">
                Contact
              </a>
              <a href="#" class="bg-blue-600 text-white px-4 py-2 rounded-md">
                Sign Up
              </a>
            </div>
            <div class="md:hidden flex items-center">
              <button class="text-gray-800 focus:outline-none">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-4">
            {/* <div class="flex items-center space-x-2">
              <input
                type="search"
                placeholder="Search"
                class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600 w-full"
              />
              <button class="bg-blue-600 text-white px-4 py-2 rounded-md">
                Search
              </button>
            </div> */}
          </div>
        </nav>
      </header>
    </>
  );
}
