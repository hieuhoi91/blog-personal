import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { IProduct } from '@/data/mock-data';

interface State {
  cart: IProduct[];
  totalItems: number;
  totalPrice: number;
}

interface Actions {
  addToCart: (Item: IProduct) => void;
  incrementQuantity: (Item: IProduct) => void;
  decrementQuantity: (Item: IProduct) => void;
  removeFromCart: (Item: IProduct) => void;
}

export const useCartStore = create(
  devtools(
    persist<State & Actions>(
      (set, get) => ({
        cart: [],
        totalItems: 0,
        totalPrice: 0,
        addToCart: (product: IProduct) => {
          const cart = get().cart;
          const cartItem = cart.find((item) => item.id === product.id);
          if (cartItem) {
            const updatedCart = cart.map((item) =>
              item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            );
            set((state) => ({
              cart: updatedCart,
              totalItems: state.totalItems + 1,
              totalPrice: state.totalPrice + product.price,
            }));
          } else {
            const updatedCart = [...cart, { ...product, quantity: 1 }];
            set((state) => ({
              cart: updatedCart,
              totalItems: state.totalItems + 1,
              totalPrice: state.totalPrice + product.price,
            }));
          }
        },

        updateCart: (product: IProduct) => {
          const cart = get().cart;
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: (item.quantity as number) + 1,
                }
              : item
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        },

        incrementQuantity: (product: IProduct) => {
          const cart = get().cart;
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: (item.quantity as number) + 1,
                }
              : item
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        },

        decrementQuantity: (product: IProduct) => {
          const cart = get().cart;
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: (item.quantity as number) - 1 || 1,
                }
              : item
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems - 1,
            totalPrice: state.totalPrice - product.price,
          }));
        },

        removeFromCart: (product: IProduct) => {
          set((state) => ({
            cart: state.cart.filter((item) => item.id !== product.id),
            totalItems: state.totalItems - 1,
            totalPrice: state.totalPrice - product.price * product.quantity,
          }));
        },
      }),
      { name: 'cart-storage' }
    )
  )
);
