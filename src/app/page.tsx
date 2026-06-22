import { Card } from "@/components/Card";
import prisma from "@/lib/prisma";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const orders = await prisma.order.findMany({});
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg md:text-xl font-bold">Daftar Pesanan</h2>
            <div>
              <Link href="/menus">
                <button className="hidden md:flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Tambah Pesanan
                </button>
              </Link>
            </div>
          </div>

          {/* mobile version */}
          <div className="w-full flex flex-col gap-4 md:hidden">
            {orders.map(order => {
              return (
                <Card key={order.id} className="max-w-131.25">
                  <div className="p-4 flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm">{order.orderCode}</p>
                      <h3 className="font-bold text-2xl">
                        {order.customerName}
                      </h3>
                      <p className="text-lg">
                        Rp.{order.totalPrice.toLocaleString("id-ID")}
                      </p>
                      <div
                        className={`p-1 rounded font-bold
                        ${order.status === "Antrian" && "bg-amber-500"}
                        ${order.status === "Diproses" && "bg-blue-500"}
                        ${order.status === "Selesai" && "bg-green-500"}
                        ${order.status === "Batal" && "bg-red-500"}`}
                      >
                        <p>{order.status}</p>
                      </div>
                    </div>
                    <div>
                      <p>
                        {order.createdAt.toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="border-t bg-gray-100 dark:bg-black">
                    <div className="flex justify-end gap-2 p-4">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-1">
                        Lihat
                      </button>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-1">
                        Bayar
                      </button>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Batal
                      </button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* desktop version */}
          <div className="hidden m-6 md:flex md:justify-center md:items-center ">
            <table className="border border-spacing-2 w-full">
              <thead>
                <tr>
                  <th className="w-62 border">Nomor Pesanan</th>
                  <th className="w-100 border">Nama Pemesan</th>
                  <th className="w-50 border">Total Pesanan</th>
                  <th className="w-50 border">Tanggal</th>
                  <th className="w-50 border">Status</th>
                  <th className="border">Tombol Aksi</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => {
                  return (
                    <tr key={order.id}>
                      <td className="border p-2">{order.orderCode}</td>
                      <td className="border p-2">{order.customerName}</td>
                      <td className="border p-2">{order.totalPrice}</td>
                      <td className="border p-2">
                        {order.createdAt.toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </td>
                      <td className="border p-2">
                        <span
                          className={`p-1 rounded font-bold
                        ${order.status === "Antrian" && "bg-amber-500"}
                        ${order.status === "Diproses" && "bg-blue-500"}
                        ${order.status === "Selesai" && "bg-green-500"}
                        ${order.status === "Batal" && "bg-red-500"}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="border p-2">
                        <button className="bg-blue-500 hover:bg-blue-700 p-2  rounded-md text-white">
                          Lihat
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Floating Button Add Order */}
      <div className="fixed bottom-4 right-4 md:hidden">
        <Link href="/menus">
          <button className="size-15 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <div className="flex justify-center items-center">
              <Plus />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
