import { create } from "zustand";

export type GazeInputStatus = {
	gazeInputIsEnabled: boolean;
	setGazeInputIsEnabled: (gazeInputIsEnabled: boolean) => void;
};

export const useGazeInputStatusStore = create<GazeInputStatus>((set) => ({
	gazeInputIsEnabled: false,
	setGazeInputIsEnabled: (gazeInputIsEnabled: boolean) => set({ gazeInputIsEnabled }),
}));
