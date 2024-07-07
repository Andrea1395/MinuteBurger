import Link from "next/link";
import React from "react";
import Navigation from "./Navigation";
import CartWidget from "./CartWidget";
import MobileMenu from "./MobileMenu";

function MainHeader() {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div className="relative bg-gray-800/25 backdrop-filter backdrop-blur-sm px-4 py-4 rounded-lg text-white mx-4 lg:mx-24  mt-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-10">
            <div className="text-white">
              <Link href="/">
                <img src="/pngegg (2).png" className="w-16" />
                esdtsg
              </Link>
            </div>
            <Navigation />
          </div>
          <div className="flex flex-row items-center gap-6">
            <CartWidget />
            
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
