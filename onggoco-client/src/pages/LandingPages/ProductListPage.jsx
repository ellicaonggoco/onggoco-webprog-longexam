import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-[#ffd600] bg-[#1a237e] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 rounded-2xl shadow-md my-6">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ffd600]">
          Products
        </p>
        <h1 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
          Shop campus essentials in a simple product grid
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-white sm:text-base">
          Browse practical items for class, study, commute, and everyday campus routines.
        </p>
        <div className="mt-6">
          <Button to="/" className="border-[#ffd600] text-[#1a237e] bg-[#ffd600] hover:bg-[#ffea00]">Back Home</Button>
        </div>
      </section>

      <section className="border-y-2 border-[#ffd600] bg-[#f7fafc] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 rounded-2xl shadow-md my-6">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1a237e]">
            Featured Products
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#1a237e]">Product card grid</h2>
        </div>

        <ProductList products={products} />
      </section>
    </div>
  );
}

export default ProductListPage
