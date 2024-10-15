import NavLink from "./NavLink";

const Header = () => {
  const user = false;

  const navLinks = [
    {
      id: 1,
      children: "خانه",
      path: "/",
    },
    {
      id: 2,
      children: "بلاگ",
      path: "/blogs",
    },
  ];

  return (
    <header className="z-0 bg-inherit border-b border-secondary-300 top-0 sticky">
      <nav className="container xl:max-w-screen-xl">
        <ul className="flex items-center justify-between py-2 text-secondary-400 text-lg">
          <div className="flex items-center gap-x-10 ">
            {navLinks?.map((navlink) => {
              return (
                <li key={navlink?.id}>
                  <NavLink path={navlink.path}>{navlink.children}</NavLink>
                </li>
              );
            })}
          </div>
          <li>
            {user ? (
              <NavLink path="/profile">پروفایل</NavLink>
            ) : (
              <NavLink path="/signin">ورود</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
