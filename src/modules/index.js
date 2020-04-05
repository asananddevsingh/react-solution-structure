import Loadable from "./reactLoadable/loadable";

export const CounterModule = Loadable(() => import("./counter/counterModule"));
export const CalculatorModule = Loadable(() => import("./calculator/calculatorModule"));
export const BuggyButtonModule = Loadable(() => import("./buggyButton/buggyButtonModule"));
export const NoPageFoundModule = Loadable(() => import("./noPageFound/noPageFoundModule"));
export const ComponentLifeCycleModule = Loadable(() => import("./componentLifeCycle/componentLifeCycleModule"));