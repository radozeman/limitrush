import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";

const Nav = () => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopNav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </>
  );
};

export default Nav;
