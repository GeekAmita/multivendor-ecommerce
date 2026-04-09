import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface NavbarSidebarItem {
  href: string;
  children: React.ReactNode;
}

interface NavbarSidebarProps {
  items: NavbarSidebarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: NavbarSidebarProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="border-b p-4">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex h-full flex-col overflow-y-auto pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex w-full items-center p-4 text-left text-base font-medium hover:bg-black hover:text-white active:bg-black active:text-white"
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}
          <div className="border-t">
            <Link
              href="/sign-in"
              className="flex w-full items-center p-4 text-left text-base font-medium hover:bg-black hover:text-white active:bg-black active:text-white"
              onClick={() => onOpenChange(false)}
            >
              Log In
            </Link>
            <Link
              href="/sign-up"
              className="flex w-full items-center p-4 text-left text-base font-medium hover:bg-black hover:text-white active:bg-black active:text-white"
              onClick={() => onOpenChange(false)}
            >
              Start Selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
