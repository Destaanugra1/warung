"use client";

import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import { useState, useEffect } from "react";
import { Category } from "@/types";
import { MenuIcon } from "lucide-react";
import MobileMenu from "./mobile-menu";

export const revalidate = 0;

const Navbar = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="ml-4 flex lg:ml-8 gap-x-2">
            <p className="font-bold text-xl">FotoCopy</p>
          </Link>
          <MainNav data={categories} />
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </Container>
      {mobileMenuOpen && <MobileMenu data={categories} />}
    </div>
  );
};

export default Navbar;
