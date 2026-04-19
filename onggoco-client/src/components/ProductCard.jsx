import Button from "./Button";

const ProductCard = ({ product, index }) => {
  return (
    <article className="rounded-3xl border-2 border-[#ffd600] bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-[#f7fafc] overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-full rounded-[1.25rem]"
            style={{ minHeight: "120px", minWidth: "100%" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/150?text=No+Image";
            }}
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center border-2 border-[#ffd600] bg-white text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a237e]">
            Item
          </div>
        )}
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1a237e]">
        {product.category} {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-[#1a237e]">
        {product.title}
      </h3>
      <p className="mt-2 text-base font-bold text-[#1a237e]">{product.price}</p>
      <p className="mt-3 text-sm leading-6 text-[#1a237e]">
        {product.content[0].substring(0, 120)}...
      </p>
      <Button to={`/products/${product.name}`} className="mt-4">
        View Product
      </Button>
    </article>
  );
};

export default ProductCard;
