import { Card } from "@/components/Card";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="border-b flex justify-center p-4">
          <h1 className="text-xl font-bold md:text-2xl">
            Sate Soto Madura Mas Niram, Melania
          </h1>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg md:text-xl font-bold">Daftar Pesanan</h2>
            <button className="hidden md:flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Tambah Pesanan
            </button>
          </div>
          <div className="w-full flex flex-col gap-4">
            <Card className="max-w-131.25">
              <div className="p-4">
                <p>#0001</p>
                <h3 className="font-bold">Nama-Customer</h3>
                <p>Daftar Pesanan</p>
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
        </div>
      </div>

      {/* Floating Button Add Order */}
      <div className="fixed bottom-4 right-4 md:hidden">
        <button className="size-15 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <div className="flex justify-center items-center">
            <Plus />
          </div>
        </button>
      </div>
    </div>
  );
}
