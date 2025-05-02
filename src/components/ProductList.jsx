import ProductCard from './ProductCard'

export default function ProductList({ products }) {
  if (!products.length) {
    return (
      <div className="text-center mt-8 text-gray-500">
        No products found. Try searching for something!
      </div>
    )
  }

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
} 