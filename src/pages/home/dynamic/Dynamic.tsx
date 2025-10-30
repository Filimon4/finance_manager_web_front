import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", growth: 120, decline: 80 },
  { month: "Feb", growth: 150, decline: 70 },
  { month: "Mar", growth: 180, decline: 90 },
  { month: "Apr", growth: 220, decline: 60 },
  { month: "May", growth: 280, decline: 50 },
  { month: "Jun", growth: 320, decline: 40 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

const Dynamic = () => {
  return (
    <>
      <p>Динамика</p>
      <div className="grid grid-cols-4 gap-2 w-full">
        <div></div>
        <div></div>
        <div></div>
        <Select value="6">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Кол-во месяцев" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3">3 месяца</SelectItem>
            <SelectItem value="6">6 месяцев</SelectItem>
            <SelectItem value="12">12 месяцев</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ChartContainer config={chartConfig} className="w-full h-full">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              className="text-xs"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              className="text-xs"
            />
            <Tooltip content={<ChartTooltipContent />} />

            <defs>
              <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(152, 70%, 50%)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(152, 70%, 50%)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="colorDecline" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(0, 70%, 50%)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(0, 70%, 50%)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <Area
              type="linear"
              dataKey="growth"
              stackId="1"
              stroke="hsl(152, 70%, 50%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorGrowth)"
            />
            <Area
              type="linear"
              dataKey="decline"
              stackId="1"
              stroke="hsl(0, 70%, 50%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorDecline)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </>
  );
};

export default Dynamic;
