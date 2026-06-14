import { OrderMenuType } from "@/types/order";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const useCreateOrder = (cartData: OrderMenuType[]) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleCreateOrder = async (
    formEvent: React.FormEvent<HTMLFormElement>,
  ) => {
    formEvent.preventDefault();
    const formData = formEvent.target as HTMLFormElement;
    const orderData = {
      customerName: formData.customerName.value,
      totalPrice: cartData.reduce((total, item) => total + item.total, 0),
      status: formData.status.value,
      orderItems: cartData,
    };
    const orderItemsData = cartData.map(item => ({
      menu_id: item.menu_id,
      quantity: item.quantity,
      price: item.price,
    }));
    setLoading(true);
    router.push("/");
    console.log("Submitting order data:", orderData);
    console.log("Submitting order items data:", orderItemsData);
  };
  return { handleCreateOrder, loading };
};
