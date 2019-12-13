import React from "react";
import { animated, useTransition } from "react-spring";
import { Switch, Route, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants/index";

const AnimatedRoutes = () => {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={location}>
        {ROUTES.map(route => (
          <Route key={route.path} exact path={route.path} render={route.component} />
        ))}
      </Switch>
    </animated.div>
  ));
};

export default AnimatedRoutes;
