import React, { ReactNode } from "react";
import { cn } from "../../lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  const cardClasses = cn(
    "overflow-hidden bg-white rounded-xl ",
    className
  );

  return <div className={cardClasses}>{children}</div>;
};

export default Card;
