import {
    CounterModule,
    CalculatorModule,
    BuggyButtonModule,
    NoPageFoundModule,
    ComponentLifeCycleModule
} from "../modules";

const publicRoutes = [
    {
        key: "counterDefault",
        component: CounterModule,
        path: "/",
        exact: true,
    },
    {
        key: "counterWithRoute",
        component: CounterModule,
        path: "/counter",
    },
    {
        key: "calculator",
        component: CalculatorModule,
        path: "/calculator",
    },
    {
        key: "buggyButton",
        component: BuggyButtonModule,
        path: "/buggy-button",
    },
    {
        key: "componentLifeCycle",
        path: "/component-life-cycle",
        component: ComponentLifeCycleModule,
    },
    {
        key: "noPageFound",
        component: NoPageFoundModule,
    },
];

export default publicRoutes;