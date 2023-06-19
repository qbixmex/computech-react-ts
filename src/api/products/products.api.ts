import { getEnvironmentVariables } from '../../helpers';
import { Product, ProductData } from '../../interfaces';

const { VITE_API_URL } = getEnvironmentVariables();

export const getProductsAPI = async (): Promise<Product[]> => {
  const response = await fetch(
    `${VITE_API_URL}/products?limit=100`
    // {
    //   headers: {
    //     'x-token': localStorage.getItem('token') ?? '',
    //   },
    // },
  );

  if (!response) {
    throw new Error('Data could not be fetched!');
  }

  const data = await response.json();

  return data;
};

export const createProductAPI = async (productData: ProductData): Promise<Product> => {
  const response = await fetch(
    `${VITE_API_URL}/products`,
    {
      headers: {
        // 'x-token': localStorage.getItem('token') ?? '',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(productData),
    },
  );


  if (!response.ok) {
    const error = await response.json();
    if (typeof error.message === 'object') throw new Error(error.message[0]);
    if (typeof error.message === 'string') throw new Error(error.message);
  }

  const data = await response.json();

  return data;

};