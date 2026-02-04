import React, { useState } from "react";
import { useStore } from "@/store/useStore";
import { TransactionType } from "@/types";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { v4 as uuidv4 } from "uuid"; // We might need to install uuid or just use random string

interface TransactionFormProps {
    onSuccess: () => void;
}

export function TransactionForm({ onSuccess }: TransactionFormProps) {
    const { addTransaction } = useStore();
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState<TransactionType>("EXPENSE");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!description || !amount || !category) return;

        addTransaction({
            id: crypto.randomUUID(), // Native browser support
            description,
            amount: Number(amount),
            type,
            category,
            date: new Date(date).toISOString(),
        });

        onSuccess();
        setDescription("");
        setAmount("");
        setCategory("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Tipo</label>
                <div className="flex gap-2">
                    <Button
                        type="button"
                        variant={type === "INCOME" ? "primary" : "secondary"}
                        onClick={() => setType("INCOME")}
                        className={type === "INCOME" ? "bg-green-600 hover:bg-green-700" : ""}
                    >
                        Receita
                    </Button>
                    <Button
                        type="button"
                        variant={type === "EXPENSE" ? "primary" : "secondary"}
                        onClick={() => setType("EXPENSE")}
                        className={type === "EXPENSE" ? "bg-red-600 hover:bg-red-700" : ""}
                    >
                        Despesa
                    </Button>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Descrição</label>
                <Input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Ex: Supermercado"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Valor (R$)</label>
                <Input
                    type="number"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0,00"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Categoria</label>
                <Input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Ex: Alimentação"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Data</label>
                <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>

            <div className="pt-2">
                <Button type="submit" className="w-full">
                    Salvar
                </Button>
            </div>
        </form>
    );
}
