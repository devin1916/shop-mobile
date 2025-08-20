import React from 'react';
import * as Icons from 'lucide-react';
import { Category } from '../types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<any>;
    return IconComponent ? <IconComponent className="h-5 w-5" /> : <Icons.Package className="h-5 w-5" />;
  };

  return (
    <div className="bg-white p-4 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Categories</h2>
        <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide">
          <button
            onClick={() => onCategoryChange('all')}
            className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-full border transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:bg-blue-50'
            }`}
          >
            <Icons.Grid3X3 className="h-4 w-4" />
            <span className="font-medium whitespace-nowrap">All Products</span>
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-full border transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              {getIcon(category.icon)}
              <span className="font-medium whitespace-nowrap">{category.name}</span>
              <span className="text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};