import ProductCard from "./ProductCard";
import type { Product } from "../types";

function ProductGrid({ products, idList }: { products: Product[], idList: number[] }) {
  return (
    <div className="gap-4 md:gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-4">
      {products.map(function (item) {
        return <ProductCard key={item.id} {...item} contextIdList={idList} />;
      })}
    </div>
  );
}

export default ProductGrid;
