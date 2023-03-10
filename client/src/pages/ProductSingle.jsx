import AddToCartContainer from "../layouts/AddToCartContainer";
import FilterSingleContainer from "../layouts/FilterSingleContainer";

const ProductSingle = () => {
  return (
    <div>
      <div className="flex p-14">
        {/* IMG AND INFO CONTAINER */}
        <div className="flex-1">
          <img
            className="h-11/12 w-full"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-zapatillas-GjGXSP.png"
          />
        </div>
        <div className="flex-1 px-14">
          <h2 className="text-4xl font-extralight">Nike Air Force 1</h2>
          <p className="my-5">
            El fulgor sigue vivo en las Nike Air Force 1 '07, un modelo original
            de baloncesto que introduce un nuevo giro a sus ya característicos
            revestimientos con costuras duraderas, sus acabados impecables y la
            cantidad perfecta de reflectante.
          </p>
          <span className="text-4xl font-thin">$ 100</span>

          <FilterSingleContainer />

          <AddToCartContainer />
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
