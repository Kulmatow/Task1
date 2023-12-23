import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Page = React.lazy(() => import("pages/Page"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="" element={<Page />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
