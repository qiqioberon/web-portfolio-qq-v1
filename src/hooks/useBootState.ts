import { createContext, useContext } from "react";

interface BootState {
	isBooting: boolean;
}

export const BootStateContext = createContext<BootState>({ isBooting: false });

export const useBootState = () => useContext(BootStateContext);
