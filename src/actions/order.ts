"use server";
import prisma from "@/lib/prisma";

export async function postOrder(formData: FormData) {
  const customerName = formData.get("customerName") as string;
  const totalPrice = Number(formData.get("totalPrice"));
  const status = formData.get("status") as
    | "Antrian"
    | "Diproses"
    | "Selesai"
    | "Batal";
}
