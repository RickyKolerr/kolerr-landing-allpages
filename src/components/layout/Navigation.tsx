import { Home, Users, Building2, MessageSquare, Phone, FileText, Calendar, Search, Bell } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "For KOLs", path: "/for-kols", icon: Users },
  { name: "For Brands", path: "/for-brands", icon: Building2 },
  { name: "For Agencies", path: "/for-agencies", icon: Building2 },
  { name: "Slots", path: "/slots", icon: Calendar },
  { name: "Features", path: "/features", icon: FileText },
  { name: "Chat & Docs", path: "/chat", icon: MessageSquare },
  { name: "Contact", path: "/contact", icon: Phone },
];

export function Navigation() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2">
            <img src="/lovable-uploads/4ae7b41e-8029-4f8f-88f3-32e7f15fb20c.png" alt="Logo" className="w-8 h-8" />
            <span className="font-bold text-xl text-kolerr-primary">Kolerr</span>
          </a>
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <NavigationMenuLink
                    href={item.path}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-kolerr-primary transition-colors",
                      "hover:bg-gray-50 rounded-md"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:text-kolerr-primary">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-kolerr-primary">
            <Bell className="w-5 h-5" />
          </button>
          <a
            href="/auth/login"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-kolerr-primary hover:bg-kolerr-secondary rounded-md transition-colors"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}