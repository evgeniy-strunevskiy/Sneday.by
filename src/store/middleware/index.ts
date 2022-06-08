import * as loginActionsCreator from "./login";
import * as PointsActionsCreator from "./points";
import * as VegetablesActionsCreator from "./points";
import * as OwnterActionsCreator from "./owner";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...loginActionsCreator,
  ...PointsActionsCreator,
  ...VegetablesActionsCreator,
  ...OwnterActionsCreator,
};