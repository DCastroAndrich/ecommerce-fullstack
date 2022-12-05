import Announcement from "../layouts/Announcement";
import Footer from "../layouts/Footer";
import NavBar from "../layouts/Navbar";
import CartProductCard from "../components/CartProductCard";

const Cart = () => {
  return (
    <div>
      {/* container */}
      <Announcement />
      <NavBar />

      {/* wrapper */}
      <div className="p-5">
        <h2 className="text-center text-2xl font-medium">YOUR BAG!</h2>

        {/* top */}
        <div className="flex items-center justify-between p-5">
          <button className="cursor-pointer rounded border border-violet-700 p-3 font-semibold hover:text-violet-700">
            CONTINUE SHOPPING
          </button>
          <div>
            <span className="mx-3 cursor-pointer underline decoration-solid">
              Shopping Bag (4)
            </span>
            <span className="mx-3 cursor-pointer underline decoration-solid">
              Your Wishlist (0)
            </span>
          </div>
          <button className="cursor-pointer rounded border border-violet-700 p-3 font-semibold hover:bg-violet-700 hover:text-white">
            CHECKOUT NOW
          </button>
        </div>

        {/* bottom */}
        <div className="flex justify-between">
          {/* info */}

          <div
            className="my-5 flex flex-col justify-around"
            style={{ flex: 3 }}
          >
            <CartProductCard />
            <CartProductCard />
          </div>

          {/* summary */}
          <div
            className="mx-5 h-[50vh] rounded border border-violet-600 p-5"
            style={{ flex: 1 }}
          >
            <h2 className="text-3xl font-light text-violet-700">
              ORDER SUMMARY
            </h2>
            <div className="my-5 flex justify-between">
              <span>Subtotal</span>
              <span>$ 50</span>
            </div>
            <div className="my-5 flex justify-between">
              <span>Shipping Cost</span>
              <span>$ 10</span>
            </div>
            <div className="my-5 flex justify-between">
              <span>Shipping Discount</span>
              <span>$ -10</span>
            </div>
            <div className="my-5 flex justify-between text-2xl font-medium text-violet-700">
              <span>Total</span>
              <span>$ 50</span>
            </div>

            <button className="w-full cursor-pointer rounded  border border-violet-700 bg-violet-700 p-3 font-semibold text-white hover:bg-white hover:text-black">
              CHECKOUT NOW
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
