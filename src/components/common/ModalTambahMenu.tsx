import Modal from "../ui/Modal";
import TextField from "../ui/TextField";

type ModalTambahMenuProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const ModalTambahMenu = ({ isOpen, setIsOpen }: ModalTambahMenuProps) => {
  const FieldProperty = [
    {
      label: "Nama Makanan",
      name: "name",
      type: "text",
      placeholder: "Sate Ayam",
    },
    { label: "Harga", name: "price", type: "number", placeholder: "20000" },
    { label: "Stok", name: "stok", type: "number", placeholder: "100" },
    {
      label: "URL Gambar",
      name: "url",
      type: "text",
      placeholder: "https://example.com/image.jpg",
    },
  ];

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div>
        <h2 className="font-bold text-xl">Tambah Menu</h2>
      </div>
      <div className="space-y-2">
        {FieldProperty.map(field => (
          <TextField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}
        <div className="flex flex-col gap-1">
          <label htmlFor="deskripsi">Diskripsi</label>
          <textarea
            name="deskripsi"
            id="deskripsi"
            rows={5}
            cols={30}
            placeholder="Deskripsi makanan"
            className="border border-gray-500 rounded-md p-2"
          />
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Simpan
        </button>
      </div>
    </Modal>
  );
};

export default ModalTambahMenu;
