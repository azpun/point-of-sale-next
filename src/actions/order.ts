"use server";
import prisma from "@/lib/prisma";
import { OrderMenuType } from "@/types/order";

export async function postOrder(
  formData: FormData,
  // orderItemsData: OrderMenuType[],
) {
  const customerName = formData.get("customerName") as string;
  const totalPrice = Number(formData.get("totalPrice"));
  const status = formData.get("status") as
    | "Antrian"
    | "Diproses"
    | "Selesai"
    | "Batal";
  // const orderItems = orderItemsData;
  console.log("Received order data:", {
    customerName,
    totalPrice,
    status,
    // orderItems,
  });
}
