
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Breadcrumbs from "./Breadcrumbs";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container max-w-7xl mx-auto px-4 py-4">
        <Breadcrumbs />
        <main className="mt-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
