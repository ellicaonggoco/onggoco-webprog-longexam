import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js'

function ProductPage() {
  const { name } = useParams();
  const product = products.find(product => product.name === name);

  if (!product) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-[#ffd600] bg-[#f7fafc] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 rounded-2xl shadow-md my-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-[#1a237e]">Product not found</h1>
            <Button to="/products" className="mt-6">Back to Products</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      
      <section className="border-y-2 border-[#ffd600] bg-[#f7fafc] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 rounded-2xl shadow-md my-6">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Button to="/products">Back to Products</Button>
          </div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1a237e]">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold leading-tight text-[#1a237e] sm:text-4xl">
            {product.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-[#1a237e]">
            <span className="font-bold text-[#1a237e]">{product.price}</span>
            <span>{product.stock}</span>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#ffd600] bg-[#f7fafc] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 rounded-2xl shadow-md my-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex aspect-4/3 items-center justify-center rounded-[1.25rem] border-2 border-[#ffd600] bg-[#f7fafc] overflow-hidden">
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full rounded-[1.25rem]"
                style={{ minHeight: "180px", minWidth: "100%" }}
                onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/300?text=No+Image'; }}
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center border-2 border-[#ffd600] bg-white text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1a237e]">
                Item
              </div>
            )}
          </div>

          <div className="prose prose-sm max-w-none space-y-4 text-[#1a237e]">
            {product.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-7 text-[#1a237e] whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t-2 border-[#ffd600] pt-6">
            <Button variant="primary" className="mr-3">Add to Cart</Button>
            <Button to="/products">Back to Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
