import { Link, NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

function Navbar() {
  return (
    <div className=" w-full shadow-sm shadow-gray-300 rounded-b-xl   mx-auto flex md:justify-end justify-center items-center py-4  bg-white   px-4 min-h-20 ">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive
                  ? "underline  underline-offset-4 decoration-orange-500"
                  : ""
              }
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className=" capitalize grid  gap-3 p-4 bg-white w-[350px] md:w-[250px]  ">
                <Link
                  to="/"
                  className=" hover:bg-gray-100 transition-all duration-500 bg-gray-200 p-2 rounded-md"
                >
                  Mp Board
                </Link>
                <Link
                  to="/"
                  className=" hover:bg-gray-100 transition-all duration-500 bg-gray-200 p-2 rounded-md"
                >
                  cbse Board
                </Link>
                <Link
                  to="/"
                  className=" hover:bg-gray-100 transition-all duration-500 bg-gray-200 p-2 rounded-md"
                >
                  Icse Board
                </Link>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isActive
                  ? "underline underline-offset-4 decoration-orange-500"
                  : "no-underline"
              }
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isActive
                  ? "underline underline-offset-4 decoration-orange-500"
                  : ""
              }
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navbar;
