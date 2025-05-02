import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative">
      {/* Banner Section */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find the Best Prices
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-indigo-100">
              Compare prices across multiple stores and save money on your purchases
            </p>
            <div className="mt-10">
              <Link
                to="/search"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Start Comparing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">Real-time Prices</h3>
              <p className="mt-2 text-base text-gray-500">
                Get the most up-to-date prices from multiple retailers
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">Price History</h3>
              <p className="mt-2 text-base text-gray-500">
                Track price changes over time to find the best deals
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">Price Alerts</h3>
              <p className="mt-2 text-base text-gray-500">
                Get notified when prices drop to your target
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 