"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { useDropdownPosition } from "./use_dropdown_position";
import { SubcategoryMenu } from "./subcategory_menu";
import { CustomCategory } from "../types";
import Link from "next/link";

interface CategoryDropdownProps {
  category: CustomCategory;
  isActive?: boolean;
  isNavigationHovered?: boolean;
}

export const CategoryDropdown = ({ category, isActive, isNavigationHovered }: CategoryDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { getDropdownPosition } = useDropdownPosition(dropdownRef);
  const onMouseEnter = () => {
    if (category.subcategories) {
      setIsOpen(true);
    }
  };
  const onMouseLeave = () => {
    setIsOpen(false);
  };
  const dropdownPosition = getDropdownPosition();

  // Potential mobile feature
  // const toggleDropdown = () => {
  //   if (category.subcategories.length > 0) {
  //     setIsOpen(!isOpen);
  //   }
  // };

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      // onClick={toggleDropdown}
    >
      <div className="relative">
        <Button
          variant="elevated"
          className={cn(
            "hover:border-primary h-11 rounded-full border-transparent bg-transparent px-4 text-black hover:bg-white",
            isActive && !isNavigationHovered && "border-primary bg-white",
            isOpen &&
              "border-primary -translate-x-[4px] -translate-y-[4px] bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
          )}
        >
          <Link href={`/${category.slug === "all" ? "" : category.slug}`}>{category.name}</Link>
        </Button>
        {category.subcategories && category.subcategories.length > 0 && (
          <div
            className={cn(
              "absolute -bottom-3 left-1/2 h-0 w-0 -translate-x-1/2 border-r-10 border-b-10 border-l-10 border-r-transparent border-b-black border-l-transparent opacity-0",
              isOpen && "opacity-100",
            )}
          />
        )}
      </div>
      <SubcategoryMenu category={category} isOpen={isOpen} position={dropdownPosition} />
    </div>
  );
};
