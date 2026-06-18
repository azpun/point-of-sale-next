"use server";
import prisma from "@/lib/prisma";
import { OrderDataType } from "@/types/order";

export async function createOrder(orderData: OrderDataType) {
  // Implementation for creating an order
  try {
    const lastOrderId = await prisma.order.findFirst({
      orderBy: {
        id: "desc",
      },
      select: {
        id: true,
      },
    });
    console.log("Last Order ID:", lastOrderId?.id);
    if (!lastOrderId) {
    }
  } catch (error) {
    console.error("Error fetching last order ID:", error);
    throw new Error("Failed to fetch last order ID");
  }
}
