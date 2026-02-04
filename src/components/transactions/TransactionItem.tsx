import React from "react";
import { Transaction } from "@/types";
import { formatCurrency } from "@/utils/currency";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowDownCircle, ArrowUpCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface TransactionItemProps {
    transaction: Transaction;
    onDelete: (id: string) => void;
}

export function TransactionItem({ transaction, onDelete }: TransactionItemProps) {
    const isExpense = transaction.type === "EXPENSE";

    return (
        <div className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-4">
                <div className={`p-2 rounded-full ${isExpense ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>
                    {isExpense ? <ArrowDownCircle size={20} /> : <ArrowUpCircle size={20} />}
                </div>
                <div>
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <p className="text-sm text-gray-500">
                        {transaction.category} • {format(new Date(transaction.date), "dd 'de' MMM", { locale: ptBR })}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <span className={`font-semibold ${isExpense ? "text-red-600" : "text-green-600"}`}>
                    {isExpense ? "-" : "+"} {formatCurrency(transaction.amount)}
                </span>
                <Button variant="ghost" size="icon" onClick={() => onDelete(transaction.id)} className="text-gray-400 hover:text-red-600">
                    <Trash2 size={18} />
                </Button>
            </div>
        </div>
    );
}
