"use server";
import prisma from "@/lib/prisma";

export async function postMenuItems(formData: FormData) {
  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));
  const imageUrl = formData.get("imageUrl") as string;
  const description = formData.get("description") as string;

  try {
    await prisma.menu.create({
      data: {
        name: name,
        price: price,
        stock: stock,
        imageUrl: imageUrl,
        description: description,
      },
    });
    console.log("Menu item created successfully");
  } catch (error) {
    console.error("Error creating menu item:", error);
    throw new Error("Failed to create menu item");
  }
}
