"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";

interface MobileMenuProps {
  data: Category[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ data }) => {
  console.log("MobileMenu data:", data); // Add this line to debug the data prop
  return (
    <div className="lg:hidden">
      <nav className="flex flex-col space-y-4 p-4">
        {data.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className={cn(
              "text-sm font-medium transition-colors hover:text-black",
              "text-neutral-500"
            )}
          >
            {category.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;