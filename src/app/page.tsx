import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="border-b flex justify-center p-4">
          <h1 className="text-xl font-bold md:text-2xl">
            Sate Soto Madura Mas Niram, Melania
          </h1>
        </div>
        <div className="flex flex-col  p-4">
          <div>
            <h2 className="text-lg md:text-xl font-bold">Daftar Pesanan</h2>
          </div>
          <div className="w-full">
            <Card className="max-w-131.25">
              <div className="p-4">
                <p>#0001</p>
                <h3 className="font-bold">Nama-Customer</h3>
                <p>Daftar Pesanan</p>
                <p>Total</p>
              </div>
              <div className="border-t bg-gray-100">
                <div className="flex justify-end p-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Bayar
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
