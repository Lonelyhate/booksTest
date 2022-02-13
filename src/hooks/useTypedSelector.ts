import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootState } from "../redux/redusers";

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector