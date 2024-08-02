import React, { FC } from "react";
import { Button } from "./button";

type MainButtonProps = {
  content: React.ReactNode;

  onClick?: () => void;

  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const MainButton: FC<MainButtonProps> = ({
  content,
  onClick,
  className,
  type,
}) => {
  return (
    <Button
      type={type}
      className={`bg-gradient-to-r from-[#F6758B]  to-[#F9AB76]
      text-white font-bold py-2 px-4 rounded
      hover:from-[#f28598]  hover:to-[#fd9754]
      transition duration-300 ${className}`}
      onClick={onClick}
    >
      {content}
    </Button>
  );
};

export default MainButton;
