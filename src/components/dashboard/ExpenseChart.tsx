import { useStore } from "@/store/useStore";
import { isSameMonth } from "date-fns";
import React, { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Card } from "@/components/ui/Card";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"];

export function ExpenseChart() {
    const { transactions, selectedMonth } = useStore();

    const data = useMemo(() => {
        const expenses = transactions.filter(
            (t) => t.type === "EXPENSE" && isSameMonth(new Date(t.date), selectedMonth)
        );

        const grouped = expenses.reduce((acc, curr) => {
            acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
            return acc;
        }, {} as Record<string, number>);

        return Object.entries(grouped).map(([name, value]) => ({ name, value }));
    }, [transactions, selectedMonth]);

    if (data.length === 0) {
        return (
            <Card className="h-[300px] flex items-center justify-center text-gray-500">
                Sem despesas neste mês.
            </Card>
        );
    }

    return (
        <Card className="h-[350px]">
            <h3 className="font-semibold mb-4">Despesas por Categoria</h3>
            <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value: number) =>
                                new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
                            }
                        />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}
