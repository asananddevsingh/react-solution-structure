import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { publicRoutes } from "./routes";
import { rootLayout as RootLayout } from "./layouts";

const App = () => {
  return (
    <Suspense fallback="Loading...">
      <Switch>
        {publicRoutes &&
          publicRoutes.map((route) => (
            <Route path={route.path} key={route.key} exact={route.exact}
              render={(routeProps) => (
                <RootLayout key={route.key} >
                  <route.component {...routeProps} />
                </RootLayout>
              )}
            />
          ))}
      </Switch>
    </Suspense>
  );
};

export default App;
