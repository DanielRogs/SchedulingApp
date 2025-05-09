import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../utils/RoutesConstants";
import PublicLayout from "../layout/PublicLayout";

import Home from "../pages/home";

function PublicRoutes() {
  return (
    <PublicLayout>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </PublicLayout>
  );
}

export default PublicRoutes;