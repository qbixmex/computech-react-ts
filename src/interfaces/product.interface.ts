interface Product {
  id?: string;
  title: string;
  slug: string;
  brand: string;
  color: string;
  price: number;
  description: string;
  images: string[],
  condition: string;
  stock: number;
  published?: boolean;
  category: string;
  tags: string[];
  createdAt?: string;
  updatedAt?: string;
}

export default Product;