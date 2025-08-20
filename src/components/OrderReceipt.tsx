import React from 'react';
import { X, CheckCircle, Download, Share, Calendar, MapPin, CreditCard, Package } from 'lucide-react';
import { CartItem } from '../types';

interface OrderReceiptProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: {
    orderId: string;
    items: CartItem[];
    customerInfo: {
      name: string;
      email: string;
      phone: string;
    };
    shippingAddress: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
    paymentInfo: {
      last4: string;
      cardholderName: string;
    };
    subtotal: number;
    shipping: number;
    tax: number;
    total: number;
    orderDate: string;
    estimatedDelivery: string;
  };
}

export const OrderReceipt: React.FC<OrderReceiptProps> = ({
  isOpen,
  onClose,
  orderData
}) => {
  if (!isOpen) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleDownload = () => {
    // In a real app, this would generate and download a PDF
    const receiptContent = `
ORDER RECEIPT
=============

Order ID: ${orderData.orderId}
Order Date: ${formatDate(orderData.orderDate)}

Customer Information:
${orderData.customerInfo.name}
${orderData.customerInfo.email}
${orderData.customerInfo.phone}

Shipping Address:
${orderData.shippingAddress.street}
${orderData.shippingAddress.city}, ${orderData.shippingAddress.state} ${orderData.shippingAddress.zipCode}
${orderData.shippingAddress.country}

Items:
${orderData.items.map(item => 
  `${item.product.name} x${item.quantity} - $${(item.product.price * item.quantity).toFixed(2)}`
).join('\n')}

Subtotal: $${orderData.subtotal.toFixed(2)}
Shipping: $${orderData.shipping.toFixed(2)}
Tax: $${orderData.tax.toFixed(2)}
Total: $${orderData.total.toFixed(2)}

Payment Method: **** **** **** ${orderData.paymentInfo.last4}
Estimated Delivery: ${formatDate(orderData.estimatedDelivery)}
    `;

    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `receipt-${orderData.orderId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Order Receipt - ${orderData.orderId}`,
          text: `Your order ${orderData.orderId} has been placed successfully! Total: $${orderData.total.toFixed(2)}`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`Order ${orderData.orderId} - Total: $${orderData.total.toFixed(2)}`);
      alert('Order details copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Order Confirmed!</h2>
                <p className="text-gray-600">Thank you for your purchase</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={handleDownload}
              className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Download</span>
            </button>
            <button
              onClick={handleShare}
              className="flex-1 flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Share className="h-4 w-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Order Info */}
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-800">Order ID</span>
              <span className="text-sm font-mono text-blue-900">{orderData.orderId}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-blue-800">Order Date</span>
              <span className="text-sm text-blue-900">{formatDate(orderData.orderDate)}</span>
            </div>
          </div>

          {/* Items */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Package className="h-5 w-5 mr-2" />
              Items Ordered
            </h3>
            <div className="space-y-3">
              {orderData.items.map((item) => (
                <div key={item.product.id} className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm">{item.product.name}</h4>
                    <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-gray-900">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="font-medium text-gray-900">{orderData.customerInfo.name}</p>
              <p className="text-gray-600">{orderData.customerInfo.email}</p>
              <p className="text-gray-600">{orderData.customerInfo.phone}</p>
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Shipping Address
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium text-gray-900">{orderData.customerInfo.name}</p>
              <p className="text-gray-600">{orderData.shippingAddress.street}</p>
              <p className="text-gray-600">
                {orderData.shippingAddress.city}, {orderData.shippingAddress.state} {orderData.shippingAddress.zipCode}
              </p>
              <p className="text-gray-600">{orderData.shippingAddress.country}</p>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Payment Method
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium text-gray-900">{orderData.paymentInfo.cardholderName}</p>
              <p className="text-gray-600">**** **** **** {orderData.paymentInfo.last4}</p>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900">${orderData.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-900">${orderData.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-900">${orderData.tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-lg font-semibold text-green-600">${orderData.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-2">
              <Calendar className="h-5 w-5 text-green-600" />
              <span className="font-medium text-green-800">Estimated Delivery</span>
            </div>
            <p className="text-green-700 font-semibold">
              {formatDate(orderData.estimatedDelivery)}
            </p>
            <p className="text-green-600 text-sm mt-1">
              You'll receive tracking information via email once your order ships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};