import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface State {
  description: string;
}

interface Actions {
  setDescription: (description: string) => void;
}

export const useCartStore = create(
  devtools(
    persist<State & Actions>(
      (set) => ({
        description: '',
        setDescription: (description: string) => {
          set(() => ({
            description: description,
          }));
        },
      }),
      {
        name: 'blog-storage',
      }
    )
  )
);
