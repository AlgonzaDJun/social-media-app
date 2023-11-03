import React from "react";
import NavigationCard from "./NavigationCard";

interface props {
  children: React.ReactNode;
  hideNavigation?: boolean;
}

const Layout = ({ children, hideNavigation }: props) => {
  return (
    <div className="mt-7 flex gap-2 md:gap-8 max-w-full w-full md:max-w-4xl mx-auto">
      {!hideNavigation && (
        <div className="md:w-3/12">
          <NavigationCard />
        </div>
      )}
      <div className={hideNavigation ? "w-full" : "grow md:w-9/12"}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
