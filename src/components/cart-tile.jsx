import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";

export default function CartTile({ item }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(item.id));
  }

  return (
    <>
      <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
        <div className="flex p-3 ">
          <img
            src={item?.image}
            alt={item?.title}
            className="h-28 rounded-lg"
          />
          <div className="ml-10  self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{item?.title}</h1>
            <p className="text-white font-extrabold ">{item?.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-950 text-white border-2 rounded-lg font-medium p-2"
          >
            Remove from cart
          </button>
        </div>
      </div>
    </>
  );
}
