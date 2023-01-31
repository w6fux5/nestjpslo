import create from 'zustand';

type PixiStore = {
  isReady: boolean;
  setIsReady: (value: boolean) => void;
};

export const usePixiStore = create<PixiStore>((set) => ({
  isReady: false,
  setIsReady: (value) =>
    set(() => ({
      isReady: value,
    })),
}));
