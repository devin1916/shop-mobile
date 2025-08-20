import React from 'react';
import { Search, ShoppingCart, Menu, User, LogIn } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartToggle: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isAuthenticated: boolean;
  onAuthClick: () => void;
  onProfileClick: () => void;
  userAvatar?: string;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemsCount,
  onCartToggle,
  searchQuery,
  onSearchChange,
  isAuthenticated,
  onAuthClick,
  onProfileClick,
  userAvatar
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              ShopMobile
            </h1>
          </div>
          
          <div className="flex-1 max-w-lg mx-8 hidden sm:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={isAuthenticated ? onProfileClick : onAuthClick}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isAuthenticated && userAvatar ? (
                <img
                  src={userAvatar}
                  alt="Profile"
                  className="h-6 w-6 rounded-full object-cover"
                />
              ) : isAuthenticated ? (
                <User className="h-6 w-6" />
              ) : (
                <LogIn className="h-6 w-6" />
              )}
            </button>
            <button
              onClick={onCartToggle}
              className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile search bar */}
        <div className="sm:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>
    </header>
  );
};