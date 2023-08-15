import {TypedUseSelectorHook, useSelector} from "react-redux";
import type {RootState} from "../store/rootReducers";

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export {useTypeSelector};