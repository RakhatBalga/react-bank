import { useState } from "react";

export interface Transaction {
    id: string;
    text: string;
    amount: number;
}

export const useTransaction = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const addTransaction = (text: string, amount: number) => {
        const newTransaction: Transaction = {
            id: Date.now().toString(),
            text,
            amount
        };

        setTransactions(prev => [...prev, newTransaction]);
    };

    const deleteTransaction = (id: string) => {
        setTransactions(prev => prev.filter(t => t.id !== id));
    };

    const balance = transactions.reduce((acc, t) => acc + t.amount, 0);

    const income = transactions
        .filter(t => t.amount > 0)
        .reduce((acc, t) => acc + t.amount, 0);

    const expense = transactions
        .filter(t => t.amount < 0)
        .reduce((acc, t) => acc + t.amount, 0);

    return {
        transactions,
        addTransaction, 
        setTransactions, 
        deleteTransaction, 
        balance, 
        income, 
        expense, 
    };
};