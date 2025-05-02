import React from "react";

export default function SearchBar({ query, setQuery, fetchData }) {
  const handleSearch = () => {
    if (query.trim()) {
      fetchData(query); // ← this passes the query back to SearchResults
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center items-start pt-10 w-full">
      <div className="w-full max-w-xl px-4">
        <div className="flex shadow-lg rounded-full overflow-hidden border border-gray-300 bg-white">
          <input
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress} // triggers search on Enter key
            className="w-full px-6 py-3 text-base focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="px-6 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}