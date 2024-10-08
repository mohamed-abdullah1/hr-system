import { Bar, BarChart, CartesianGrid, XAxis, AreaChart, Area } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeDollarSign, Building, Crown, ShieldCheck } from "lucide-react";
import DashboardCardItem from "@/components/DashboardCardItem";
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;
const chartConfigChart2 = {
  desktop: {
    label: "Employees",
    color: "#25eb6e",
  },
  mobile: {
    label: "Revenue",
    color: "#60fa7f",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const Dashboard = () => {
  return (
    <div className="max-w-[90vw]  ">
      <div className="text-2xl py-4 font-bold">Welcome to HR-System [M@]</div>
      {/* TOP CARDS */}
      <div className="flex flex-col lg:flex lg:flex-row gap-2 mb-4">
        <DashboardCardItem
          Icon={<Building size={30} color="#F8B883" />}
          iconBgColor="#FEF8F3"
          title="Total Companies"
          subTitle="14"
        />
        <DashboardCardItem
          Icon={<Crown size={30} color="#38A1FF" />}
          iconBgColor="#EAF6FF"
          title="Total Subscriptions"
          subTitle="14"
        />
        <DashboardCardItem
          Icon={<ShieldCheck size={30} color="#72CF87" />}
          iconBgColor="#F2F7F1"
          title="Total Active Subscription"
          subTitle="14"
        />
        <DashboardCardItem
          Icon={<BadgeDollarSign size={30} color="#FAC10A" />}
          iconBgColor="#FEF9EB"
          title="Total Plans"
          subTitle="14"
        />
      </div>

      {/* CHARTS */}
      <div className="grid grid-flow-col-1  lg:grid-cols-2 grid-rows-1 gap-4">
        {/* CHART 1 */}
        <Card className="p-2">
          <CardHeader>
            <CardTitle>Desktop & Mobile Analysis</CardTitle>
            <CardDescription>
              See the performance of your desktop and mobile
            </CardDescription>
          </CardHeader>
          <ChartContainer
            config={chartConfig}
            className="min-h-[200px] md:w-full"
          >
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />

              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </Card>
        {/* CHART 2 */}
        <Card className="p-2">
          <CardHeader>
            <CardTitle>Employee & Money Analysis</CardTitle>
            <CardDescription>See the performance of your money</CardDescription>
          </CardHeader>
          <ChartContainer
            config={chartConfigChart2}
            className="min-h-[200px] w-full"
          >
            <AreaChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />

              <Area dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Area dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </AreaChart>
          </ChartContainer>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
