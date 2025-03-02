import { ThemeToggle } from "./theme-toggle";

const Header = () => {


  return (
    <nav className=" w-full px-3 ">
        
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold z-10">رمضان کریم</h1>
        </div>

        <div className="flex z-10  items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
