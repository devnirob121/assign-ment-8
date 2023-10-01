import Logo from "./Logo";
import Menu from "./Menu";
const Navbar = () => {
  return (
    <div className="parent z-50  fixed top-0 left-0 right-0 w-full bg-[rgba(255,255,255,.9)]">
      <div className="navbar justify-center  z-50 w-4/5    mx-auto py-5   ">
        <div className=" hidden sm:block flex-1">
          <Logo />
        </div>
        <div className="flex-none">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
