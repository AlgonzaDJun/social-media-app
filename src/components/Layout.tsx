import React from "react";
import NavigationCard from "./NavigationCard";

interface props {
  children: React.ReactNode;
}

const Layout = ({ children }: props) => {
  return (
    <div className="mt-7 flex gap-2 md:gap-8 max-w-full w-full md:max-w-4xl mx-auto">
      <div className="md:w-3/12">
        <NavigationCard />
      </div>
      <div className="grow md:w-9/12">
        {children}
      </div>
    </div>
  );
};

export default Layout;
