export default function Counter() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-4 lg:gap-8">
        <div className="flex flex-col items-start gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
            <UsersIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
          <div className="text-2xl font-bold">1,234</div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Clients
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
            <DollarSignIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
          <div className="text-2xl font-bold">$987,654</div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Revenue
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
            <BriefcaseIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
          <div className="text-2xl font-bold">78</div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Team Members
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
            <ShoppingBagIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
          <div className="text-2xl font-bold">$456,789</div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Sales
          </div>
        </div>
      </div>
    </section>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function ShoppingBagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
