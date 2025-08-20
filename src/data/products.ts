import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', icon: 'Smartphone', count: 45 },
  { id: 'fashion', name: 'Fashion', icon: 'Shirt', count: 120 },
  { id: 'home', name: 'Home & Garden', icon: 'Home', count: 78 },
  { id: 'sports', name: 'Sports', icon: 'Dumbbell', count: 63 },
  { id: 'beauty', name: 'Beauty', icon: 'Sparkles', count: 89 },
  { id: 'books', name: 'Books', icon: 'BookOpen', count: 156 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'electronics',
    description: 'High-quality wireless headphones with noise cancellation and superior sound quality.',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    features: ['Noise Cancellation', '30-hour battery', 'Bluetooth 5.0', 'Quick charge'],
    brand: 'AudioTech'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 299.99,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'electronics',
    description: 'Advanced fitness tracking with heart rate monitor, GPS, and health insights.',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    features: ['Heart Rate Monitor', 'GPS Tracking', '7-day battery', 'Water resistant'],
    brand: 'FitTech'
  },
  {
    id: '3',
    name: 'Designer Leather Jacket',
    price: 159.99,
    originalPrice: 219.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'fashion',
    description: 'Premium genuine leather jacket with modern design and comfortable fit.',
    rating: 4.7,
    reviews: 67,
    inStock: true,
    features: ['Genuine Leather', 'Multiple Pockets', 'Zipper Closure', 'Lined Interior'],
    brand: 'StyleCraft'
  },
  {
    id: '4',
    name: 'Ceramic Coffee Mug Set',
    price: 29.99,
    image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/2564973/pexels-photo-2564973.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'home',
    description: 'Beautiful handcrafted ceramic mugs perfect for your morning coffee routine.',
    rating: 4.5,
    reviews: 234,
    inStock: true,
    features: ['Set of 4', 'Dishwasher Safe', 'Microwave Safe', 'Handcrafted'],
    brand: 'HomeStyle'
  },
  {
    id: '5',
    name: 'Yoga Mat Pro',
    price: 49.99,
    image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/6975265/pexels-photo-6975265.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'sports',
    description: 'High-quality non-slip yoga mat with excellent grip and cushioning.',
    rating: 4.8,
    reviews: 123,
    inStock: true,
    features: ['Non-slip Surface', 'Extra Thick', 'Eco-friendly', 'Carrying Strap'],
    brand: 'ZenFit'
  },
  {
    id: '6',
    name: 'Luxury Skincare Set',
    price: 89.99,
    originalPrice: 120.00,
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'beauty',
    description: 'Complete skincare routine with premium ingredients for radiant skin.',
    rating: 4.9,
    reviews: 78,
    inStock: true,
    features: ['Full Routine', 'Natural Ingredients', 'Dermatologist Tested', 'Travel Size'],
    brand: 'GlowLux'
  },
  {
    id: '7',
    name: 'I Phone 13',
    price: 389.99,
    originalPrice: 220.00,
    image: 'https://dinapalagroup.lk/wp-content/uploads/2022/02/Apple-iPhone-13-Black-01.jpg',
    images: [
      'https://dinapalagroup.lk/wp-content/uploads/2022/02/Apple-iPhone-13-Black-01.jpg',
      'https://ie.static.webuy.com/product_images/Phones/Phones%20iPhone/SAPPI13128GSTUNLB_l.jpg'
    ],
    category: 'electronics',
    description: 'Powered by the A15 Bionic chip, Super Retina XDR display, advanced dual cameras, and all-day battery life. Stylish, powerful, and built for speed.',
    rating: 4.9,
    reviews: 88,
    inStock: true,
    features: ['6.1-inch Super Retina XDR display for vivid visuals', 'A15 Bionic chip for lightning-fast performance', 'Dual 12MP cameras with Night Mode & 4K video', 'Long-lasting all-day battery life', '5G connectivity for super-fast browsing and streaming', 'Available in multiple colors & storage options'],
    brand: 'GlowLux'
  }
];