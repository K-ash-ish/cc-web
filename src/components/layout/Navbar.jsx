import { Link, NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

function Navbar() {
  const navItems = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "about",
      to: "/about",
    },
    {
      title: "contact",
      to: "/contact",
    },
  ];
  return (
    <div className=" w-full shadow-sm shadow-gray-300 rounded-b-xl   mx-auto flex md:justify-end justify-center items-center py-4  bg-white   px-4 min-h-20 ">
      <NavigationMenu>
        <NavigationMenuList>
          {navItems?.map((item, index) => {
            return (
              <NavigationMenuItem key={index}>
                <NavLink
                  to={item?.to}
                  className={({ isActive, isTransitioning }) =>
                    [
                      isActive
                        ? "underline  underline-offset-4 decoration-orange-500"
                        : "",
                      isTransitioning ? " " : "",
                    ].join(
                      " group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 md:text-xl  font-medium transition-colors hover:bg-slate-100 text-black hover:text-black focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50"
                    )
                  }
                >
                  {item?.title}
                </NavLink>
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className=" capitalize grid  gap-3 p-4 bg-white w-[350px] md:w-[250px]  ">
                <Link
                  to="/courses/mp"
                  className=" hover:bg-gray-100 transition-all duration-500 bg-gray-200 p-2 rounded-md"
                >
                  Mp Board
                </Link>
                <Link
                  to="/courses/cbse"
                  className=" hover:bg-gray-100 transition-all duration-500 bg-gray-200 p-2 rounded-md"
                >
                  cbse Board
                </Link>
                <Link
                  to="/courses/icse"
                  className=" hover:bg-gray-100 transition-all duration-500 bg-gray-200 p-2 rounded-md"
                >
                  Icse Board
                </Link>
                <Link
                  to="/courses/classroom"
                  className=" hover:bg-gray-100 transition-all duration-500 bg-gray-200 p-2 rounded-md"
                >
                  Classroom Program
                </Link>
                <Link
                  to="/courses/hometution"
                  className=" hover:bg-gray-100 transition-all duration-500 bg-gray-200 p-2 rounded-md"
                >
                  Home Tution
                </Link>
                <Link
                  to="/courses/special"
                  className=" hover:bg-gray-100 transition-all duration-500 bg-gray-200 p-2 rounded-md"
                >
                  Special Courses
                </Link>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navbar;
