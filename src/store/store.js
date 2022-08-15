import { createStore } from "redux";
import { reducers } from "./reducers";
import { middleware } from "./middlewares";

export const createStoreAction = () => createStore(reducers(), middleware());

export const store = createStoreAction();
