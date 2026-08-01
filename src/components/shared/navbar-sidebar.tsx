import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface NavbarItem {
  children: React.ReactNode;
  href: string;
}

interface NavbarSidebarProps {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({
  items,
  open,
  onOpenChange,
}: NavbarSidebarProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>

        <ScrollArea>
          <div className="flex flex-col h-full">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-full text-left p-4 hover:bg-black hover:text-white text-base font-medium"
                onClick={() => onOpenChange(false)}
              >
                {item.children}
              </Link>
            ))}

            <div className="border-t flex flex-col">
              <Link
                href="/sign-in"
                className="w-full text-left p-4 hover:bg-black hover:text-white text-base font-medium"
                onClick={() => onOpenChange(false)}
              >
                Log in
              </Link>
              <Link
                href="/sign-up"
                className="w-full text-left p-4 hover:bg-black hover:text-white text-base font-medium"
                onClick={() => onOpenChange(false)}
              >
                Start selling
              </Link>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
