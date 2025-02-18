
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  Book,
  Group,
  History,
  Settings,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { name: "Study Activities", to: "/study-activities", icon: BookOpen },
  { name: "Words", to: "/words", icon: Book },
  { name: "Word Groups", to: "/groups", icon: Group },
  { name: "Sessions", to: "/sessions", icon: History },
  { name: "Settings", to: "/settings", icon: Settings },
];

const Navigation = () => {
  return (
    <nav className="border-b">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-semibold mr-8">漢字</span>
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/60"
                    )
                  }
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
