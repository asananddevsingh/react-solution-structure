import { CounterContainer } from "../containers";
import { Calculator, BuggyButton, NoPageFound, Parent } from "../components";

const publicRoutes = [
    {
        key: "counterDefault",
        component: CounterContainer,
        path: "/",
        exact: true,
    },
    {
        key: "counterWithRoute",
        component: CounterContainer,
        path: "/counter",
    },
    {
        key: "calculator",
        component: Calculator,
        path: "/calculator",
    },
    {
        key: "buggyButton",
        component: BuggyButton,
        path: "/buggy-button",
    },
    {
        key: "componentLifeCycle",
        path: "/component-life-cycle",
        component: Parent,
    },
    {
        key: "noPageFound",
        component: NoPageFound,
    },
];

export default publicRoutes;