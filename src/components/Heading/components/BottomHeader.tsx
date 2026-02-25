import Logo from "./Logo";
import Links from "./Links";
import Input from "./Input";
import Buttons from "./Buttons";
import MobileMenu from "./MobileMenu";

function BottomHeader() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 md:top-10 z-40">
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4 md:gap-8">
        <Logo />

        <div className="hidden md:flex flex-1 justify-center">
          <Links />
        </div>

        <div className="hidden lg:flex flex-1 max-w-md">
          <Input />
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:block">
            <Buttons />
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

export default BottomHeader;

