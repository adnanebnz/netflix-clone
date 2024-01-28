export default function CardSkeleton() {
  return (
    <section>
      <div className="mx-auto animate-pulse">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
          <div className="w-full ">
            <div className="w-full h-64 bg-gray-300 rounded-sm dark:bg-gray-600"></div>

            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-sm dark:bg-gray-700"></h1>
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-sm dark:bg-gray-700"></p>
          </div>

          <div className="w-full ">
            <div className="w-full h-64 bg-gray-300 rounded-sm dark:bg-gray-600"></div>

            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-sm dark:bg-gray-700"></h1>
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-sm dark:bg-gray-700"></p>
          </div>

          <div className="w-full ">
            <div className="w-full h-64 bg-gray-300 rounded-sm dark:bg-gray-600"></div>

            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-sm dark:bg-gray-700"></h1>
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-sm dark:bg-gray-700"></p>
          </div>
          <div className="w-full ">
            <div className="w-full h-64 bg-gray-300 rounded-sm dark:bg-gray-600"></div>

            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-sm dark:bg-gray-700"></h1>
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-sm dark:bg-gray-700"></p>
          </div>
        </div>
      </div>
    </section>
  );
}
