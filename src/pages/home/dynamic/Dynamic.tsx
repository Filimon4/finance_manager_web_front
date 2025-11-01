import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { useDynamic } from "@/shared/api/dynamic/useDynamic.query";
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  income: { label: "Доход", color: "hsl(152, 70%, 50%)" },
  expense: { label: "Расход", color: "hsl(0, 70%, 50%)" },
};

const monthOptions = [
  { value: 3, label: "3 месяца" },
  { value: 6, label: "6 месяцев" },
  { value: 12, label: "12 месяцев" },
] as const;

const Dynamic = () => {
  const [months, setMonths] = useState<number>(3);

  const { data, isLoading, isSuccess } = useDynamic(months);

  const chartData =
    data?.months.map((m) => ({
      month: new Intl.DateTimeFormat("ru-RU", { month: "short" }).format(
        new Date(m.year, m.month - 1)
      ),
      income: m.income,
      expense: m.expense,
    })) ?? [];

  return (
    <>
      <p>Динамика</p>
      <div className="grid grid-cols-4 gap-2 w-full mb-4">
        <div />
        <div />
        <div />
        <Select
          value={months.toString()}
          onValueChange={(v) => setMonths(Number(v))}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Кол-во месяцев" />
          </SelectTrigger>
          <SelectContent>
            {monthOptions.map(({ value, label }) => (
              <SelectItem key={value} value={value.toString()}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <ChartContainer config={chartConfig} className="w-full h-full">
        {isLoading ? (
          <div className="flex items-center justify-center h-72">
            <span className="text-muted-foreground">Загрузка…</span>
          </div>
        ) : !isSuccess || chartData.length === 0 ? (
          <div className="flex items-center justify-center h-72">
            <span className="text-muted-foreground">
              Нет данных за выбранный период
            </span>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={chartData}
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
                    offset="2%"
                    stopColor="hsl(152, 70%, 50%)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="98%"
                    stopColor="hsl(152, 70%, 50%)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="colorDecline" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="2%"
                    stopColor="hsl(0, 70%, 50%)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="98%"
                    stopColor="hsl(0, 70%, 50%)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>

              <Area
                type="monotone"
                dataKey="income"
                stackId="1"
                stroke="hsl(152, 70%, 50%)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorGrowth)"
              />

              <Area
                type="monotone"
                dataKey="expense"
                stackId="1"
                stroke="hsl(0, 70%, 50%)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorDecline)"
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </ChartContainer>
    </>
  );
};

export default Dynamic;
