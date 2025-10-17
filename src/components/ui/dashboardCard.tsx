import React from "react";
import { Card } from "./card";
import { cn } from "@/lib";

const DashboardCard = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <Card
      className={cn(
        "rounded-2xl bg-white/40 backdrop-blur-md shadow-inner flex justify-center items-center p-10",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
};

export default DashboardCard;
