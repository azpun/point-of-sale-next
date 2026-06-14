import { Card } from "@/components/Card";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Home() {
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
            <Card className="max-w-131.25">
              <div className="p-4">
                <p>#0001</p>
                <h3 className="font-bold">Nama-Customer</h3>
                <p>Total</p>
                <p>Status</p>
              </div>
              <div className="border-t bg-gray-100">
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
                <tr>
                  <td className="border p-2">ORD-001</td>
                  <td className="border p-2">Budi Pekerti</td>
                  <td className="border p-2">Rp125.000</td>
                  <td className="border p-2">11-06-2026</td>
                  <td className="border p-2">
                    <span className="bg-blue-500 text-white p-2 rounded-lg">
                      Dalam Antrian
                    </span>
                  </td>
                  <td className="border p-2">
                    <button className="bg-blue-500 hover:bg-blue-700 p-2  rounded-md text-white">
                      Lihat
                    </button>
                  </td>
                </tr>
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
