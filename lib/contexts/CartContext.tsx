"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem } from '../types/cart';

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  toggleCart: () => void;
  clearCart: () => void;
  itemsCount: number;
  totalAmount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('unit_01_cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('unit_01_cart', JSON.stringify(items));
  }, [items]);

  const addItem = (item: CartItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i);
      }
      return [...prev, item];
    });
    setIsOpen(true);
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      removeItem(id);
      return;
    }
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  };

  const toggleCart = () => setIsOpen(prev => !prev);
  const clearCart = () => setItems([]);

  const itemsCount = items.reduce((acc, item) => acc + item.quantity, 0);
  
  const totalAmount = items.reduce((acc, item) => {
    const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    return acc + (isNaN(priceNum) ? 0 : priceNum * item.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{
      items,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      toggleCart,
      clearCart,
      itemsCount,
      totalAmount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
