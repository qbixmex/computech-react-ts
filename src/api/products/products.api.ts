import { getEnvironmentVariables } from '../../helpers';
import { Product } from '../../interfaces';

const { VITE_API_URL } = getEnvironmentVariables();

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(
    `${VITE_API_URL}/products`
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