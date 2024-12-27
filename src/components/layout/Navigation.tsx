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
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2">
            <img src="/lovable-uploads/922cb0fe-2e6f-45c6-be3c-c89b46fead7c.png" alt="Kolerr Logo" className="w-32" />
          </a>
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <NavigationMenuLink
                    href={item.path}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors",
                      "hover:bg-white/10 rounded-md"
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
          <button className="p-2 text-gray-300 hover:text-white">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-300 hover:text-white">
            <Bell className="w-5 h-5" />
          </button>
          <a
            href="/auth/login"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-md hover:opacity-90 transition-opacity"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}