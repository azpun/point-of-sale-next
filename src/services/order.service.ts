"use server";
import prisma from "@/lib/prisma";
import { OrderDataType } from "@/types/order";
import { randomBytes } from "crypto";

export async function createOrder(orderData: OrderDataType) {
  // Implementation for creating an order
  try {
    const shortId = randomBytes(2).toString("hex").toUpperCase();
    const orderCodeGen = `ORD-${shortId}`;

    // Ensure the generated order code is unique
    let orderCode = orderCodeGen;
    let isUnique = false;

    while (!isUnique) {
      const existingOrder = await prisma.order.findUnique({
        where: { orderCode },
      });

      if (!existingOrder) {
        isUnique = true;
      } else {
        // Regenerate the order code if it already exists
        const newShortId = randomBytes(2).toString("hex").toUpperCase();
        orderCode = `ORD-${newShortId}`;
      }
    }

    await prisma.order.create({
      data: {
        customerName: orderData.customerName,
        totalPrice: orderData.totalPrice,
        status: orderData.status,
        orderCode: orderCode,

        ...(orderData.orderItems &&
          orderData.orderItems.length > 0 && {
            orderItems: {
              createMany: {
                data: orderData.orderItems.map(item => {
                  return {
                    menuId: item.menu_id,
                    price: item.price,
                    quantity: item.quantity,
                  };
                }),
              },
            },
          }),
      },
    });
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("Gagal membuat pesanan.");
  }
}
