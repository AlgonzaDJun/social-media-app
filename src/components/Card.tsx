import React from "react";

interface Props {
  children: React.ReactNode;
  noPadding?: boolean;
}

const Card = ({ children, noPadding }: Props) => {
  return (
    <div
      className={`bg-white shadow-md shadow-gray-400 rounded-md p-2 md:p-4 mb-5 
        ${noPadding && "p-0 md:p-0"}
        `}
    >
      {children}
    </div>
  );
};

export default Card;
