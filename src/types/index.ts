export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin';
  avatar?: string;
  phone?: string;
  address?: Address;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  subcategory?: string;
  inStock: boolean;
  specifications?: Record<string, string>;
  configurableOptions?: ConfigurableOption[];
  b2bPrice?: number;
}

export interface ConfigurableOption {
  id: string;
  name: string;
  type: 'select' | 'input' | 'checkbox';
  options?: string[];
  priceModifier?: number;
  required?: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  configuration?: Record<string, string>;
  totalPrice: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  updatedAt: string;
  shippingAddress: Address;
  paymentMethod: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}