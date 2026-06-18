"use client";
import { OrderDataType, OrderMenuType } from "@/types/order";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createOrder } from "@/services/order.service";

export const useCreateOrder = (cartData: OrderMenuType[]) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleCreateOrder = async (
    formEvent: React.FormEvent<HTMLFormElement>,
  ) => {
    formEvent.preventDefault();
    const formData = formEvent.target as HTMLFormElement;
    const orderData: OrderDataType = {
      customerName: formData.customerName.value,
      totalPrice: cartData.reduce((total, item) => total + item.total, 0),
      status: formData.status.value,
      orderItems: cartData,
    };

    // const lastOrderId = await prisma.order.findFirst({
    //   orderBy: {
    //     id: "desc",
    //   },
    //   select: {
    //     id: true,
    //   },
    // });

    // console.log("Last Order ID:", lastOrderId?.id);

    // await prisma.order.create({
    //   data: {
    //     customerName: orderData.customerName,
    //     totalPrice: orderData.totalPrice,
    //     Status: orderData.status,
    //     orderCode: `ORD-`,
    //     orderItems: {},
    //   },
    // });

    setLoading(true);
    await createOrder(orderData);
    router.push("/");
    console.log("Submitting order data:", orderData);
  };
  return { handleCreateOrder, loading };
};
