import Ammount from "./Ammount"

const CartProductCard = () => {
  return (
    <>
      <div className="my-3 flex justify-between ">
        {/* DETAILS product card */}
        <div className="flex" style={{ flex: 2 }}>
          {/* cardImage */}
          <img
            className="w-52"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-zapatillas-GjGXSP.png"
          />
          {/* cardDetails */}
          <div className="flex flex-col justify-around p-5">
            <span>
              <b>Name: </b>Nike Air Force 1
            </span>
            <span>
              {" "}
              <b>ID: </b>646546546548{" "}
            </span>
            <div className="mx-1 h-5 w-5 rounded-full border bg-white"></div>
            <span>
              <b>Size: </b> 11
            </span>
          </div>
        </div>

        {/* price */}
        <div
          className="flex flex-col items-center justify-center"
          style={{ flex: 1 }}
        >
          <div className="mb-5 flex items-center ">
            <Ammount />
          </div>
          <div className="text-xl font-medium">$ 50</div>
        </div>
      </div>
      <hr className="h-[0.5px] bg-violet-600 border-none mt-[0.1px] "/>
    </>
  );
};

export default CartProductCard;
