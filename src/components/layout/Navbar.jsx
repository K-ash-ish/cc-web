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
    <div className="  flex justify-between items-center py-4 px-2 bg-white   ">
      <h1 className="text-xl font-light">Some Logo</h1>
      <NavigationMenu className="">
        <NavigationMenuList>
          <NavigationMenuItem className="">
            <NavigationMenuLink className={navigationMenuTriggerStyle() + " "}>
              <a href="" className="text-xl font-thin ">
                Home
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl ">
              Courses
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[250px] flex flex-col">
                <li className="border-2 border-red-500">
                  <NavigationMenuLink asChild>
                    <a href="/" className="flex">
                      One
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a href="">One</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a href="">One</a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle() + " text-xl "}
            >
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle() + " text-xl "}
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navbar;
