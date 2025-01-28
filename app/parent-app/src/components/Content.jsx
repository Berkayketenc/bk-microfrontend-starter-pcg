import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "../routes/routes";

function Content() {
  return (
    <div className="content-container">
      <h1 className="content-container-title">Content Component</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default Content;
