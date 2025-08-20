import { Order } from '../types';

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    userId: '1',
    items: [
      {
        product: {
          id: '1',
          name: 'Premium Wireless Headphones',
          price: 199.99,
          originalPrice: 249.99,
          image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
          images: ['https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500'],
          category: 'electronics',
          description: 'High-quality wireless headphones with noise cancellation.',
          rating: 4.8,
          reviews: 156,
          inStock: true,
          features: ['Noise Cancellation', '30-hour battery'],
          brand: 'AudioTech'
        },
        quantity: 1
      },
      {
        product: {
          id: '2',
          name: 'Smart Fitness Watch',
          price: 299.99,
          image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500',
          images: ['https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500'],
          category: 'electronics',
          description: 'Advanced fitness tracking with heart rate monitor.',
          rating: 4.6,
          reviews: 89,
          inStock: true,
          features: ['Heart Rate Monitor', 'GPS Tracking'],
          brand: 'FitTech'
        },
        quantity: 1
      }
    ],
    total: 499.98,
    status: 'delivered',
    orderDate: '2024-01-15T10:30:00Z',
    deliveryDate: '2024-01-18T14:20:00Z',
    shippingAddress: {
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    }
  },
  {
    id: 'ORD-002',
    userId: '1',
    items: [
      {
        product: {
          id: '3',
          name: 'Designer Leather Jacket',
          price: 159.99,
          originalPrice: 219.99,
          image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
          images: ['https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500'],
          category: 'fashion',
          description: 'Premium genuine leather jacket with modern design.',
          rating: 4.7,
          reviews: 67,
          inStock: true,
          features: ['Genuine Leather', 'Multiple Pockets'],
          brand: 'StyleCraft'
        },
        quantity: 1
      }
    ],
    total: 159.99,
    status: 'shipped',
    orderDate: '2024-01-20T09:15:00Z',
    shippingAddress: {
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    }
  },
  {
    id: 'ORD-003',
    userId: '1',
    items: [
      {
        product: {
          id: '5',
          name: 'Yoga Mat Pro',
          price: 49.99,
          image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=500',
          images: ['https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=500'],
          category: 'sports',
          description: 'High-quality non-slip yoga mat.',
          rating: 4.8,
          reviews: 123,
          inStock: true,
          features: ['Non-slip Surface', 'Extra Thick'],
          brand: 'ZenFit'
        },
        quantity: 2
      }
    ],
    total: 99.98,
    status: 'processing',
    orderDate: '2024-01-22T16:45:00Z',
    shippingAddress: {
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    }
  }
];