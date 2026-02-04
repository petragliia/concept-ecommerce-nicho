import React from "react";
import { useStore } from "@/store/useStore";
import { TransactionItem } from "./TransactionItem";
import { Card } from "@/components/ui/Card";
import { isSameMonth } from "date-fns";

export function TransactionList() {
    const { transactions, removeTransaction, selectedMonth } = useStore();

    const filteredTransactions = transactions
        .filter((t) => isSameMonth(new Date(t.date), selectedMonth))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    if (filteredTransactions.length === 0) {
        return (
            <Card className="text-center py-8 text-gray-500">
                Nenhuma transação neste mês.
            </Card>
        );
    }

    return (
        <Card className="p-0 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b">
                <h3 className="font-semibold text-gray-700">Transações Recentes</h3>
            </div>
            <div>
                {filteredTransactions.map((t) => (
                    <TransactionItem key={t.id} transaction={t} onDelete={removeTransaction} />
                ))}
            </div>
        </Card>
    );
}
