// src/app/menus/_components/MenuPageContent.tsx
"use client";
import { Card } from "@/components/Card";
import ModalTambahMenu from "@/components/common/ModalTambahMenu";
import useCart from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type MenuPageContentProps = {
  dataMenu: {
    id: string;
    name: string;
    price: number;
    stock: number;
    imageUrl: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
  }[];
};

const MenuPageContent = ({ dataMenu }: MenuPageContentProps) => {
  const { cart, handleAddToCart } = useCart();

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

      <div className="space-y-4 flex flex-col md:flex-row w-full ">
        {/* Daftar Menu */}
        <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-330">
          {dataMenu.map(menu => (
            <Card key={menu.id} className="mx-4 mb-4">
              <div className="m-4 space-y-4">
                <div>
                  <Image
                    src={menu.imageUrl}
                    width={700}
                    height={100}
                    alt="logo"
                    loading="eager"
                    className="w-full h-56 md:h-64 object-cover rounded-md"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-lg">{menu.name}</h2>
                  <div>
                    <p>Rp{menu.price.toLocaleString("id-ID")}</p>
                    <p>Stok: {menu.stock}</p>
                  </div>
                </div>
                <div className="my-4">
                  <button
                    onClick={() => {
                      handleAddToCart(
                        "increment",
                        `${menu.id}`,
                        `${menu.name}`,
                        menu.price,
                      );
                    }}
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Detail Pemesan */}
        <form action="">
          <div className="space-y-4 md:w-150">
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
                </div>
              </Card>
            </div>
            <div>
              <Card className="m-4">
                <div className="m-4 space-y-3">
                  <div>
                    <h2 className="font-bold text-lg">Keranjang Pesanan</h2>
                  </div>
                  {cart.length > 0 ? (
                    <>
                      {cart.map(item => (
                        <div key={item.menu_id}>
                          <div className="flex flex-col md:flex-row justify-between md:items-center py-4 gap-3">
                            <div>
                              <p className="font-bold">{item.name}</p>
                              <p>Rp{item.price.toLocaleString("id-ID")}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => {
                                  handleAddToCart(
                                    "decrement",
                                    `${item.menu_id}`,
                                    `${item.name}`,
                                    item.price,
                                  );
                                }}
                                className={`w-8 h-8 flex items-center justify-center font-bold bg-blue-500 hover:bg-blue-700 text-white rounded`}
                              >
                                -
                              </button>
                              <p>{item.quantity}</p>
                              <button
                                onClick={() => {
                                  handleAddToCart(
                                    "increment",
                                    `${item.menu_id}`,
                                    `${item.name}`,
                                    item.price,
                                  );
                                }}
                                className={`w-8 h-8 flex items-center justify-center font-bold bg-blue-500 hover:bg-blue-700 text-white rounded`}
                              >
                                +
                              </button>
                            </div>
                            <div>
                              <p>Total</p>
                              <p className="font-bold">
                                Rp
                                {item.total.toLocaleString("id-ID")}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div>
                        <svg
                          width="100%"
                          height="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            x1="0"
                            y1="10"
                            x2="100%"
                            y2="10"
                            stroke="black"
                            stroke-width="1"
                          />
                        </svg>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>Total</div>
                        <div className="font-bold">
                          Rp
                          {cart
                            .reduce((total, item) => total + item.total, 0)
                            .toLocaleString("id-ID")}
                        </div>
                      </div>
                      <div>
                        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Simpan Pesanan
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col gap-4 bg-gray-300 p-4">
                      <p>Belum ada pesanan</p>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default MenuPageContent;
