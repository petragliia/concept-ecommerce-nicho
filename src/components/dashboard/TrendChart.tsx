import { useStore } from "@/store/useStore";
import { isSameMonth, getDate, format } from "date-fns";
import React, { useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/Card";
import { ptBR } from "date-fns/locale";

export function TrendChart() {
    const { transactions, selectedMonth } = useStore();

    const data = useMemo(() => {
        const monthlyTransactions = transactions.filter((t) =>
            isSameMonth(new Date(t.date), selectedMonth)
        );

        // Create an array for all days in the month (simplified, just existing transaction days) or just aggregate by day
        // Better to map days 1 to EndOfMonth
        const daysInMonth = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1, 0).getDate();
        const chartData = [];
        let runningBalance = 0; // This might be misleading if we don't start from previous month balance. 
        // Spec doesn't specify previous balance carry-over, so let's show "Flow" (Income vs Expense) or Daily Balance change.

        // Let's do Daily Income vs Expense for clarity, or Cumulative Balance starting from 0 for this month view.
        // Spec says "TrendChart". Let's do cumulative balance for the month.

        const transactionsByDay: Record<number, number> = {};

        monthlyTransactions.forEach(t => {
            const day = getDate(new Date(t.date));
            const val = t.type === 'INCOME' ? t.amount : -t.amount;
            transactionsByDay[day] = (transactionsByDay[day] || 0) + val;
        });

        let currentBalance = 0;
        for (let i = 1; i <= daysInMonth; i++) {
            // If we want accurate trend, we need previous balance, but for this scope assume month starts at 0 or just show the month's flow.
            // Let's show the month's flow (cumulative).
            if (transactionsByDay[i]) {
                currentBalance += transactionsByDay[i];
            }
            // Only add data points where we have activity or maybe every few days strictly? 
            // Recharts handles gaps well if we provide all days.
            if (i % 5 === 0 || i === 1 || i === daysInMonth || transactionsByDay[i]) {
                chartData.push({
                    day: i,
                    balance: currentBalance,
                    date: format(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), i), 'dd/MM', { locale: ptBR })
                });
            }
        }

        // Sort just in case
        return chartData.sort((a, b) => a.day - b.day);

    }, [transactions, selectedMonth]);

    return (
        <Card className="h-[350px]">
            <h3 className="font-semibold mb-4">Evolução do Saldo (Mês)</h3>
            <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip
                            formatter={(value: number) =>
                                new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
                            }
                        />
                        <Area type="monotone" dataKey="balance" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.1} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}
