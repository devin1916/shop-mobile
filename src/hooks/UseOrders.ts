import { useState, useCallback } from 'react';
import { CartItem, Order } from '../types';

export const useOrders = () => {
  const [isLoading, setIsLoading] = useState(false);

  const placeOrder = useCallback(async (orderData: {
    items: CartItem[];
    shippingAddress: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
    customerInfo: {
      name: string;
      email: string;
      phone: string;
    };
    paymentInfo: {
      last4: string;
      cardholderName: string;
    };
    subtotal: number;
    shipping: number;
    tax: number;
    total: number;
  }) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate order ID
      const orderId = `ORD-${Date.now().toString().slice(-6)}`;
      
      // Calculate estimated delivery (5-7 business days)
      const estimatedDelivery = new Date();
      estimatedDelivery.setDate(estimatedDelivery.getDate() + 6);
      
      const completeOrderData = {
        orderId,
        ...orderData,
        orderDate: new Date().toISOString(),
        estimatedDelivery: estimatedDelivery.toISOString(),
        status: 'pending' as const
      };
      
      // In a real app, you would save this to your backend
      // For now, we'll just store it in localStorage for demo purposes
      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      existingOrders.unshift(completeOrderData);
      localStorage.setItem('orders', JSON.stringify(existingOrders));
      
      setIsLoading(false);
      return { 
        success: true, 
        orderId,
        orderData: completeOrderData
      };
    } catch (error) {
      setIsLoading(false);
      return { 
        success: false, 
        error: 'Failed to place order. Please try again.' 
      };
    }
  }, []);

  const getOrders = useCallback(() => {
    return JSON.parse(localStorage.getItem('orders') || '[]');
  }, []);

  return {
    placeOrder,
    getOrders,
    isLoading
  };
};