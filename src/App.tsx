import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/Cart';
import { AuthModal } from './components/authModal';
import { UserProfile } from './components/userProfile';
import { Checkout } from './components/Checkout';
import { OrderReceipt } from './components/OrderReceipt';
import { useCart } from './hooks/useCart';
import { useAuth } from './hooks/useAuth';
import { useOrders } from './hooks/UseOrders';
import { products, categories } from './data/products';
import { Product } from './types';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [currentOrderData, setCurrentOrderData] = useState<any>(null);
  
  const {
    cartItems,
    isCartOpen,
    addToCart,
    clearCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
    getTotalPrice,
    getTotalItems
  } = useCart();

  const {
    user,
    isLoading: authLoading,
    isAuthenticated,
    login,
    signup,
    logout,
    updateProfile
  } = useAuth();

  const { placeOrder, isLoading: orderLoading } = useOrders();

  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    addToCart(product, quantity);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  const handleAuthClick = () => {
    setIsAuthModalOpen(true);
  };

  const handleProfileClick = () => {
    setIsProfileOpen(true);
  };

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
      return;
    }
    setIsCheckoutOpen(true);
  };

  const handlePlaceOrder = async (orderData: any) => {
    const result = await placeOrder(orderData);
    if (result.success) {
      setCurrentOrderData(result.orderData);
      setIsCheckoutOpen(false);
      setIsReceiptOpen(true);
      // Clear cart after successful order
      clearCart();
      toggleCart(); // Close cart
    }
    return result;
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemsCount={getTotalItems()}
        onCartToggle={toggleCart}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isAuthenticated={isAuthenticated}
        onAuthClick={handleAuthClick}
        onProfileClick={handleProfileClick}
        userAvatar={user?.avatar}
      />
      
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <main>
        <ProductGrid
          products={filteredProducts}
          onAddToCart={handleAddToCart}
          onProductClick={handleProductClick}
        />
      </main>
      
      <ProductDetail
        product={selectedProduct!}
        isOpen={!!selectedProduct}
        onClose={closeProductDetail}
        onAddToCart={handleAddToCart}
      />
      
      <Cart
        isOpen={isCartOpen}
        onClose={toggleCart}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        totalPrice={getTotalPrice()}
        onCheckout={handleCheckout}
      />
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={login}
        onSignup={signup}
        isLoading={authLoading}
      />
      
      {user && (
        <UserProfile
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
          user={user}
          onUpdateProfile={updateProfile}
          onLogout={handleLogout}
          isLoading={authLoading}
        />
      )}
      
      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        totalPrice={getTotalPrice()}
        user={user}
        onPlaceOrder={handlePlaceOrder}
        isLoading={orderLoading}
      />
      
      {currentOrderData && (
        <OrderReceipt
          isOpen={isReceiptOpen}
          onClose={() => {
            setIsReceiptOpen(false);
            setCurrentOrderData(null);
          }}
          orderData={currentOrderData}
        />
      )}
    </div>
  );
}

export default App;