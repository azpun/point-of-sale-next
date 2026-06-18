export type OrderMenuType = {
  menu_id: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
};

export type OrderDataType = {
  customerName: string;
  totalPrice: number;
  status: string;
  orderItems: OrderMenuType[];
};
