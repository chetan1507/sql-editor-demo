import categories from './data/categories.json';
import products from './data/products.json';
import customers from './data/customers.json';
import orders from './data/orders.json';
import employees from './data/employees.json';
import regions from './data/regions.json';
import shippers from './data/shippers.json';
import suppliers from './data/suppliers.json';

const MOCK_DATA = [
  { name: 'Categories', data: categories },
  { name: 'Products', data: products },
  { name: 'Customers', data: customers },
  { name: 'Orders', data: orders },
  { name: 'Employees', data: employees },
  { name: 'Regions', data: regions },
  { name: 'Shippers', data: shippers },
  { name: 'Suppliers', data: suppliers },
];

const getMockData = () => {
  const idx = parseInt(`${(Math.random() * 10) % 8}`, 10);
  const throwError = parseInt(`${Math.random() * 10}`, 10) % 3 === 0;

  if (throwError) {
    throw new Error('Could not fetch data please try again');
  }
  return MOCK_DATA[idx];
};

export const getDataForQuery = async (query: string): Promise<any[]> => {
  const { data } = getMockData();
  return Promise.resolve(data);
};
