// src/app/menus/_components/MenuPageContent.tsx
"use client";
import { Card } from "@/components/Card";
import ModalTambahMenu from "@/components/common/ModalTambahMenu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MenuPageContent = () => {
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);

  return (
    <div className="space-y-4">
      {/* Modal Tambah Menu */}
      {isAddMenuOpen && (
        <ModalTambahMenu isOpen={isAddMenuOpen} setIsOpen={setIsAddMenuOpen} />
      )}

      <div className="m-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold ">Menu</h1>
        </div>
        <div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsAddMenuOpen(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Tambah Menu
            </button>
            <Link href="/">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Kembali
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        {/* Cakupan Awal */}
        {/* nanti akan data akan disajikan dengan bentuk array of object dari menu menggunakan array method map*/}
        <Card className="mx-4">
          <div className="m-4">
            <div>
              <Image src="/logo.png" width={100} height={100} alt="logo" />
            </div>
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg">Nama Makanan</h2>
              <div>
                <p>Harga</p>
                <p>stock</p>
              </div>
            </div>
            <div className="my-4">
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        </Card>
        {/* Cakupan Akhir */}
      </div>
      {/* Detail Pemesan */}
      <div>
        <Card className="mx-4">
          <div className="m-4 space-y-3">
            <div>
              <h2 className="font-bold text-lg">Detail Pemesan</h2>
            </div>
            <div>
              <label htmlFor="nama">Nama Pelanggan</label>
              <input
                type="text"
                name="nama"
                id="nama"
                placeholder="Masukan Nama"
                className="w-full border border-gray-600 rounded p-2"
              />
            </div>
            <div>
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Simpan Pesanan
              </button>
            </div>
          </div>
        </Card>
      </div>
      <div>
        <Card className="mx-4">
          <div className="m-4 space-y-3">
            <div>
              <h2 className="font-bold text-lg">Keranjang Pesanan</h2>
            </div>
            <div className="flex flex-col gap-4 bg-gray-300 p-4">
              <p>Belum ada pesanan</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default MenuPageContent;
