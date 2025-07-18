import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./index";

// Custom hook to access typed useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Custom hook to access typed useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
