
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <div className="flex items-center text-sm text-muted-foreground">
      <Link
        to="/"
        className="hover:text-foreground transition-colors duration-200"
      >
        Home
      </Link>
      {pathSegments.map((segment, index) => (
        <div key={segment} className="flex items-center">
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link
            to={`/${pathSegments.slice(0, index + 1).join("/")}`}
            className="capitalize hover:text-foreground transition-colors duration-200"
          >
            {segment.replace(/-/g, " ")}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
