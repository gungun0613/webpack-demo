import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import config from "./config";

function AppRouter() {
  const renderRoutes = (routes) => {
    if (!Array.isArray(routes)) {
      return null;
    }

    return routes?.map((route, index) => {
      return (
        <Route key={route.path || index} path={route.path} element={<route.component />}>
          {renderRoutes(route.childRoutes)}
        </Route>
      );
    });
  };

  return (
    <Router>
      <Routes>{renderRoutes(config)}</Routes>
    </Router>
  );
}

export default AppRouter;
