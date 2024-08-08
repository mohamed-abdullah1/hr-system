import { FC, ReactNode } from "react";
import { Card } from "./ui/card";

type Props = {
  Icon: ReactNode;
  title?: string;
  subTitle: string;
  iconBgColor: string;
};
const DashboardCardItem: FC<Props> = ({
  Icon,
  title,
  subTitle,
  iconBgColor,
}) => {
  console.log("🔥✨ ", { iconBgColor });

  return (
    <Card className="h-32 flex-1 flex items-center justify- gap-8 p-4 ">
      {/* ICON CONTAINER */}
      <div
        className={`rounded-full w-16 h-16  flex justify-center items-center     `}
        style={{ backgroundColor: iconBgColor }}
      >
        {Icon}
      </div>
      {/* DESC CONTAINER */}
      <div className="flex flex-col gap-2">
        <p className="text-sm  font-bold">{title}</p>
        <p>{subTitle}</p>
      </div>
    </Card>
  );
};

export default DashboardCardItem;
