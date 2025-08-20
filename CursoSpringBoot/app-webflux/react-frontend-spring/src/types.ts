export type Category = { id: number; name: string; };
export type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  category: Category;
};

export type Order = {
  id: number;
  userId: number;
  total: number;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type OrderItem = {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  product?: Product;
};

export type OrderStatusHistory = {
  id: number;
  orderId: number;
  status: string;
  note?: string;
  changedAt: string;
};

export type OrderResponse = {
  order: Order;
  items: OrderItem[];
  history: OrderStatusHistory[];
};

export type AuthResponse = { token?: string; message?: string; error?: string };