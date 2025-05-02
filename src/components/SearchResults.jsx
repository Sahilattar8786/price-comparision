import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import SkeletonCard from './SkeletonCard';
import { useState } from 'react';
import { fetchPrices } from '../../api';

export default function SearchResults() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const getProducts = async (query) => {
    try {
      setLoading(true);
      const data = await fetchPrices(query);
      setProducts(data);
      setCurrentPage(1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SearchBar query={query} setQuery={setQuery} fetchData={getProducts} />

      <div className="mb-8 mt-5">
        <h1 className="text-2xl font-bold text-gray-900">
          Search Results for: {query}
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={idx} />)
          : currentProducts.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
      </div>

      {!loading && totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx + 1)}
              className={`px-4 py-2 border rounded ${
                currentPage === idx + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-100'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}