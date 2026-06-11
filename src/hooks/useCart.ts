import { useState } from "react";

type CartStats = {
  menu_id: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
};

const useCart = () => {
  const [cart, setCart] = useState<CartStats[]>([]);

  const handleAddToCart = (
    type: string,
    id: string,
    name: string,
    price: number,
  ) => {
    const existingItem = cart.find((item: CartStats) => item.menu_id === id);
    if (type === "increment") {
      if (existingItem) {
        setCart(
          cart.map((item: CartStats) =>
            item.menu_id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  total: item.price * (item.quantity + 1),
                }
              : item,
          ),
        );
      } else {
        setCart([
          ...cart,
          { menu_id: id, name, price, quantity: 1, total: price },
        ]);
      }
    } else {
      if (existingItem && existingItem.quantity <= 1) {
        setCart(cart.filter((item: CartStats) => item.menu_id !== id));
      } else {
        setCart(
          cart.map((item: CartStats) =>
            item.menu_id === id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                  total: item.total - item.price,
                }
              : item,
          ),
        );
      }
    }
  };

  return { cart, handleAddToCart };
};

export default useCart;
