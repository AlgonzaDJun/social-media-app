import React from "react";

interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className="bg-white shadow-md shadow-gray-400 rounded-md p-2 md:p-4 mb-5">{children}</div>
  );
};

export default Card;
