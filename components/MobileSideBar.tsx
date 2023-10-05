import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import SideBar from "@/components/SideBar";

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4">
        <Menu />
      </SheetTrigger>

      <SheetContent side="left" className="w-20 p-0 pt-10 bg-secondary">
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
