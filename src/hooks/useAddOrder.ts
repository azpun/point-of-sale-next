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
    const data = {
      customerName: formData.customerName.value,
      totalPrice: cartData.reduce((total, item) => total + item.total, 0),
      status: formData.status.value,
      orderItems: cartData,
    };
    setLoading(true);
    router.push("/");
    console.log("Submitting order data:", data);
  };
  return { handleCreateOrder, loading };
};
