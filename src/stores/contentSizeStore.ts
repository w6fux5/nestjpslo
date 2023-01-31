import create from 'zustand';

type ContentSizeStore = {
  contentWidth: number;
  setWidth: (currentWidth: number) => void;
};

export const useContentSizeStore = create<ContentSizeStore>((set) => ({
  contentWidth: 539,
  setWidth: (currentWidth) =>
    set(() => ({
      contentWidth: currentWidth,
    })),
}));
