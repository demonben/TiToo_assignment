import { compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnly";
import thunk from "redux-thunk";
import { crewMiddleware } from "./crew.middleware";
import { departmentsMiddleware } from "./departments.middleware";

export const middleware = () =>
  compose(
    composeWithDevTools(
      applyMiddleware(thunk, ...crewMiddleware, ...departmentsMiddleware)
    )
  );
