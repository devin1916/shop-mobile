import { useState, useCallback, useEffect } from 'react';
import { User } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock user data for demonstration
  const mockUser: User = {
    id: '1',
    name: 'Name',
    email: 'Email',
    avatar: 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png',
    phone: 'Mobile Number',
    dateOfBirth: 'Date of Birth',
    address: {
      street: 'Street',
      city: 'City',
      state: 'State',
      zipCode: 'Zip Code',
      country: 'Country'
    },
    preferences: {
      notifications: true,
      newsletter: false,
      theme: 'light'
    },
    createdAt: '2023-01-15T10:30:00Z'
  };

  useEffect(() => {
    // Simulate loading user data
    const timer = setTimeout(() => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock authentication - in real app, validate credentials
    if (email && password) {
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      setIsLoading(false);
      return { success: true };
    }
    
    setIsLoading(false);
    return { success: false, error: 'Invalid credentials' };
  }, []);

  const signup = useCallback(async (name: string, email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newUser: User = {
      ...mockUser,
      id: Date.now().toString(),
      name,
      email,
      createdAt: new Date().toISOString()
    };
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    setIsLoading(false);
    return { success: true };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('user');
  }, []);

  const updateProfile = useCallback(async (updates: Partial<User>) => {
    if (!user) return { success: false, error: 'Not authenticated' };
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setIsLoading(false);
    
    return { success: true };
  }, [user]);

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    updateProfile
  };
};