import { NavLink } from "react-router-dom";
import type { NavItem } from "@/types/navigation";
import {
    BookOpen,
    PenLine,
    ShoppingCart,
    CookingPot,
    UserRound,
} from "lucide-react";

const navItems: NavItem[] = [
    { path: "/", label: "Plan", icon: BookOpen },
    { path: "/list", label: "List", icon: PenLine },
    { path: "/shop", label: "Shop", icon: ShoppingCart },
    { path: "/cook", label: "Cook", icon: CookingPot },
    { path: "/account", label: "Account", icon: UserRound },
];

function Navbar() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-background flex justify-around items-center h-16 z-50 shadow-md">
            {navItems.map(({ path, label, icon: Icon }) => (
                <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                        `flex flex-col items-center justify-center text-xs border-t-2 h-full w-10  ${
                            isActive
                                ? "text-secondary border-secondary"
                                : "text-gray-500 border-transparent"
                        }`
                    }
                >
                    <Icon className="h-5 w-5 mb-1" />
                    {label}
                </NavLink>
            ))}
        </nav>
    );
}

export default Navbar;
