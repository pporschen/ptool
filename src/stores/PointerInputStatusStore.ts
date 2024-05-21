import { create } from 'zustand';

export type PointerInputStatus = {
  pointerInputIsEnabled: boolean;
  setPointerInputIsEnabled: (pointerInputIsEnabled: boolean) => void;
};

export const usePointerInputStatusStore = create<PointerInputStatus>((set) => ({
  pointerInputIsEnabled: true,
  setPointerInputIsEnabled: (pointerInputIsEnabled: boolean) =>
    set({ pointerInputIsEnabled }),
}));
